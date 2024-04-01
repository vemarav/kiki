import Datum from "@infra/data";
import module from "@presentation/kiki";

describe("main", () => {
  beforeEach(() => {
    Datum.clear();
  });

  it("should return results", () => {
    const input = `100 3
PKG1 5 5 OFR001
PKG2 15 5 OFR002
PKG3 10 100 OFR003`;
    const mockArgs = [input];
    process.argv = ["node", "file", ...mockArgs];
    const results = ["PKG1 0 175", "PKG2 0 275", "PKG3 35 665"];
    expect(module.main()).toEqual(results);
  });

  it("should return results", () => {
    const input = `200 1
PKG1 5 5`;
    const mockArgs = [input];
    process.argv = ["node", "file", ...mockArgs];
    const results = ["PKG1 0 275"];
    expect(module.main()).toEqual(results);
  });
});
