import Datum from "@infra/data";
import module from "@presentation/problem1";

describe("main", () => {
  let originalConsoleLog: any;

  beforeEach(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  it("should return results", () => {
    const mockArgs = [
      "100",
      "3",
      "PKG1",
      "5",
      "5",
      "OFR001",
      "PKG2",
      "15",
      "5",
      "OFR002",
      "PKG3",
      "10",
      "100",
      "OFR003",
    ];
    process.argv = ["node", "file", ...mockArgs];
    const results = ["PKG1, 0, 175", "PKG2, 0, 275", "PKG3, 35, 665"];
    expect(module.main()).toEqual(results);
    expect(Datum.toString()).toBe(
      'baseDeliveryCost: 100, numberOfPackages: 3, packages: [{"name":"PKG1","weight":5,"distance":5,"offer":"OFR001"},{"name":"PKG2","weight":15,"distance":5,"offer":"OFR002"},{"name":"PKG3","weight":10,"distance":100,"offer":"OFR003"}], offers: [{"code":"OFR001","discountPercentage":10,"distance":{"min":0,"max":200,"unit":"km"},"weight":{"min":70,"max":200,"unit":"kg"}},{"code":"OFR002","discountPercentage":7,"distance":{"min":50,"max":150,"unit":"km"},"weight":{"min":100,"max":150,"unit":"kg"}},{"code":"OFR003","discountPercentage":5,"distance":{"min":50,"max":250,"unit":"km"},"weight":{"min":10,"max":150,"unit":"kg"}}]'
    );
  });

  it("should return results", () => {
    const mockArgs = ["100", "3", "PKG1", "5", "5"];
    process.argv = ["node", "file", ...mockArgs];
    const results = ["PKG1, 0, 175"];
    expect(module.main()).toEqual(results);
    expect(Datum.toString()).toBe(
      'baseDeliveryCost: 100, numberOfPackages: 3, packages: [{"name":"PKG1","weight":5,"distance":5}], offers: [{"code":"OFR001","discountPercentage":10,"distance":{"min":0,"max":200,"unit":"km"},"weight":{"min":70,"max":200,"unit":"kg"}},{"code":"OFR002","discountPercentage":7,"distance":{"min":50,"max":150,"unit":"km"},"weight":{"min":100,"max":150,"unit":"kg"}},{"code":"OFR003","discountPercentage":5,"distance":{"min":50,"max":250,"unit":"km"},"weight":{"min":10,"max":150,"unit":"kg"}}]'
    );
  });
});
