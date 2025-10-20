export default class Numbers {
  public static between(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public static digit(): number {
    return Numbers.between(0, 9);
  }
  public static digits(length: number): number {
    if(length === 0) return 0;
    return Numbers.between(10 ** (length - 1), 10 ** length - 1);
  }
  public static decimal(
    min: number,
    max: number,
    decimalPlaces: number
  ): number {
    const integer: number = Numbers.between(min, max);
    const decimal: number = Numbers.digits(decimalPlaces);

    return Number.parseFloat(`${integer}.${decimal}`);
  }
}
