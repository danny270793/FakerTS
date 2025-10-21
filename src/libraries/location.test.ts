import Location from './location';

describe('Location', () => {
  describe('country', () => {
    it('should return a country name', () => {
      const result = Location.country();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return a valid country', () => {
      const validCountries = [
        'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy',
        'Spain', 'Australia', 'Japan', 'China', 'India', 'Brazil', 'Mexico'
      ];
      const result = Location.country();
      expect(typeof result).toBe('string');
    });
  });

  describe('countryCode', () => {
    it('should return a two-letter country code', () => {
      const result = Location.countryCode();
      expect(result).toMatch(/^[A-Z]{2}$/);
    });

    it('should return a valid country code', () => {
      const validCodes = ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'AU', 'JP', 'CN'];
      const results = new Set<string>();
      for (let i = 0; i < 20; i++) {
        results.add(Location.countryCode());
      }
      // At least some should be valid
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('city', () => {
    it('should return a city name', () => {
      const result = Location.city();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return different cities', () => {
      const results = new Set<string>();
      for (let i = 0; i < 20; i++) {
        results.add(Location.city());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('continent', () => {
    it('should return a valid continent', () => {
      const validContinents = [
        'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'
      ];
      const result = Location.continent();
      expect(validContinents).toContain(result);
    });
  });

  describe('timeZone', () => {
    it('should return a valid timezone', () => {
      const result = Location.timeZone();
      expect(result).toMatch(/^[A-Za-z_]+\/[A-Za-z_]+$/);
    });

    it('should return different timezones', () => {
      const results = new Set<string>();
      for (let i = 0; i < 10; i++) {
        results.add(Location.timeZone());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('latitude', () => {
    it('should return a valid latitude', () => {
      const result = Location.latitude();
      expect(result).toBeGreaterThanOrEqual(-90);
      expect(result).toBeLessThanOrEqual(90);
    });

    it('should return different latitudes', () => {
      const results = new Set<number>();
      for (let i = 0; i < 10; i++) {
        results.add(Location.latitude());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('longitude', () => {
    it('should return a valid longitude', () => {
      const result = Location.longitude();
      expect(result).toBeGreaterThanOrEqual(-180);
      expect(result).toBeLessThanOrEqual(180);
    });

    it('should return different longitudes', () => {
      const results = new Set<number>();
      for (let i = 0; i < 10; i++) {
        results.add(Location.longitude());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('coordinates', () => {
    it('should return an object with latitude and longitude', () => {
      const result = Location.coordinates();
      expect(result).toHaveProperty('latitude');
      expect(result).toHaveProperty('longitude');
      expect(result.latitude).toBeGreaterThanOrEqual(-90);
      expect(result.latitude).toBeLessThanOrEqual(90);
      expect(result.longitude).toBeGreaterThanOrEqual(-180);
      expect(result.longitude).toBeLessThanOrEqual(180);
    });
  });

  describe('coordinatesString', () => {
    it('should return a formatted coordinates string', () => {
      const result = Location.coordinatesString();
      expect(result).toMatch(/^-?\d+\.\d{6}, -?\d+\.\d{6}$/);
    });

    it('should have valid coordinate values', () => {
      const result = Location.coordinatesString();
      const [lat, lon] = result.split(', ').map(Number);
      expect(lat).toBeGreaterThanOrEqual(-90);
      expect(lat).toBeLessThanOrEqual(90);
      expect(lon).toBeGreaterThanOrEqual(-180);
      expect(lon).toBeLessThanOrEqual(180);
    });
  });

  describe('direction', () => {
    it('should return a valid direction', () => {
      const validDirections = [
        'North', 'South', 'East', 'West', 'Northeast', 'Northwest', 'Southeast', 'Southwest'
      ];
      const result = Location.direction();
      expect(validDirections).toContain(result);
    });
  });

  describe('cardinalDirection', () => {
    it('should return a cardinal direction', () => {
      const cardinals = ['North', 'South', 'East', 'West'];
      const result = Location.cardinalDirection();
      expect(cardinals).toContain(result);
    });
  });

  describe('ordinalDirection', () => {
    it('should return an ordinal direction', () => {
      const ordinals = ['Northeast', 'Northwest', 'Southeast', 'Southwest'];
      const result = Location.ordinalDirection();
      expect(ordinals).toContain(result);
    });
  });
});

