import Package from "@domain/entities/Package.entity";
import IUseCase from "./IUseCase";
import Offer from "@domain/entities/Offer.entity";
import OfferValidator from "@domain/validators/Offer.validator";

export default class ApplyDiscountUseCase implements IUseCase {
  validator: OfferValidator;
  constructor(validator: OfferValidator) {
    this.validator = validator;
  }

  execute(totalCost: number, pkg: Package, offer: Offer): number {
    const isValid = this.validator.validate(offer, pkg);
    return isValid
      ? totalCost * (1 - offer.discountPercentage / 100)
      : totalCost;
  }
}
