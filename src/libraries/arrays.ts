import Numbers from "./numbers";

export default class Arrays {
  public static randomItem<T>(array: T[]): T {
    return array[Numbers.between(0, array.length - 1)] as T;
  }
  public static randomItems<T>(array: T[], quantity: number): T[] {
    return Arrays.shuffle(array).slice(0, quantity);
  }
  public static random(quantity: number): number[] {
    return Array.from({ length: quantity }, () => Numbers.digit());
  }
  public static shuffle<T>(array: T[]): T[] {
    return array.sort(() => Numbers.between(0, 1) - 0.5);
  }
}
