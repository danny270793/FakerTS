export default class Booleans {
  public static boolean(probability: number): boolean {
    return Math.random() < probability;
  }
}
