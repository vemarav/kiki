import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import IValidator from "./IValidator";

export default class OfferValidator implements IValidator {
  validate(offer: Offer, pkg: Package): boolean {
    const isValidDistance =
      pkg.distance <= offer.distance.max && pkg.distance >= offer.distance.min;
    const isValidWeight =
      pkg.weight <= offer.weight.max && pkg.weight >= offer.weight.min;
    return isValidDistance && isValidWeight;
  }
}
