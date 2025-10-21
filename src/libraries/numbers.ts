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
  public static even(min: number = 0, max: number = 100): number {
    const minEven = min % 2 === 0 ? min : min + 1;
    const maxEven = max % 2 === 0 ? max : max - 1;
    const randomInRange = Numbers.between(minEven / 2, maxEven / 2);
    return randomInRange * 2;
  }
  public static odd(min: number = 0, max: number = 100): number {
    const minOdd = min % 2 !== 0 ? min : min + 1;
    const maxOdd = max % 2 !== 0 ? max : max - 1;
    const randomInRange = Numbers.between((minOdd - 1) / 2, (maxOdd - 1) / 2);
    return randomInRange * 2 + 1;
  }
  public static positive(max: number = 1000): number {
    return Numbers.between(1, max);
  }
  public static negative(min: number = -1000): number {
    return Numbers.between(min, -1);
  }
  public static float(min: number = 0, max: number = 1): number {
    return Math.random() * (max - min) + min;
  }
  public static percentage(): number {
    return Numbers.between(0, 100);
  }
  public static binary(): string {
    return Numbers.between(0, 1).toString();
  }
  public static octal(): string {
    return Numbers.between(0, 7).toString();
  }
  public static prime(): number {
    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
      73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
      157, 163, 167, 173, 179, 181, 191, 193, 197, 199
    ];
    const index = Numbers.between(0, primes.length - 1);
    return primes[index] as number;
  }
}
