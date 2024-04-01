import toPrecision from "@shared/precision";

describe("toPrecision should not round up or trim 0", () => {
  it("set precision to 2 decimal points", () => {
    expect(toPrecision(1.376843, 2)).toBe(1.37);
    expect(toPrecision(1.404, 2).toFixed(2)).toBe("1.40");
  });
});
