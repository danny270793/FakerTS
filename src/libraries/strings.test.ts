import Strings from './strings';

describe('Strings', () => {
  describe('character', () => {
    it('should return a single lowercase letter', () => {
      const result = Strings.character();
      expect(result).toMatch(/^[a-z]$/);
      expect(result.length).toBe(1);
    });

    it('should return different characters across multiple calls', () => {
      const results = new Set<string>();
      for (let i = 0; i < 50; i++) {
        results.add(Strings.character());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('characters', () => {
    it('should return a string of specified length', () => {
      const length = 10;
      const result = Strings.characters(length);
      expect(result.length).toBe(length);
    });

    it('should return only lowercase letters', () => {
      const result = Strings.characters(20);
      expect(result).toMatch(/^[a-z]+$/);
    });

    it('should return an empty string for length 0', () => {
      const result = Strings.characters(0);
      expect(result).toBe('');
    });

    it('should work with larger lengths', () => {
      const result = Strings.characters(100);
      expect(result.length).toBe(100);
      expect(result).toMatch(/^[a-z]+$/);
    });
  });

  describe('whildcard', () => {
    it('should apply callback to each character', () => {
      const text = 'abc';
      const result = Strings.whildcard(text, (char) => char.toUpperCase());
      expect(result).toBe('ABC');
    });

    it('should pass character and position to callback', () => {
      const text = 'xyz';
      const positions: number[] = [];
      const chars: string[] = [];

      Strings.whildcard(text, (char, pos) => {
        chars.push(char);
        positions.push(pos);
        return char;
      });

      expect(chars).toEqual(['x', 'y', 'z']);
      expect(positions).toEqual([0, 1, 2]);
    });

    it('should handle numeric return values', () => {
      const text = 'ab';
      const result = Strings.whildcard(text, () => 1);
      expect(result).toBe('11');
    });

    it('should handle empty strings', () => {
      const result = Strings.whildcard('', (char) => char);
      expect(result).toBe('');
    });
  });

  describe('hex', () => {
    it('should return a hexadecimal character', () => {
      const result = Strings.hex();
      expect(result).toMatch(/^[0-9a-fA-F]+$/);
    });

    it('should return a character', () => {
      const result = Strings.hex();
      expect(typeof result).toBe('string');
    });

    it('should produce different values across multiple calls', () => {
      const results = new Set<string>();
      for (let i = 0; i < 20; i++) {
        results.add(Strings.hex());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('hexify', () => {
    it('should replace H with hexadecimal characters', () => {
      const result = Strings.hexify('HHH');
      expect(result).toMatch(/^[0-9a-fA-F]{3}$/);
    });

    it('should preserve non-H characters', () => {
      const result = Strings.hexify('H-H-H');
      expect(result).toMatch(/^[0-9a-fA-F]-[0-9a-fA-F]-[0-9a-fA-F]$/);
    });

    it('should handle strings without H', () => {
      const result = Strings.hexify('abc123');
      expect(result).toBe('abc123');
    });

    it('should handle empty strings', () => {
      const result = Strings.hexify('');
      expect(result).toBe('');
    });
  });

  describe('ascii', () => {
    it('should return a printable ASCII character', () => {
      const result = Strings.ascii();
      expect(result.length).toBe(1);
      const code = result.charCodeAt(0);
      expect(code).toBeGreaterThanOrEqual(32);
      expect(code).toBeLessThanOrEqual(126);
    });

    it('should produce different ASCII characters', () => {
      const results = new Set<string>();
      for (let i = 0; i < 50; i++) {
        results.add(Strings.ascii());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('asciiify', () => {
    it('should replace * with ASCII characters', () => {
      const result = Strings.asciiify('***');
      expect(result.length).toBe(3);
      for (let char of result) {
        const code = char.charCodeAt(0);
        expect(code).toBeGreaterThanOrEqual(32);
        expect(code).toBeLessThanOrEqual(126);
      }
    });

    it('should preserve non-* characters', () => {
      const result = Strings.asciiify('a*b*c');
      expect(result.length).toBe(5);
      expect(result[0]).toBe('a');
      expect(result[2]).toBe('b');
      expect(result[4]).toBe('c');
    });

    it('should handle strings without *', () => {
      const result = Strings.asciiify('hello');
      expect(result).toBe('hello');
    });
  });

  describe('numerify', () => {
    it('should replace # with digits', () => {
      const result = Strings.numerify('###');
      expect(result).toMatch(/^\d{3}$/);
    });

    it('should preserve non-# characters', () => {
      const result = Strings.numerify('Phone: ###-####');
      expect(result).toMatch(/^Phone: \d{3}-\d{4}$/);
    });

    it('should handle strings without #', () => {
      const result = Strings.numerify('hello');
      expect(result).toBe('hello');
    });

    it('should work with mixed patterns', () => {
      const result = Strings.numerify('ID: #-#-#');
      expect(result).toMatch(/^ID: \d-\d-\d$/);
    });
  });

  describe('lexify', () => {
    it('should replace ? with lowercase letters', () => {
      const result = Strings.lexify('???');
      expect(result).toMatch(/^[a-z]{3}$/);
    });

    it('should preserve non-? characters', () => {
      const result = Strings.lexify('Name: ?-?-?');
      expect(result).toMatch(/^Name: [a-z]-[a-z]-[a-z]$/);
    });

    it('should handle strings without ?', () => {
      const result = Strings.lexify('hello');
      expect(result).toBe('hello');
    });

    it('should work with mixed patterns', () => {
      const result = Strings.lexify('Code: ????');
      expect(result).toMatch(/^Code: [a-z]{4}$/);
    });
  });

  describe('allify', () => {
    it('should apply all transformations', () => {
      const result = Strings.allify('?#*H');
      expect(result.length).toBe(4);
      // First char should be letter (?)
      expect(result[0]).toMatch(/[a-z]/);
      // Second char should be digit (#)
      expect(result[1]).toMatch(/\d/);
      // Third and fourth are ASCII and hex (harder to test precisely)
    });

    it('should preserve unchanged characters', () => {
      const result = Strings.allify('A-B');
      expect(result).toBe('A-B');
    });

    it('should handle complex patterns', () => {
      const result = Strings.allify('?#-?#');
      expect(result).toMatch(/^[a-z]\d-[a-z]\d$/);
    });
  });

  describe('uuid', () => {
    it('should return a UUID format string', () => {
      const result = Strings.uuid();
      expect(result).toMatch(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
      );
    });

    it('should have correct length', () => {
      const result = Strings.uuid();
      expect(result.length).toBe(36); // 32 hex chars + 4 dashes
    });

    it('should generate different UUIDs', () => {
      const results = new Set<string>();
      for (let i = 0; i < 10; i++) {
        results.add(Strings.uuid());
      }
      expect(results.size).toBe(10);
    });

    it('should have dashes in correct positions', () => {
      const result = Strings.uuid();
      expect(result[8]).toBe('-');
      expect(result[13]).toBe('-');
      expect(result[18]).toBe('-');
      expect(result[23]).toBe('-');
    });
  });

  describe('repeat', () => {
    it('should repeat text specified number of times', () => {
      const result = Strings.repeat('ab', 3);
      expect(result).toBe('ababab');
    });

    it('should return empty string for quantity 0', () => {
      const result = Strings.repeat('hello', 0);
      expect(result).toBe('');
    });

    it('should work with single character', () => {
      const result = Strings.repeat('x', 5);
      expect(result).toBe('xxxxx');
    });

    it('should work with longer strings', () => {
      const result = Strings.repeat('hello', 2);
      expect(result).toBe('hellohello');
    });

    it('should handle quantity 1', () => {
      const result = Strings.repeat('test', 1);
      expect(result).toBe('test');
    });

    it('should work with special characters', () => {
      const result = Strings.repeat('!@#', 2);
      expect(result).toBe('!@#!@#');
    });
  });

  describe('alphanumeric', () => {
    it('should return an alphanumeric string of default length', () => {
      const result = Strings.alphanumeric();
      expect(result).toMatch(/^[a-zA-Z0-9]{10}$/);
    });

    it('should return an alphanumeric string of specified length', () => {
      const length = 20;
      const result = Strings.alphanumeric(length);
      expect(result).toMatch(/^[a-zA-Z0-9]{20}$/);
      expect(result.length).toBe(length);
    });

    it('should contain both letters and numbers', () => {
      // Run multiple times to increase chance of both appearing
      let hasLetter = false;
      let hasNumber = false;
      for (let i = 0; i < 10; i++) {
        const result = Strings.alphanumeric(20);
        if (/[a-zA-Z]/.test(result)) hasLetter = true;
        if (/[0-9]/.test(result)) hasNumber = true;
      }
      expect(hasLetter).toBe(true);
      expect(hasNumber).toBe(true);
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter and lowercase the rest', () => {
      const result = Strings.capitalize('hello');
      expect(result).toBe('Hello');
    });

    it('should work with all uppercase input', () => {
      const result = Strings.capitalize('HELLO');
      expect(result).toBe('Hello');
    });

    it('should work with mixed case input', () => {
      const result = Strings.capitalize('hELLo');
      expect(result).toBe('Hello');
    });

    it('should return empty string for empty input', () => {
      const result = Strings.capitalize('');
      expect(result).toBe('');
    });
  });

  describe('uppercase', () => {
    it('should convert to uppercase', () => {
      const result = Strings.uppercase('hello');
      expect(result).toBe('HELLO');
    });

    it('should handle already uppercase text', () => {
      const result = Strings.uppercase('HELLO');
      expect(result).toBe('HELLO');
    });
  });

  describe('lowercase', () => {
    it('should convert to lowercase', () => {
      const result = Strings.lowercase('HELLO');
      expect(result).toBe('hello');
    });

    it('should handle already lowercase text', () => {
      const result = Strings.lowercase('hello');
      expect(result).toBe('hello');
    });
  });

  describe('camelCase', () => {
    it('should convert space-separated words to camelCase', () => {
      const result = Strings.camelCase('hello world');
      expect(result).toBe('helloWorld');
    });

    it('should convert snake_case to camelCase', () => {
      const result = Strings.camelCase('hello_world_test');
      expect(result).toBe('helloWorldTest');
    });

    it('should convert kebab-case to camelCase', () => {
      const result = Strings.camelCase('hello-world-test');
      expect(result).toBe('helloWorldTest');
    });

    it('should handle single word', () => {
      const result = Strings.camelCase('hello');
      expect(result).toBe('hello');
    });
  });

  describe('snakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      const result = Strings.snakeCase('helloWorld');
      expect(result).toBe('hello_world');
    });

    it('should convert space-separated words to snake_case', () => {
      const result = Strings.snakeCase('hello world test');
      expect(result).toBe('hello_world_test');
    });

    it('should convert kebab-case to snake_case', () => {
      const result = Strings.snakeCase('hello-world-test');
      expect(result).toBe('hello_world_test');
    });

    it('should handle single word', () => {
      const result = Strings.snakeCase('hello');
      expect(result).toBe('hello');
    });
  });

  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      const result = Strings.kebabCase('helloWorld');
      expect(result).toBe('hello-world');
    });

    it('should convert space-separated words to kebab-case', () => {
      const result = Strings.kebabCase('hello world test');
      expect(result).toBe('hello-world-test');
    });

    it('should convert snake_case to kebab-case', () => {
      const result = Strings.kebabCase('hello_world_test');
      expect(result).toBe('hello-world-test');
    });

    it('should handle single word', () => {
      const result = Strings.kebabCase('hello');
      expect(result).toBe('hello');
    });
  });

  describe('randomString', () => {
    it('should return a random string of default length', () => {
      const result = Strings.randomString();
      expect(result).toMatch(/^[a-z]{10}$/);
    });

    it('should return a random string of specified length', () => {
      const length = 15;
      const result = Strings.randomString(length);
      expect(result).toMatch(/^[a-z]{15}$/);
      expect(result.length).toBe(length);
    });
  });

  describe('alphaNumeric', () => {
    it('should be an alias for alphanumeric', () => {
      const result = Strings.alphaNumeric(10);
      expect(result).toMatch(/^[a-zA-Z0-9]{10}$/);
    });
  });

  describe('sample', () => {
    it('should return one of the provided options', () => {
      const options = ['apple', 'banana', 'cherry'];
      const result = Strings.sample(options);
      expect(options).toContain(result);
    });

    it('should work with single option', () => {
      const options = ['only'];
      const result = Strings.sample(options);
      expect(result).toBe('only');
    });
  });

  describe('fromCharCode', () => {
    it('should convert char code to character', () => {
      const result = Strings.fromCharCode(65);
      expect(result).toBe('A');
    });

    it('should work with different codes', () => {
      const result = Strings.fromCharCode(97);
      expect(result).toBe('a');
    });
  });

  describe('symbol', () => {
    it('should return a symbol character', () => {
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const result = Strings.symbol();
      expect(symbols).toContain(result);
    });
  });

  describe('symbols', () => {
    it('should return a string of symbols', () => {
      const result = Strings.symbols(5);
      expect(result.length).toBe(5);
      const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      for (const char of result) {
        expect(symbolChars).toContain(char);
      }
    });

    it('should work with different lengths', () => {
      const result = Strings.symbols(10);
      expect(result.length).toBe(10);
    });
  });
});
