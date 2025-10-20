import Numbers from "./numbers";

export default class Arrays {
  public static random<T>(array: T[]): T {
    return array[Numbers.between(0, array.length - 1)] as T;
  }
}
