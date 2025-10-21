import Address from './address';

describe('Address', () => {
  describe('streetName', () => {
    it('should return a street name with suffix', () => {
      const result = Address.streetName();
      expect(result).toMatch(/^[A-Za-z]+ (Street|Avenue|Boulevard|Road|Lane|Drive|Court|Circle|Way|Place|Parkway|Terrace|Trail|Square)$/);
    });

    it('should return different street names', () => {
      const results = new Set<string>();
      for (let i = 0; i < 10; i++) {
        results.add(Address.streetName());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('streetAddress', () => {
    it('should return a full street address with number', () => {
      const result = Address.streetAddress();
      expect(result).toMatch(/^\d+ [A-Za-z]+ (Street|Avenue|Boulevard|Road|Lane|Drive|Court|Circle|Way|Place|Parkway|Terrace|Trail|Square)$/);
    });

    it('should have a valid building number', () => {
      const result = Address.streetAddress();
      const number = parseInt(result.split(' ')[0] as string);
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9999);
    });
  });

  describe('buildingNumber', () => {
    it('should return a building number as string', () => {
      const result = Address.buildingNumber();
      expect(result).toMatch(/^\d+$/);
      const num = parseInt(result);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(9999);
    });
  });

  describe('secondaryAddress', () => {
    it('should return a secondary address', () => {
      const result = Address.secondaryAddress();
      expect(result).toMatch(/^(Apartment|Suite|Unit|Floor|Building|Room) \d+$/);
    });

    it('should have a valid number', () => {
      const result = Address.secondaryAddress();
      const matches = result.match(/\d+$/);
      expect(matches).not.toBeNull();
      if (matches) {
        const num = parseInt(matches[0]);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(999);
      }
    });
  });

  describe('fullStreetAddress', () => {
    it('should return a full street address with secondary', () => {
      const result = Address.fullStreetAddress();
      expect(result).toContain(',');
      const parts = result.split(', ');
      expect(parts.length).toBe(2);
    });
  });

  describe('zipCode', () => {
    it('should return a 5-digit zip code', () => {
      const result = Address.zipCode();
      expect(result).toMatch(/^\d{5}$/);
    });
  });

  describe('zipCodePlus4', () => {
    it('should return a zip+4 code', () => {
      const result = Address.zipCodePlus4();
      expect(result).toMatch(/^\d{5}-\d{4}$/);
    });
  });

  describe('postalCode', () => {
    it('should return a postal code', () => {
      const result = Address.postalCode();
      expect(result).toMatch(/^\d{5}$/);
    });
  });

  describe('state', () => {
    it('should return a state name', () => {
      const result = Address.state();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return different states', () => {
      const results = new Set<string>();
      for (let i = 0; i < 20; i++) {
        results.add(Address.state());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('stateAbbr', () => {
    it('should return a two-letter state abbreviation', () => {
      const result = Address.stateAbbr();
      expect(result).toMatch(/^[A-Z]{2}$/);
    });

    it('should return valid state abbreviations', () => {
      const validAbbrs = ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'];
      const results = new Set<string>();
      for (let i = 0; i < 30; i++) {
        results.add(Address.stateAbbr());
      }
      // Should have multiple different abbreviations
      expect(results.size).toBeGreaterThan(5);
    });
  });

  describe('cityStateZip', () => {
    it('should return a city, state, zip combination', () => {
      const result = Address.cityStateZip();
      expect(result).toMatch(/^.+, [A-Z]{2} \d{5}$/);
    });

    it('should have correct format', () => {
      const result = Address.cityStateZip();
      const parts = result.split(', ');
      expect(parts.length).toBe(2);
      const stateZip = parts[1] as string;
      expect(stateZip).toMatch(/^[A-Z]{2} \d{5}$/);
    });
  });

  describe('fullAddress', () => {
    it('should return a complete address', () => {
      const result = Address.fullAddress();
      expect(result).toContain(',');
      const parts = result.split(', ');
      expect(parts.length).toBeGreaterThanOrEqual(2);
    });

    it('should end with state and zip', () => {
      const result = Address.fullAddress();
      expect(result).toMatch(/[A-Z]{2} \d{5}$/);
    });
  });

  describe('fullAddressWithSecondary', () => {
    it('should return a complete address with secondary', () => {
      const result = Address.fullAddressWithSecondary();
      expect(result).toContain(',');
      const parts = result.split(', ');
      expect(parts.length).toBeGreaterThanOrEqual(3);
    });

    it('should contain secondary address type', () => {
      const result = Address.fullAddressWithSecondary();
      const hasSecondaryType = 
        result.includes('Apartment') ||
        result.includes('Suite') ||
        result.includes('Unit') ||
        result.includes('Floor') ||
        result.includes('Building') ||
        result.includes('Room');
      expect(hasSecondaryType).toBe(true);
    });
  });

  describe('country', () => {
    it('should return a country name', () => {
      const result = Address.country();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('countryCode', () => {
    it('should return a country code', () => {
      const result = Address.countryCode();
      expect(result).toMatch(/^[A-Z]{2}$/);
    });
  });

  describe('postcode', () => {
    it('should return an international postcode', () => {
      const result = Address.postcode();
      expect(result).toMatch(/^[A-Z0-9]{4,8}$/);
      expect(result.length).toBeGreaterThanOrEqual(4);
      expect(result.length).toBeLessThanOrEqual(8);
    });
  });

  describe('nearbyGPSCoordinate', () => {
    it('should return coordinates near base location', () => {
      const base = { lat: 40.7128, lon: -74.0060 }; // New York
      const result = Address.nearbyGPSCoordinate(base.lat, base.lon, 10);
      
      expect(result).toHaveProperty('latitude');
      expect(result).toHaveProperty('longitude');
      
      // Should be within roughly 10km (simplified check)
      expect(Math.abs(result.latitude - base.lat)).toBeLessThan(1);
      expect(Math.abs(result.longitude - base.lon)).toBeLessThan(1);
    });

    it('should generate random coordinates when no base provided', () => {
      const result = Address.nearbyGPSCoordinate();
      expect(result.latitude).toBeGreaterThanOrEqual(-90);
      expect(result.latitude).toBeLessThanOrEqual(90);
      expect(result.longitude).toBeGreaterThanOrEqual(-180);
      expect(result.longitude).toBeLessThanOrEqual(180);
    });

    it('should respect radius parameter', () => {
      const base = { lat: 0, lon: 0 };
      const radius = 5;
      const result = Address.nearbyGPSCoordinate(base.lat, base.lon, radius);
      
      const radiusInDegrees = radius / 111;
      expect(Math.abs(result.latitude)).toBeLessThanOrEqual(radiusInDegrees + 0.01);
      expect(Math.abs(result.longitude)).toBeLessThanOrEqual(radiusInDegrees + 0.01);
    });
  });

  describe('cardinalDirection', () => {
    it('should return a cardinal direction', () => {
      const cardinals = ['North', 'South', 'East', 'West'];
      const result = Address.cardinalDirection();
      expect(cardinals).toContain(result);
    });
  });

  describe('ordinalDirection', () => {
    it('should return an ordinal direction', () => {
      const ordinals = ['Northeast', 'Northwest', 'Southeast', 'Southwest'];
      const result = Address.ordinalDirection();
      expect(ordinals).toContain(result);
    });
  });

  describe('direction', () => {
    it('should return a direction', () => {
      const directions = [
        'North', 'South', 'East', 'West', 'Northeast', 'Northwest', 'Southeast', 'Southwest'
      ];
      const result = Address.direction();
      expect(directions).toContain(result);
    });
  });
});

