export default class Numbers {
  public static between(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public static digit(): number {
    return Math.floor(Math.random() * 10);
  }
  public static digits(length: number): number {
    return Math.floor(Math.random() * 10 ** length);
  }
  public static decimal(min: number, max: number, decimalPlaces: number): number {
    const integer: number = Numbers.between(min, max)
    const decimal: number = Numbers.digits(decimalPlaces)

    return Number.parseFloat(`${integer}.${decimal}`)
  }
}
