import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";

export default class Datum {
  static baseDeliveryCost = 0;
  static numberOfPackages = 0;
  static packages: Package[] = [];
  static offers: Offer[] = [];

  static toString() {
    return `baseDeliveryCost: ${this.baseDeliveryCost}, numberOfPackages: ${
      this.numberOfPackages
    }, packages: ${JSON.stringify(this.packages)}, offers: ${JSON.stringify(
      this.offers
    )}`;
  }
}
