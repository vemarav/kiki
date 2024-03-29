export default class BaseEntity<T> {
  equals(other: T) {
    return JSON.stringify(this) === JSON.stringify(other);
  }
}
