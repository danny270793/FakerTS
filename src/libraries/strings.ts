import Arrays from './arrays';
import Numbers from './numbers';

type WildcardCallback = (
  character: string,
  position: number
) => string | number;

export default class Strings {
  private static readonly HEX_CHARS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  public static character(): string {
    return String.fromCodePoint(Numbers.between(97, 122));
  }
  public static characters(length: number): string {
    return Array.from({ length }, () => Strings.character()).join('');
  }
  public static whildcard(text: string, callback: WildcardCallback): string {
    const newText: string[] = [];
    for (let index: number = 0; index < text.length; index++) {
      newText.push(callback(text[index] || '', index).toString());
    }
    return newText.join('');
  }
  public static hex(): string {
    return Arrays.randomItem(Strings.HEX_CHARS);
  }
  public static hexify(text: string): string {
    return Strings.whildcard(text, (character: string) =>
      character === 'H' ? Strings.hex() : character
    );
  }
  public static ascii(): string {
    return String.fromCodePoint(Numbers.between(32, 126));
  }
  public static asciiify(text: string): string {
    return Strings.whildcard(text, (character: string) =>
      character === '*' ? Strings.ascii() : character
    );
  }
  public static numerify(text: string): string {
    return Strings.whildcard(text, (character: string) =>
      character === '#' ? Numbers.digit() : character
    );
  }
  public static lexify(text: string): string {
    return Strings.whildcard(text, (character: string) =>
      character === '?' ? Strings.character() : character
    );
  }
  public static allify(text: string): string {
    return Strings.hexify(
      Strings.asciiify(Strings.numerify(Strings.lexify(text)))
    );
  }
  public static uuid(): string {
    return Strings.hexify('HHHHHHHH-HHHH-HHHH-HHHH-HHHHHHHHHHHH');
  }
  public static repeat(text: string, quantity: number): string {
    const repeated: string[] = [];
    for (let index: number = 0; index < quantity; index++) {
      repeated.push(text);
    }
    return repeated.join('');
  }
}
