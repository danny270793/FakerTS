import Arrays from './arrays';
import Numbers from './numbers';
import Location from './location';
import Strings from './strings';

export default class Address {
  private static readonly STREET_NAMES = [
    'Main', 'Oak', 'Maple', 'Park', 'Washington', 'Lincoln', 'Jefferson',
    'Madison', 'Jackson', 'Franklin', 'Cedar', 'Elm', 'Pine', 'Walnut',
    'Cherry', 'Sunset', 'River', 'Lake', 'Hill', 'Spring', 'Broadway',
    'Church', 'Market', 'Center', 'High', 'First', 'Second', 'Third'
  ];

  private static readonly STREET_SUFFIXES = [
    'Street', 'Avenue', 'Boulevard', 'Road', 'Lane', 'Drive', 'Court',
    'Circle', 'Way', 'Place', 'Parkway', 'Terrace', 'Trail', 'Square'
  ];

  private static readonly BUILDING_TYPES = [
    'Apartment', 'Suite', 'Unit', 'Floor', 'Building', 'Room'
  ];

  private static readonly STATES_US = [
    { name: 'Alabama', abbr: 'AL' },
    { name: 'Alaska', abbr: 'AK' },
    { name: 'Arizona', abbr: 'AZ' },
    { name: 'Arkansas', abbr: 'AR' },
    { name: 'California', abbr: 'CA' },
    { name: 'Colorado', abbr: 'CO' },
    { name: 'Connecticut', abbr: 'CT' },
    { name: 'Delaware', abbr: 'DE' },
    { name: 'Florida', abbr: 'FL' },
    { name: 'Georgia', abbr: 'GA' },
    { name: 'Hawaii', abbr: 'HI' },
    { name: 'Idaho', abbr: 'ID' },
    { name: 'Illinois', abbr: 'IL' },
    { name: 'Indiana', abbr: 'IN' },
    { name: 'Iowa', abbr: 'IA' },
    { name: 'Kansas', abbr: 'KS' },
    { name: 'Kentucky', abbr: 'KY' },
    { name: 'Louisiana', abbr: 'LA' },
    { name: 'Maine', abbr: 'ME' },
    { name: 'Maryland', abbr: 'MD' },
    { name: 'Massachusetts', abbr: 'MA' },
    { name: 'Michigan', abbr: 'MI' },
    { name: 'Minnesota', abbr: 'MN' },
    { name: 'Mississippi', abbr: 'MS' },
    { name: 'Missouri', abbr: 'MO' },
    { name: 'Montana', abbr: 'MT' },
    { name: 'Nebraska', abbr: 'NE' },
    { name: 'Nevada', abbr: 'NV' },
    { name: 'New Hampshire', abbr: 'NH' },
    { name: 'New Jersey', abbr: 'NJ' },
    { name: 'New Mexico', abbr: 'NM' },
    { name: 'New York', abbr: 'NY' },
    { name: 'North Carolina', abbr: 'NC' },
    { name: 'North Dakota', abbr: 'ND' },
    { name: 'Ohio', abbr: 'OH' },
    { name: 'Oklahoma', abbr: 'OK' },
    { name: 'Oregon', abbr: 'OR' },
    { name: 'Pennsylvania', abbr: 'PA' },
    { name: 'Rhode Island', abbr: 'RI' },
    { name: 'South Carolina', abbr: 'SC' },
    { name: 'South Dakota', abbr: 'SD' },
    { name: 'Tennessee', abbr: 'TN' },
    { name: 'Texas', abbr: 'TX' },
    { name: 'Utah', abbr: 'UT' },
    { name: 'Vermont', abbr: 'VT' },
    { name: 'Virginia', abbr: 'VA' },
    { name: 'Washington', abbr: 'WA' },
    { name: 'West Virginia', abbr: 'WV' },
    { name: 'Wisconsin', abbr: 'WI' },
    { name: 'Wyoming', abbr: 'WY' }
  ];

  public static streetName(): string {
    const name = Arrays.randomItem(Address.STREET_NAMES);
    const suffix = Arrays.randomItem(Address.STREET_SUFFIXES);
    return `${name} ${suffix}`;
  }

  public static streetAddress(): string {
    const number = Numbers.between(1, 9999);
    const street = Address.streetName();
    return `${number} ${street}`;
  }

  public static buildingNumber(): string {
    return Numbers.between(1, 9999).toString();
  }

  public static secondaryAddress(): string {
    const type = Arrays.randomItem(Address.BUILDING_TYPES);
    const number = Numbers.between(1, 999);
    return `${type} ${number}`;
  }

  public static fullStreetAddress(): string {
    const street = Address.streetAddress();
    const secondary = Address.secondaryAddress();
    return `${street}, ${secondary}`;
  }

  public static zipCode(): string {
    return Strings.numerify('#####');
  }

  public static zipCodePlus4(): string {
    return Strings.numerify('#####-####');
  }

  public static postalCode(): string {
    return Address.zipCode();
  }

  public static state(): string {
    return Arrays.randomItem(Address.STATES_US).name;
  }

  public static stateAbbr(): string {
    return Arrays.randomItem(Address.STATES_US).abbr;
  }

  public static cityStateZip(): string {
    const city = Location.city();
    const state = Address.stateAbbr();
    const zip = Address.zipCode();
    return `${city}, ${state} ${zip}`;
  }

  public static fullAddress(): string {
    const street = Address.streetAddress();
    const cityStateZip = Address.cityStateZip();
    return `${street}, ${cityStateZip}`;
  }

  public static fullAddressWithSecondary(): string {
    const street = Address.streetAddress();
    const secondary = Address.secondaryAddress();
    const cityStateZip = Address.cityStateZip();
    return `${street}, ${secondary}, ${cityStateZip}`;
  }

  public static country(): string {
    return Location.country();
  }

  public static countryCode(): string {
    return Location.countryCode();
  }

  public static postcode(): string {
    // Generic international postcode format
    return Strings.alphanumeric(Numbers.between(4, 8)).toUpperCase();
  }

  public static nearbyGPSCoordinate(
    baseLatitude?: number,
    baseLongitude?: number,
    radius: number = 10
  ): { latitude: number; longitude: number } {
    const lat = baseLatitude ?? Location.latitude();
    const lon = baseLongitude ?? Location.longitude();
    
    // Simple approximation: 1 degree ≈ 111km
    const radiusInDegrees = radius / 111;
    
    return {
      latitude: lat + Numbers.float(-radiusInDegrees, radiusInDegrees),
      longitude: lon + Numbers.float(-radiusInDegrees, radiusInDegrees)
    };
  }

  public static cardinalDirection(): string {
    return Location.cardinalDirection();
  }

  public static ordinalDirection(): string {
    return Location.ordinalDirection();
  }

  public static direction(): string {
    return Location.direction();
  }
}

