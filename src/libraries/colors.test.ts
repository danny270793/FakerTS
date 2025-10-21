import Colors from './colors';

describe('Colors', () => {
  describe('hex', () => {
    it('should return a valid hex color', () => {
      const result = Colors.hex();
      expect(result).toMatch(/^#[0-9A-F]{6}$/);
    });
  });

  describe('rgb', () => {
    it('should return a valid rgb color', () => {
      const result = Colors.rgb();
      expect(result).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
    });

    it('should have values between 0 and 255', () => {
      const result = Colors.rgb();
      const matches = result.match(/\d+/g);
      expect(matches).toHaveLength(3);
      matches?.forEach(value => {
        const num = parseInt(value);
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(255);
      });
    });
  });

  describe('rgba', () => {
    it('should return a valid rgba color', () => {
      const result = Colors.rgba();
      expect(result).toMatch(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d+\.?\d*\)$/);
    });

    it('should have rgb values between 0 and 255 and alpha between 0 and 1', () => {
      const result = Colors.rgba();
      const matches = result.match(/rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/);
      expect(matches).not.toBeNull();
      if (matches) {
        const [, r, g, b, a] = matches;
        expect(parseInt(r as string)).toBeGreaterThanOrEqual(0);
        expect(parseInt(r as string)).toBeLessThanOrEqual(255);
        expect(parseInt(g as string)).toBeGreaterThanOrEqual(0);
        expect(parseInt(g as string)).toBeLessThanOrEqual(255);
        expect(parseInt(b as string)).toBeGreaterThanOrEqual(0);
        expect(parseInt(b as string)).toBeLessThanOrEqual(255);
        expect(parseFloat(a as string)).toBeGreaterThanOrEqual(0);
        expect(parseFloat(a as string)).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('hsl', () => {
    it('should return a valid hsl color', () => {
      const result = Colors.hsl();
      expect(result).toMatch(/^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/);
    });

    it('should have h between 0-360 and s,l between 0-100', () => {
      const result = Colors.hsl();
      const matches = result.match(/hsl\((\d+), (\d+)%, (\d+)%\)/);
      expect(matches).not.toBeNull();
      if (matches) {
        const [, h, s, l] = matches;
        expect(parseInt(h as string)).toBeGreaterThanOrEqual(0);
        expect(parseInt(h as string)).toBeLessThanOrEqual(360);
        expect(parseInt(s as string)).toBeGreaterThanOrEqual(0);
        expect(parseInt(s as string)).toBeLessThanOrEqual(100);
        expect(parseInt(l as string)).toBeGreaterThanOrEqual(0);
        expect(parseInt(l as string)).toBeLessThanOrEqual(100);
      }
    });
  });

  describe('hsla', () => {
    it('should return a valid hsla color', () => {
      const result = Colors.hsla();
      expect(result).toMatch(/^hsla\(\d{1,3}, \d{1,3}%, \d{1,3}%, \d+\.?\d*\)$/);
    });
  });

  describe('colorName', () => {
    it('should return a valid color name', () => {
      const validColors = [
        'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink',
        'brown', 'gray', 'black', 'white', 'cyan', 'magenta', 'lime',
        'indigo', 'violet', 'turquoise', 'gold', 'silver', 'navy'
      ];
      const result = Colors.colorName();
      expect(validColors).toContain(result);
    });
  });
});

