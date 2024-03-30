#!/usr/bin/env node

import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import OfferRepository from "@infra/repositories/Offer.repository";
import ApplyDiscountUseCase from "@domain/useCases/ApplyDiscountUseCase";
import CalcDeliveryCostUseCase from "@domain/useCases/CalcDeliverCostUseCase";
import Datum from "@infra/data";
import OfferValidator from "@domain/validators/Offer.validator";

export function getPackages(numberOfPackages: number, pkgs: string) {
  const packageInputs = pkgs.split("\n").filter((e) => e);
  const packages: Package[] = [];

  for (let n = 0; n < numberOfPackages; n++) {
    try {
      const pkg = packageInputs[n].split(" ");

      packages.push(
        Package.build(pkg[0], Number(pkg[1]), Number(pkg[2]), pkg[3])
      );
    } catch (e) {
      throw new Error("Invalid input");
    }
  }

  return packages;
}

export function main() {
  const argv = [...process.argv];
  const args = argv.slice(2); // remove node and filename from command-line arguments

  const [baseDeliveryCost, numberOfPackages, pkgs] = args;
  Datum.baseDeliveryCost = Number(baseDeliveryCost);
  Datum.numberOfPackages = Number(numberOfPackages);
  Datum.packages = getPackages(Datum.numberOfPackages, pkgs);

  Datum.offers = [
    Offer.build("OFR001", 10, 0, 200, 70, 200),
    Offer.build("OFR002", 7, 50, 150, 100, 150),
    Offer.build("OFR003", 5, 50, 250, 10, 150),
  ];

  const offerRepo = new OfferRepository();
  const applyDiscountUseCase = new ApplyDiscountUseCase(new OfferValidator());
  const calcDeliverCostUseCase = new CalcDeliveryCostUseCase();

  const results: string[] = [];
  for (const pkg of Datum.packages) {
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

    results.push(`${pkg.name}, ${discount}, ${costAfterDiscount}`);
  }

  return results;
}

export default { main, getPackages };
