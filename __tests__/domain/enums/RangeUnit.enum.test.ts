import RangeUnit from "@domain/enums/RangeUnit.enum";

describe("RangeUnit.enum", () => {
  it("RangeUnit.None should be empty", () => {
    expect(RangeUnit.None).toBe("");
  });

  it("RangeUnit.Distance should be km", () => {
    expect(RangeUnit.Distance).toBe("km");
  });

  it("RangeUnit.Weight should be kg", () => {
    expect(RangeUnit.Weight).toBe("kg");
  });
});
