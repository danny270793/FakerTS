import Numbers from './numbers';

describe('Numbers', () => {
  describe('between', () => {
    it('should return a number between min and max', () => {
      const min = 1;
      const max = 10;
      const result = Numbers.between(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should return the same number when min equals max', () => {
      const value = 5;
      const result = Numbers.between(value, value);
      expect(result).toBe(value);
    });

    it('should work with negative numbers', () => {
      const min = -10;
      const max = -1;
      const result = Numbers.between(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should work with negative to positive range', () => {
      const min = -5;
      const max = 5;
      const result = Numbers.between(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should produce values across the entire range with multiple calls', () => {
      const min = 1;
      const max = 3;
      const results = new Set<number>();

      // Run enough times to likely hit all values
      for (let i = 0; i < 100; i++) {
        results.add(Numbers.between(min, max));
      }

      // With a small range, we should hit all values
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('digit', () => {
    it('should return a single digit between 0 and 9', () => {
      const result = Numbers.digit();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(9);
    });

    it('should return an integer', () => {
      const result = Numbers.digit();
      expect(Number.isInteger(result)).toBe(true);
    });

    it('should produce different digits across multiple calls', () => {
      const results = new Set<number>();
      for (let i = 0; i < 50; i++) {
        results.add(Numbers.digit());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('digits', () => {
    it('should return a number with at most the specified length', () => {
      const length = 3;
      const result = Numbers.digits(length);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(10 ** length);
    });

    it('should return 0 for length 0', () => {
      const result = Numbers.digits(0);
      expect(result).toBe(0);
    });

    it('should work with larger lengths', () => {
      const length = 5;
      const result = Numbers.digits(length);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(10 ** length);
    });

    it('should return an integer', () => {
      const result = Numbers.digits(4);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('decimal', () => {
    it('should return a decimal number within range', () => {
      const min = 1;
      const max = 10;
      const decimalPlaces = 2;
      const result = Numbers.decimal(min, max, decimalPlaces);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max + 1); // Could be up to max.999...
    });

    it('should have the correct decimal format', () => {
      const min = 5;
      const max = 10;
      const decimalPlaces = 3;
      const result = Numbers.decimal(min, max, decimalPlaces);
      const resultStr = result.toString();
      expect(resultStr).toContain('.');
    });

    it('should work with zero decimal places', () => {
      const min = 1;
      const max = 5;
      const decimalPlaces = 0;
      const result = Numbers.decimal(min, max, decimalPlaces);
      expect(result).toBeGreaterThanOrEqual(min);
    });

    it('should work with negative ranges', () => {
      const min = -10;
      const max = -1;
      const decimalPlaces = 2;
      const result = Numbers.decimal(min, max, decimalPlaces);
      expect(result).toBeLessThanOrEqual(-1);
    });

    it('should produce different decimal values across multiple calls', () => {
      const results = new Set<number>();
      for (let i = 0; i < 20; i++) {
        results.add(Numbers.decimal(1, 10, 2));
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('even', () => {
    it('should return an even number', () => {
      const result = Numbers.even();
      expect(result % 2).toBe(0);
    });

    it('should return an even number within range', () => {
      const min = 10;
      const max = 20;
      const result = Numbers.even(min, max);
      expect(result).toBeGreaterThanOrEqual(10);
      expect(result).toBeLessThanOrEqual(20);
      expect(result % 2).toBe(0);
    });

    it('should work with odd min and max', () => {
      const result = Numbers.even(1, 9);
      expect(result % 2).toBe(0);
      expect(result).toBeGreaterThanOrEqual(2);
      expect(result).toBeLessThanOrEqual(8);
    });
  });

  describe('odd', () => {
    it('should return an odd number', () => {
      const result = Numbers.odd();
      expect(result % 2).toBe(1);
    });

    it('should return an odd number within range', () => {
      const min = 10;
      const max = 20;
      const result = Numbers.odd(min, max);
      expect(result).toBeGreaterThanOrEqual(11);
      expect(result).toBeLessThanOrEqual(19);
      expect(result % 2).toBe(1);
    });

    it('should work with even min and max', () => {
      const result = Numbers.odd(2, 10);
      expect(result % 2).toBe(1);
      expect(result).toBeGreaterThanOrEqual(3);
      expect(result).toBeLessThanOrEqual(9);
    });
  });

  describe('positive', () => {
    it('should return a positive number', () => {
      const result = Numbers.positive();
      expect(result).toBeGreaterThan(0);
    });

    it('should return a positive number within max', () => {
      const max = 50;
      const result = Numbers.positive(max);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe('negative', () => {
    it('should return a negative number', () => {
      const result = Numbers.negative();
      expect(result).toBeLessThan(0);
    });

    it('should return a negative number within min', () => {
      const min = -50;
      const result = Numbers.negative(min);
      expect(result).toBeLessThan(0);
      expect(result).toBeGreaterThanOrEqual(min);
    });
  });

  describe('float', () => {
    it('should return a float between 0 and 1 by default', () => {
      const result = Numbers.float();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
    });

    it('should return a float within range', () => {
      const min = 5.5;
      const max = 10.5;
      const result = Numbers.float(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe('percentage', () => {
    it('should return a number between 0 and 100', () => {
      const result = Numbers.percentage();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    });
  });

  describe('binary', () => {
    it('should return 0 or 1', () => {
      const result = Numbers.binary();
      expect(['0', '1']).toContain(result);
    });
  });

  describe('octal', () => {
    it('should return a digit between 0 and 7', () => {
      const result = Numbers.octal();
      const num = parseInt(result);
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(7);
    });
  });

  describe('prime', () => {
    it('should return a prime number', () => {
      const result = Numbers.prime();
      expect(result).toBeGreaterThan(1);
      
      // Check if it's prime
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(result); i++) {
        if (result % i === 0) {
          isPrime = false;
          break;
        }
      }
      expect(isPrime).toBe(true);
    });

    it('should return a number less than 200', () => {
      const result = Numbers.prime();
      expect(result).toBeLessThanOrEqual(199);
    });
  });
});
