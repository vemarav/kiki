import IUseCase from "./IUseCase";

type ExecureParams = {
  baseDeliveryCost: number;
  weight: number;
  distance: number;
};

export default class CalcDeliveryCostUseCase implements IUseCase {
  execute(params: ExecureParams) {
    return params.baseDeliveryCost + params.weight * 10 + params.distance * 5;
  }
}
