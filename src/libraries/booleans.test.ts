import Booleans from './booleans';

describe('Booleans', () => {
  describe('boolean', () => {
    it('should return a boolean value', () => {
      const result = Booleans.boolean(0.5);
      expect(typeof result).toBe('boolean');
    });

    it('should always return true when probability is 1', () => {
      for (let i = 0; i < 100; i++) {
        const result = Booleans.boolean(1);
        expect(result).toBe(true);
      }
    });

    it('should always return false when probability is 0', () => {
      for (let i = 0; i < 100; i++) {
        const result = Booleans.boolean(0);
        expect(result).toBe(false);
      }
    });

    it('should return both true and false with 0.5 probability', () => {
      const results = new Set<boolean>();
      for (let i = 0; i < 100; i++) {
        results.add(Booleans.boolean(0.5));
      }
      expect(results.size).toBe(2);
      expect(results.has(true)).toBe(true);
      expect(results.has(false)).toBe(true);
    });

    it('should return mostly true with high probability', () => {
      let trueCount = 0;
      const iterations = 1000;
      const probability = 0.9;

      for (let i = 0; i < iterations; i++) {
        if (Booleans.boolean(probability)) {
          trueCount++;
        }
      }

      // With 0.9 probability, expect at least 80% true values
      expect(trueCount / iterations).toBeGreaterThan(0.8);
    });

    it('should return mostly false with low probability', () => {
      let falseCount = 0;
      const iterations = 1000;
      const probability = 0.1;

      for (let i = 0; i < iterations; i++) {
        if (!Booleans.boolean(probability)) {
          falseCount++;
        }
      }

      // With 0.1 probability, expect at least 80% false values
      expect(falseCount / iterations).toBeGreaterThan(0.8);
    });

    it('should work with decimal probabilities', () => {
      const result = Booleans.boolean(0.75);
      expect(typeof result).toBe('boolean');
    });
  });
});

