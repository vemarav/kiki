#!/usr/bin/env node

import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import OfferRepository from "@infra/repositories/Offer.repository";
import ApplyDiscountUseCase from "@domain/useCases/ApplyDiscountUseCase";
import CalcDeliveryCostUseCase from "@domain/useCases/CalcDeliverCostUseCase";
import Datum from "@infra/data";
import OfferValidator from "@domain/validators/Offer.validator";

import { getPackages, getVehicles } from "@shared/processInput";
import Output from "./output";
import toPrecision from "@shared/precision";

function groupPackages(packages: Package[], threshold: number) {
  const groups: Package[][] = [];
  let currentGroup: Package[] = [];

  for (const pkg of packages) {
    if (
      currentGroup.reduce((total, p) => total + p.weight, 0) + pkg.weight <=
      threshold
    ) {
      currentGroup.push(pkg);
    } else {
      groups.push(currentGroup);
      currentGroup = [pkg];
    }
  }

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups.sort((a, b) => b.length - a.length);
}

export function main() {
  const argv = [...process.argv];
  const args = argv.slice(2)[0].split("\n"); // remove node and filename from command-line arguments

  const [baseDeliveryCost, numberOfPackages] = args[0].split(" ");

  Datum.baseDeliveryCost = Number(baseDeliveryCost);
  Datum.numberOfPackages = Number(numberOfPackages);

  // prettier-ignore
  const [numberOfVehicles, speed, weight] = args[Datum.numberOfPackages + 1].split(" ");

  Datum.numberOfVehicles = Number(numberOfVehicles);
  Datum.vehicle = { speed: Number(speed), weight: Number(weight) };
  Datum.packages = getPackages(args);
  Datum.vehicles = getVehicles();
  Datum.offers = [
    Offer.build("OFR001", 10, 0, 200, 70, 200),
    Offer.build("OFFR002", 7, 50, 150, 100, 150),
    Offer.build("OFFR003", 5, 50, 250, 10, 150),
  ];

  const packages = [...Datum.packages].sort((p1, p2) => p2.weight - p1.weight);
  const groups = groupPackages(packages, Datum.vehicle.weight);

  const offerRepo = new OfferRepository();
  const applyDiscountUseCase = new ApplyDiscountUseCase(new OfferValidator());
  const calcDeliverCostUseCase = new CalcDeliveryCostUseCase();

  const deliveries: Output[] = [];

  for (const group of groups) {
    // pick available vehicle for next delivery
    const vehicle = Datum.vehicles.sort(
      (a, b) => a.deliveryTime - b.deliveryTime
    )[0];

    const deliveredPackages = [];
    for (const pkg of group) {
      const time = toPrecision(pkg.distance / vehicle.speed, 2);
      deliveredPackages.push(time);
      const pkgDeiveryTime = Number((vehicle.deliveryTime + time).toFixed(2));

      const totalCost = calcDeliverCostUseCase.execute({
        baseDeliveryCost: Datum.baseDeliveryCost,
        weight: pkg.weight,
        distance: pkg.distance,
      });

      const costAfterDiscount = applyDiscountUseCase.execute(
        totalCost,
        pkg,
        offerRepo.findOffer(pkg.offer)
      );

      const discount = totalCost - costAfterDiscount;
      deliveries.push(
        Output.build(pkg.name, discount, costAfterDiscount, pkgDeiveryTime)
      );
    }
    const max = Math.max(...deliveredPackages);
    vehicle.deliveryTime += 2 * max;
  }

  const resultFn = (o: Output) => {
    return `${o.pkgName} ${o.discount} ${o.cost} ${o.time}`;
  };

  const results: string[] = deliveries
    .sort((a, b) => {
      if (a.pkgName > b.pkgName) return 1;
      if (b.pkgName > a.pkgName) return -1;
      return 0;
    })
    .map(resultFn);

  return results;
}

export default { main, getPackages };
