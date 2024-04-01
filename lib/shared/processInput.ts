import Package from "@domain/entities/Package.entity";
import Vehicle from "@domain/entities/Vehicle.entity";
import Datum from "@infra/data";

export function getPackages(pkgs: string[]) {
  const packages: Package[] = [];

  for (let n = 1; n <= Datum.numberOfPackages; n++) {
    try {
      const pkg = pkgs[n].split(" ");

      packages.push(
        Package.build(pkg[0], Number(pkg[1]), Number(pkg[2]), pkg[3])
      );
    } catch (e) {
      throw new Error("Invalid input");
    }
  }

  return packages;
}

export function getVehicles(shouldSetIdManually?: boolean): Vehicle[] {
  const vehicles: Vehicle[] = [];
  try {
    for (let i = 0; i < Datum.numberOfVehicles; i++) {
      vehicles.push(
        new Vehicle(Datum.vehicle, shouldSetIdManually ? i + 1 : undefined)
      );
    }
  } catch (e) {
    throw new Error("Invalid input");
  }

  return vehicles;
}
