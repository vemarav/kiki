import Vehicle from "@domain/entities/Vehicle.entity";
import Datum from "@infra/data";
import module from "@presentation/tombo";

describe("main", () => {
  beforeEach(() => {
    Datum.clear();
  });

  it("should return results", () => {
    const input = `100 5
PKG1 50 30 OFR001
PKG2 75 125 OFFR0008
PKG3 175 100 OFFR003
PKG4 110 60 OFFR002
PKG5 155 95 NA
2 70 200
`;
    const mockArgs = [input];
    process.argv = ["node", "file", ...mockArgs];
    const results = [
      "PKG1 0 750 3.98",
      "PKG2 0 1475 1.78",
      "PKG3 0 2350 1.42",
      "PKG4 105 1395 0.85",
      "PKG5 0 2125 4.19",
    ];
    expect(module.main()).toEqual(results);
  });

  it("should return results", () => {
    const input = `100 3
PKG2 75 125 OFFR0008
PKG3 175 100 OFFR003
PKG4 110 60 OFFR002
2 70 200`;
    const mockArgs = [input];
    process.argv = ["node", "file", ...mockArgs];
    const results = [
      "PKG2 0 1475 1.78",
      "PKG3 0 2350 1.42",
      "PKG4 105 1395 0.85",
    ];
    expect(module.main()).toEqual(results);
  });
});
