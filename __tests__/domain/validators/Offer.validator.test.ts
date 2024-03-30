import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import OfferValidator from "@domain/validators/Offer.validator";

describe("Offer validator", () => {
  let offerValidator: OfferValidator;

  beforeEach(() => {
    offerValidator = new OfferValidator();
  });

  it("OFR001 applies 10% discount on valid package", () => {
    const offer = Offer.build("OFR001", 10, 0, 200, 70, 200);
    const pkg = Package.build("PKG1", 100, 50, offer.code);

    const isValid = offerValidator.validate(offer, pkg);
    expect(isValid).toBeTruthy();
  });

  it("OFR001 applies 0% discount on package if coupon not valid", () => {
    const offer = Offer.build("OFR001", 10, 0, 200, 70, 200);
    const pkg = Package.build("PKG1", 50, 50, offer.code);

    const isValid = offerValidator.validate(offer, pkg);
    expect(isValid).toBeFalsy();
  });
});
