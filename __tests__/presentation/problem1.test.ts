import module from "@presentation/problem1";

describe("main", () => {
  it("should return results", () => {
    const mockArgs = [
      "100",
      "3",
      "\nPKG1 5 5 OFR001\nPKG2 15 5 OFR002\nPKG3 10 100 OFR003",
    ];
    process.argv = ["node", "file", ...mockArgs];
    const results = ["PKG1, 0, 175", "PKG2, 0, 275", "PKG3, 35, 665"];
    expect(module.main()).toEqual(results);
  });

  it("should return results", () => {
    const mockArgs = ["200", "1", "PKG1 5 5"];
    process.argv = ["node", "file", ...mockArgs];
    const results = ["PKG1, 0, 275"];
    expect(module.main()).toEqual(results);
  });
});
