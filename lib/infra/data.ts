import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import Vehicle from "@domain/entities/Vehicle.entity";

export default class Datum {
  static baseDeliveryCost = 0;
  static numberOfPackages = 0;
  static packages: Package[] = [];
  static offers: Offer[] = [];
  static vehicles: Vehicle[] = [];
  static numberOfVehicles: number = 0;
  static vehicle: { speed: number; weight: number } = { speed: 0, weight: 0 };

  static clear() {
    this.baseDeliveryCost = 0;
    this.numberOfPackages = 0;
    this.packages = [];
    this.offers = [];
    this.vehicles = [];
    this.numberOfVehicles = 0;
    this.vehicle = { speed: 0, weight: 0 };
  }

  static toString() {
    return `baseDeliveryCost: ${this.baseDeliveryCost}, numberOfPackages: ${
      this.numberOfPackages
    }, packages: ${JSON.stringify(this.packages)}, offers: ${JSON.stringify(
      this.offers
    )}, vehicles: ${JSON.stringify(this.vehicles)}`;
  }
}
