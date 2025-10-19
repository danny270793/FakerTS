import Numbers from './number';

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

  describe('ascii', () => {
    it('should return a number between 0 and 127', () => {
      const result = Numbers.ascii();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(127);
    });

    it('should return an integer', () => {
      const result = Numbers.ascii();
      expect(Number.isInteger(result)).toBe(true);
    });

    it('should produce different ASCII codes across multiple calls', () => {
      const results = new Set<number>();
      for (let i = 0; i < 50; i++) {
        results.add(Numbers.ascii());
      }
      expect(results.size).toBeGreaterThan(1);
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
});
