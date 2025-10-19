import Number from './number';

describe('Number', () => {
  describe('between', () => {
    it('should return a number between min and max', () => {
      const min = 1;
      const max = 10;
      const result = Number.between(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should return the same number when min equals max', () => {
      const value = 5;
      const result = Number.between(value, value);
      expect(result).toBe(value);
    });

    it('should work with negative numbers', () => {
      const min = -10;
      const max = -1;
      const result = Number.between(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should work with negative to positive range', () => {
      const min = -5;
      const max = 5;
      const result = Number.between(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should produce values across the entire range with multiple calls', () => {
      const min = 1;
      const max = 3;
      const results = new Set<number>();
      
      // Run enough times to likely hit all values
      for (let i = 0; i < 100; i++) {
        results.add(Number.between(min, max));
      }
      
      // With a small range, we should hit all values
      expect(results.size).toBeGreaterThan(1);
    });
  });
});
