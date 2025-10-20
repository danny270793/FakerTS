import Arrays from './arrays';

describe('Arrays', () => {
  describe('randomItem', () => {
    it('should return an item from the array', () => {
      const array = [1, 2, 3, 4, 5];
      const result = Arrays.randomItem(array);
      expect(array).toContain(result);
    });

    it('should work with string arrays', () => {
      const array = ['apple', 'banana', 'cherry'];
      const result = Arrays.randomItem(array);
      expect(array).toContain(result);
      expect(typeof result).toBe('string');
    });

    it('should work with object arrays', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const result = Arrays.randomItem(array);
      expect(array).toContainEqual(result);
    });

    it('should return the only item in single-item array', () => {
      const array = ['only'];
      const result = Arrays.randomItem(array);
      expect(result).toBe('only');
    });

    it('should produce different items across multiple calls', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const results = new Set<number>();
      for (let i = 0; i < 50; i++) {
        results.add(Arrays.randomItem(array));
      }
      expect(results.size).toBeGreaterThan(1);
    });

    it('should work with mixed type arrays', () => {
      const array = [1, 'two', true, null];
      const result = Arrays.randomItem(array);
      expect(array).toContain(result);
    });
  });

  describe('randomItems', () => {
    it('should return the specified quantity of items', () => {
      const array = [1, 2, 3, 4, 5];
      const result = Arrays.randomItems(array, 3);
      expect(result.length).toBe(3);
    });

    it('should return items from the original array', () => {
      const array = ['a', 'b', 'c', 'd', 'e'];
      const result = Arrays.randomItems(array, 3);
      result.forEach((item) => {
        expect(array).toContain(item);
      });
    });

    it('should return all items when quantity equals array length', () => {
      const array = [1, 2, 3];
      const result = Arrays.randomItems(array, 3);
      expect(result.length).toBe(3);
      expect(result.sort()).toEqual([1, 2, 3]);
    });

    it('should return empty array for quantity 0', () => {
      const array = [1, 2, 3];
      const result = Arrays.randomItems(array, 0);
      expect(result).toEqual([]);
    });

    it('should handle quantity greater than array length', () => {
      const array = [1, 2, 3];
      const result = Arrays.randomItems(array, 5);
      expect(result.length).toBe(3);
    });

    it('should work with object arrays', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
      const result = Arrays.randomItems(array, 2);
      expect(result.length).toBe(2);
      result.forEach((item) => {
        expect(array).toContainEqual(item);
      });
    });

    it('should produce different selections across calls', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const results: string[] = [];
      for (let i = 0; i < 10; i++) {
        results.push(Arrays.randomItems(array, 3).join(','));
      }
      const uniqueResults = new Set(results);
      expect(uniqueResults.size).toBeGreaterThan(1);
    });
  });

  describe('random', () => {
    it('should return an array of specified length', () => {
      const result = Arrays.random(5);
      expect(result.length).toBe(5);
    });

    it('should return an array of digits (0-9)', () => {
      const result = Arrays.random(10);
      result.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(9);
        expect(Number.isInteger(num)).toBe(true);
      });
    });

    it('should return empty array for quantity 0', () => {
      const result = Arrays.random(0);
      expect(result).toEqual([]);
    });

    it('should work with larger quantities', () => {
      const result = Arrays.random(100);
      expect(result.length).toBe(100);
      result.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(9);
      });
    });

    it('should produce arrays with varied digits', () => {
      const result = Arrays.random(50);
      const uniqueDigits = new Set(result);
      expect(uniqueDigits.size).toBeGreaterThan(1);
    });

    it('should return different arrays across multiple calls', () => {
      const result1 = Arrays.random(10).join('');
      const result2 = Arrays.random(10).join('');
      // Very unlikely to be identical
      expect(result1).not.toBe(result2);
    });
  });

  describe('shuffle', () => {
    it('should return an array with same length', () => {
      const array = [1, 2, 3, 4, 5];
      const result = Arrays.shuffle([...array]);
      expect(result.length).toBe(array.length);
    });

    it('should contain all original elements', () => {
      const array = [1, 2, 3, 4, 5];
      const result = Arrays.shuffle([...array]);
      expect(result.sort()).toEqual(array.sort());
    });

    it('should work with string arrays', () => {
      const array = ['a', 'b', 'c', 'd'];
      const result = Arrays.shuffle([...array]);
      expect(result.length).toBe(array.length);
      expect(result.sort()).toEqual(array.sort());
    });

    it('should work with single-item array', () => {
      const array = ['only'];
      const result = Arrays.shuffle([...array]);
      expect(result).toEqual(['only']);
    });

    it('should work with empty array', () => {
      const array: number[] = [];
      const result = Arrays.shuffle([...array]);
      expect(result).toEqual([]);
    });

    it('should produce different orders across multiple calls', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const results: string[] = [];
      for (let i = 0; i < 10; i++) {
        results.push(Arrays.shuffle([...array]).join(','));
      }
      const uniqueResults = new Set(results);
      expect(uniqueResults.size).toBeGreaterThan(1);
    });

    it('should work with object arrays', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const result = Arrays.shuffle([...array]);
      expect(result.length).toBe(3);
      expect(result).toContainEqual({ id: 1 });
      expect(result).toContainEqual({ id: 2 });
      expect(result).toContainEqual({ id: 3 });
    });

    it('should maintain array type', () => {
      const array = [true, false, true];
      const result = Arrays.shuffle([...array]);
      result.forEach((item) => {
        expect(typeof item).toBe('boolean');
      });
    });
  });
});

