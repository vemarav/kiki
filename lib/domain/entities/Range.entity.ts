import BaseEntity from "@domain/entities/Base.entity";
import RangeUnit from "@domain/enums/RangeUnit.enum";

type Params = {
  unit: RangeUnit;
  min: number;
  max: number;
};

export default class Range extends BaseEntity<Range> {
  min: number;
  max: number;
  unit: string;

  constructor(params: Params) {
    super();
    this.min = params.min;
    this.max = params.max;
    this.unit = params.unit;
  }

  static build(
    min: number,
    max: number,
    unit: RangeUnit = RangeUnit.None
  ): Range {
    return new Range({ min, max, unit });
  }
}
