type OutputParams = {
  pkgName: string;
  discount: number;
  cost: number;
  time: number;
};

export default class Output {
  pkgName: string;
  discount: number;
  cost: number;
  time: number;

  constructor(params: OutputParams) {
    this.pkgName = params.pkgName;
    this.discount = params.discount;
    this.cost = params.cost;
    this.time = params.time;
  }

  static build(pkgName: string, discount: number, cost: number, time: number) {
    return new Output({
      pkgName,
      discount,
      cost,
      time,
    });
  }
}
