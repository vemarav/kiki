import BaseEntity from "./Base.entity";
import Package from "./Package.entity";

type VehicleParams = {
  speed: number;
  weight: number;
};

export default class Vehicle extends BaseEntity<Vehicle> {
  static #id = 0;
  id: number;
  speed: number;
  weight: number;
  packages: Package[];
  deliveryTime: number;

  constructor(params: VehicleParams, id?: number) {
    super();
    this.id = id ?? ++Vehicle.#id;
    this.speed = params.speed;
    this.weight = params.weight;
    this.packages = [];
    this.deliveryTime = 0;
  }

  static build(speed: number, weight: number, id?: number) {
    return new Vehicle({ speed, weight }, id);
  }
}
