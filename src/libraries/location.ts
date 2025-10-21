import Arrays from './arrays';
import Numbers from './numbers';

export default class Location {
  private static readonly COUNTRIES = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy',
    'Spain', 'Australia', 'Japan', 'China', 'India', 'Brazil', 'Mexico',
    'Argentina', 'South Africa', 'Egypt', 'Russia', 'South Korea', 'Thailand',
    'Indonesia', 'Netherlands', 'Belgium', 'Switzerland', 'Sweden', 'Norway',
    'Denmark', 'Finland', 'Poland', 'Turkey', 'Greece', 'Portugal', 'Ireland',
    'New Zealand', 'Singapore', 'Malaysia', 'Vietnam', 'Philippines', 'Chile',
    'Colombia', 'Peru', 'Venezuela', 'Austria', 'Czech Republic', 'Hungary'
  ];

  private static readonly COUNTRY_CODES = [
    'US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'AU', 'JP', 'CN', 'IN', 'BR',
    'MX', 'AR', 'ZA', 'EG', 'RU', 'KR', 'TH', 'ID', 'NL', 'BE', 'CH', 'SE',
    'NO', 'DK', 'FI', 'PL', 'TR', 'GR', 'PT', 'IE', 'NZ', 'SG', 'MY', 'VN',
    'PH', 'CL', 'CO', 'PE', 'VE', 'AT', 'CZ', 'HU'
  ];

  private static readonly CITIES = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
    'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville',
    'London', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Vienna', 'Amsterdam',
    'Brussels', 'Copenhagen', 'Stockholm', 'Oslo', 'Helsinki', 'Dublin',
    'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Sydney',
    'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Tokyo', 'Osaka', 'Kyoto',
    'Beijing', 'Shanghai', 'Hong Kong', 'Singapore', 'Mumbai', 'Delhi',
    'Bangalore', 'Chennai', 'São Paulo', 'Rio de Janeiro', 'Mexico City',
    'Buenos Aires', 'Santiago', 'Lima', 'Bogotá', 'Caracas', 'Cape Town',
    'Johannesburg', 'Cairo', 'Moscow', 'Seoul', 'Bangkok', 'Manila', 'Istanbul',
    'Athens', 'Lisbon', 'Prague', 'Budapest', 'Warsaw', 'Zurich', 'Geneva'
  ];

  private static readonly CONTINENTS = [
    'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'
  ];

  private static readonly TIME_ZONES = [
    'America/New_York', 'America/Los_Angeles', 'America/Chicago', 'America/Denver',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome',
    'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Hong_Kong', 'Asia/Singapore', 'Asia/Dubai',
    'Australia/Sydney', 'Australia/Melbourne', 'Pacific/Auckland', 'America/Toronto',
    'America/Vancouver', 'America/Mexico_City', 'America/Sao_Paulo', 'Africa/Cairo',
    'Africa/Johannesburg', 'Asia/Kolkata', 'Asia/Bangkok', 'Europe/Moscow'
  ];

  public static country(): string {
    return Arrays.randomItem(Location.COUNTRIES);
  }

  public static countryCode(): string {
    return Arrays.randomItem(Location.COUNTRY_CODES);
  }

  public static city(): string {
    return Arrays.randomItem(Location.CITIES);
  }

  public static continent(): string {
    return Arrays.randomItem(Location.CONTINENTS);
  }

  public static timeZone(): string {
    return Arrays.randomItem(Location.TIME_ZONES);
  }

  public static latitude(): number {
    return Numbers.float(-90, 90);
  }

  public static longitude(): number {
    return Numbers.float(-180, 180);
  }

  public static coordinates(): { latitude: number; longitude: number } {
    return {
      latitude: Location.latitude(),
      longitude: Location.longitude()
    };
  }

  public static coordinatesString(): string {
    const coords = Location.coordinates();
    return `${coords.latitude.toFixed(6)}, ${coords.longitude.toFixed(6)}`;
  }

  public static direction(): string {
    const directions = ['North', 'South', 'East', 'West', 'Northeast', 'Northwest', 'Southeast', 'Southwest'];
    return Arrays.randomItem(directions);
  }

  public static cardinalDirection(): string {
    const cardinals = ['North', 'South', 'East', 'West'];
    return Arrays.randomItem(cardinals);
  }

  public static ordinalDirection(): string {
    const ordinals = ['Northeast', 'Northwest', 'Southeast', 'Southwest'];
    return Arrays.randomItem(ordinals);
  }
}

