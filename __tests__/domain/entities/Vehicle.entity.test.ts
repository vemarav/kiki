import Vehicle from "@domain/entities/Vehicle.entity";

describe("Vehicle", () => {
  it("create a vehicle with max speed = 70, max weight = 200", () => {
    const vehicle = Vehicle.build(70, 200);
    expect(vehicle.speed).toBe(70);
    expect(vehicle.weight).toBe(200);
  });

  it("create a vehicle with max speed = 50, max weight = 70", () => {
    const vehicle = Vehicle.build(50, 70);
    expect(vehicle.speed).toBe(50);
    expect(vehicle.weight).toBe(70);
  });
});
