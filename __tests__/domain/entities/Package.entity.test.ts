import Package from "@domain/entities/Package.entity";

describe("Package.entity", () => {
  // PKG1 5 5 OFR001
  it("creates a package with name PKG1, weight 5kg, distance 5km, OFR001", () => {
    const offer = "OFR001";
    const name = "PKG1";
    const weight = 5;
    const distance = 5;
    const pkg = Package.build(name, weight, distance, offer);

    expect(pkg.name).toBe(name);
    expect(pkg.weight).toBe(weight);
    expect(pkg.distance).toBe(distance);
    expect(pkg.offer).toBe(offer);
  });

  // PKG2 15 5 OFR002
  it("creates a package with name PKG2, weight 15kg, distance 5km, OFR002", () => {
    const offer = "OFR002";
    const name = "PKG2";
    const weight = 15;
    const distance = 5;
    const pkg = Package.build(name, weight, distance, offer);

    expect(pkg.name).toBe(name);
    expect(pkg.weight).toBe(weight);
    expect(pkg.distance).toBe(distance);
    expect(pkg.offer).toBe(offer);
  });

  // PKG3 10 100 OFR003
  it("creates a package with name PKG3, weight 10kg, distance 100km, OFR003", () => {
    const offer = "OFR003";
    const name = "PKG3";
    const weight = 10;
    const distance = 100;
    const pkg = Package.build(name, weight, distance, offer);

    expect(pkg.name).toBe(name);
    expect(pkg.weight).toBe(weight);
    expect(pkg.distance).toBe(distance);
    expect(pkg.offer).toBe(offer);
  });
});
