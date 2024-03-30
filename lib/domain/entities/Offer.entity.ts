import Range from "@domain/entities/Range.entity";
import BaseEntity from "@domain/entities/Base.entity";
import RangeUnit from "@domain/enums/RangeUnit.enum";

type Params = {
  code: string;
  discountPercentage: number;
  distance: Range;
  weight: Range;
};

export default class Offer extends BaseEntity<Offer> {
  code: string;
  discountPercentage: number;
  distance: Range;
  weight: Range;

  constructor(params: Params) {
    super();
    this.code = params.code;
    this.discountPercentage = params.discountPercentage;
    this.distance = params.distance;
    this.weight = params.weight;
  }

  static build(
    code: string,
    discountPercentage: number,
    minDistance: number,
    maxDistance: number,
    minWeight: number,
    maxWeight: number
  ) {
    return new Offer({
      code,
      discountPercentage,
      distance: Range.build(minDistance, maxDistance, RangeUnit.Distance),
      weight: Range.build(minWeight, maxWeight, RangeUnit.Weight),
    });
  }
}
