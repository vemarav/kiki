import Offer from "@domain/entities/Offer.entity";
import Package from "@domain/entities/Package.entity";
import ApplyDiscountUseCase from "@domain/useCases/ApplyDiscountUseCase";
import CalcDeliveryCostUseCase from "@domain/useCases/CalcDeliverCostUseCase";
import OfferValidator from "@domain/validators/Offer.validator";

describe("ApplyDiscountUseCase", () => {
  let offerValidator: OfferValidator;
  let calcDeliveryCostUseCase: CalcDeliveryCostUseCase;
  let applyDiscountUseCase: ApplyDiscountUseCase;

  beforeEach(() => {
    offerValidator = new OfferValidator();
    calcDeliveryCostUseCase = new CalcDeliveryCostUseCase();
    applyDiscountUseCase = new ApplyDiscountUseCase(offerValidator);
  });

  it("OFR001 applies 10% discount on valid package", () => {
    const offer = Offer.build("OFR001", 10, 0, 200, 70, 200);
    const pkg = Package.build("PKG1", 100, 50, offer.code);
    const totalCost = calcDeliveryCostUseCase.execute({
      baseDeliveryCost: 100,
      ...pkg,
    });

    expect(totalCost).toBe(1350);
    const costAfterDiscount = applyDiscountUseCase.execute(
      totalCost,
      pkg,
      offer
    );
    const tenPercent = 10 / 100;
    expect(costAfterDiscount).toBe(1350 - 1350 * tenPercent);
    expect(totalCost - costAfterDiscount).toBe(135);
  });

  it("OFR001 applies 0% discount on package if coupon not valid", () => {
    const offer = Offer.build("OFR001", 10, 0, 200, 70, 200);
    const pkg = Package.build("PKG1", 10, 50, offer.code);
    const totalCost = calcDeliveryCostUseCase.execute({
      baseDeliveryCost: 100,
      ...pkg,
    });

    expect(totalCost).toBe(450);
    const costAfterDiscount = applyDiscountUseCase.execute(
      totalCost,
      pkg,
      offer
    );

    expect(costAfterDiscount).toBe(450);
    expect(totalCost - costAfterDiscount).toBe(0);
  });
});
