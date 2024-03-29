import Range from "@domain/entities/Range.entity";
import RangeUnit from "@domain/enums/RangeUnit.enum";

describe("Range.entity", () => {
  it("range.equals(other)", () => {
    const range = Range.build(50, 200);
    const other = Range.build(50, 200);
    const other2 = Range.build(0, 100);

    expect(range.equals(other)).toBeTruthy();
    expect(range.equals(other2)).toBeFalsy();
  });

  it("create a range of 50 - 100", () => {
    const range = Range.build(50, 100);
    expect(range).toEqual(Range.build(50, 100));
  });

  it("create a kilometers range of < 200", () => {
    const range = Range.build(0, 200, RangeUnit.Distance);
    expect(range.unit).toBe(RangeUnit.Distance);
    expect([range.min, range.max]).toEqual([0, 200]);
  });

  it("create a weight range of < 200", () => {
    const range = Range.build(0, 200, RangeUnit.Weight);
    expect(range.unit).toBe(RangeUnit.Weight);
    expect([range.min, range.max]).toEqual([0, 200]);
  });
});
