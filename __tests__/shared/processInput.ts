import Package from "@domain/entities/Package.entity";
import Vehicle from "@domain/entities/Vehicle.entity";
import Datum from "@infra/data";
import { getPackages, getVehicles } from "@shared/processInput";

describe("shared processInputs", () => {
  it("getPackages should return packages", () => {
    Datum.numberOfPackages = 3;
    const input = [
      "100 3",
      "PKG1 5 5 OFR001",
      "PKG2 15 5 OFR002",
      "PKG3 10 100 OFR003",
    ];
    expect(getPackages(input)).toEqual([
      Package.build("PKG1", 5, 5, "OFR001"),
      Package.build("PKG2", 15, 5, "OFR002"),
      Package.build("PKG3", 10, 100, "OFR003"),
    ]);
  });

  it("getVehicles should return vehicles", () => {
    Datum.numberOfPackages = 3;
    Datum.numberOfVehicles = 2;
    Datum.vehicle = { speed: 50, weight: 100 };
    expect(getVehicles()).toEqual([
      Vehicle.build(50, 100, 1),
      Vehicle.build(50, 100, 2),
    ]);
  });
});
