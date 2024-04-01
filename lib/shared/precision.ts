type precision = number;
export default function toPrecision(n: number, p: precision) {
  return Math.floor(n * Math.pow(10, p)) / Math.pow(10, p);
}
