import Package from "@domain/entities/Package.entity";
import CalcDeliveryCostUseCase from "@domain/useCases/CalcDeliverCostUseCase";

describe("CalcDeliverCostUseCase", () => {
  let calcDeliverCostUseCase: CalcDeliveryCostUseCase;

  beforeEach(() => {
    calcDeliverCostUseCase = new CalcDeliveryCostUseCase();
  });

  it("base cost for pkg with 5km distance and 5kg weight should be 175", () => {
    const pkg = Package.build("PKG1", 5, 5, "OFR001");
    expect(calcDeliverCostUseCase).toBeInstanceOf(CalcDeliveryCostUseCase);
    expect(
      calcDeliverCostUseCase.execute({
        baseDeliveryCost: 100,
        distance: pkg.distance,
        weight: pkg.distance,
      })
    ).toBe(175);
  });

  it("base cost for pkg with 50km distance and 75kg weight should be 175", () => {
    const pkg = Package.build("PKG1", 50, 75, "OFR001");
    expect(calcDeliverCostUseCase).toBeInstanceOf(CalcDeliveryCostUseCase);
    expect(
      calcDeliverCostUseCase.execute({
        baseDeliveryCost: 100,
        distance: pkg.distance,
        weight: pkg.distance,
      })
    ).toBe(1225);
  });
});
