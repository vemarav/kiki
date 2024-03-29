import Range from "@domain/entities/Range.entity";
import BaseEntity from "@domain/entities/Base.entity";
import RangeUnit from "@domain/enums/RangeUnit.enum";

type Params = {
  name: string;
  discountPercentage: number;
  distance: Range;
  weight: Range;
};

export default class Offer extends BaseEntity<Offer> {
  name: string;
  discountPercentage: number;
  distance: Range;
  weight: Range;

  constructor(params: Params) {
    super();
    this.name = params.name;
    this.discountPercentage = params.discountPercentage;
    this.distance = params.distance;
    this.weight = params.weight;
  }

  static build(
    name: string,
    discountPercentage: number,
    minDistance: number,
    maxDistance: number,
    minWeight: number,
    maxWeight: number
  ) {
    return new Offer({
      name,
      discountPercentage,
      distance: Range.build(minDistance, maxDistance, RangeUnit.Distance),
      weight: Range.build(minWeight, maxWeight, RangeUnit.Weight),
    });
  }
}
