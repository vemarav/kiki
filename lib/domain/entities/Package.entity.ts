import BaseEntity from "@domain/entities/Base.entity";

type Params = {
  name: string;
  weight: number;
  distance: number;
  offer: string;
};

export default class Package extends BaseEntity<Package> {
  name: string;
  weight: number;
  distance: number;
  offer: string;

  constructor(params: Params) {
    super();
    this.name = params.name;
    this.weight = params.weight;
    this.distance = params.distance;
    this.offer = params.offer;
  }

  static build(name: string, weight: number, distance: number, offer: string) {
    return new Package({
      name,
      weight,
      distance,
      offer,
    });
  }
}
