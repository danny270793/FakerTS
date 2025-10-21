import Base from './base';

describe('Base', () => {
  describe('numberBetween', () => {
    it('should return a number between min and max', () => {
      const min = 1;
      const max = 10;
      const result = Base.numberBetween(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});
