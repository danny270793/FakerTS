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
  public static alphanumeric(length: number = 10): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars[Numbers.between(0, chars.length - 1)];
    }
    return result;
  }
  public static capitalize(text: string): string {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  public static uppercase(text: string): string {
    return text.toUpperCase();
  }
  public static lowercase(text: string): string {
    return text.toLowerCase();
  }
  public static camelCase(text: string): string {
    return text
      .split(/[\s_-]+/)
      .map((word, index) => 
        index === 0 
          ? word.toLowerCase() 
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  }
  public static snakeCase(text: string): string {
    return text
      .replace(/([A-Z])/g, '_$1')
      .replace(/[\s-]+/g, '_')
      .replace(/^_/, '')
      .toLowerCase();
  }
  public static kebabCase(text: string): string {
    return text
      .replace(/([A-Z])/g, '-$1')
      .replace(/[\s_]+/g, '-')
      .replace(/^-/, '')
      .toLowerCase();
  }
  public static randomString(length: number = 10): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars[Numbers.between(0, chars.length - 1)];
    }
    return result;
  }
  public static alphaNumeric(length: number = 10): string {
    return Strings.alphanumeric(length);
  }
  public static sample(options: string[]): string {
    return Arrays.randomItem(options);
  }
  public static fromCharCode(code: number): string {
    return String.fromCodePoint(code);
  }
  public static symbol(): string {
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    return symbols[Numbers.between(0, symbols.length - 1)] as string;
  }
  public static symbols(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Strings.symbol();
    }
    return result;
  }
}
