# 🎭 @danny270793/Faker

> A comprehensive TypeScript library to generate fake data for testing and development

[![npm version](https://img.shields.io/npm/v/@danny270793/faker.svg)](https://www.npmjs.com/package/@danny270793/faker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-335%20passing-brightgreen.svg)]()

Generate realistic fake data for your applications with ease. Perfect for testing, prototyping, and development.

## 📦 Installation

```bash
npm install @danny270793/faker
```

## 🚀 Quick Start

```typescript
import { Person, Internet, Lorem, Finance } from '@danny270793/faker';

// Generate a person
const name = Person.fullName(); // "John Smith"
const email = Internet.email(); // "user123@gmail.com"

// Generate lorem text
const paragraph = Lorem.paragraph(); // "Lorem ipsum dolor sit amet..."

// Generate credit card (for testing only!)
const card = Finance.creditCard(); 
// { number: "4532...", type: "Visa", cvv: "123", expiry: "12/28", holder: "JOHN DOE" }
```

## 📚 Libraries

Faker includes 12 powerful libraries to generate various types of fake data:

### 🔢 Numbers
Generate random numbers with various constraints.

```typescript
import { Numbers } from '@danny270793/faker';

Numbers.between(1, 100);      // Random number between 1-100
Numbers.digit();              // Random digit 0-9
Numbers.even(0, 100);         // Random even number
Numbers.odd(1, 99);           // Random odd number
Numbers.positive(1000);       // Positive number up to 1000
Numbers.negative(-1000);      // Negative number down to -1000
Numbers.float(0, 1);          // Random float between 0-1
Numbers.decimal(10, 100, 2);  // Decimal with 2 places
Numbers.percentage();         // Random percentage 0-100
Numbers.prime();              // Random prime number
Numbers.binary();             // "0" or "1"
Numbers.octal();              // "0" to "7"
```

### 🔤 Strings
Generate and manipulate random strings.

```typescript
import { Strings } from '@danny270793/faker';

Strings.character();              // Random lowercase letter
Strings.characters(10);           // 10 random letters
Strings.alphanumeric(8);          // Random alphanumeric string
Strings.uuid();                   // UUID format string
Strings.hexify('HH-HH-HH');      // "3F-A2-B1"
Strings.numerify('###-####');    // "123-4567"
Strings.lexify('???-???');       // "abc-xyz"

// Case conversions
Strings.capitalize('hello');      // "Hello"
Strings.uppercase('hello');       // "HELLO"
Strings.lowercase('HELLO');       // "hello"
Strings.camelCase('hello world'); // "helloWorld"
Strings.snakeCase('helloWorld');  // "hello_world"
Strings.kebabCase('helloWorld');  // "hello-world"

// Special characters
Strings.symbol();                 // Random symbol
Strings.symbols(5);               // 5 random symbols
Strings.ascii();                  // Random ASCII character
```

### ✅ Booleans
Generate random boolean values.

```typescript
import { Booleans } from '@danny270793/faker';

Booleans.boolean(0.7);  // 70% chance of true
```

### 📋 Arrays
Array manipulation and random selection.

```typescript
import { Arrays } from '@danny270793/faker';

Arrays.randomItem([1, 2, 3, 4]);      // Random item from array
Arrays.randomItems([1, 2, 3, 4], 2);  // 2 random items
Arrays.shuffle([1, 2, 3, 4]);         // Shuffled array
Arrays.random(5);                      // Array of 5 random digits
```

### 📅 Dates
Generate dates in various ranges.

```typescript
import { Dates } from '@danny270793/faker';

Dates.between(start, end);        // Date between two dates
Dates.past(5);                    // Date within past 5 years
Dates.future(5);                  // Date within next 5 years
Dates.recent(7);                  // Date within past 7 days
Dates.soon(7);                    // Date within next 7 days
Dates.birthdate(18, 80);          // Birthdate for age 18-80
Dates.month();                    // Random month name
Dates.weekday();                  // Random weekday name
```

### 🎨 Colors
Generate color values in various formats.

```typescript
import { Colors } from '@danny270793/faker';

Colors.hex();          // "#3F2A1B"
Colors.rgb();          // "rgb(255, 128, 64)"
Colors.rgba();         // "rgba(255, 128, 64, 0.5)"
Colors.hsl();          // "hsl(180, 50%, 75%)"
Colors.hsla();         // "hsla(180, 50%, 75%, 0.8)"
Colors.colorName();    // "red", "blue", "green", etc.
```

### 🌐 Internet
Generate internet-related data.

```typescript
import { Internet } from '@danny270793/faker';

Internet.email();                     // "user123@gmail.com"
Internet.email('John', 'Doe');        // "john.doe@example.com"
Internet.username();                  // "cool_user123"
Internet.url();                       // "https://example.com"
Internet.domainName();                // "example.com"
Internet.ipv4();                      // "192.168.1.1"
Internet.ipv6();                      // "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
Internet.mac();                       // "3D:F2:C9:A6:B3:4F"
Internet.port();                      // 8080
Internet.userAgent();                 // Browser user agent string
Internet.httpMethod();                // "GET", "POST", etc.
Internet.httpStatusCode();            // 200, 404, 500, etc.
```

### 👤 Person
Generate personal information.

```typescript
import { Person } from '@danny270793/faker';

Person.firstName();                   // "John"
Person.firstName('male');             // Male first name
Person.firstName('female');           // Female first name
Person.lastName();                    // "Smith"
Person.fullName();                    // "John Smith"
Person.fullName('female');            // Female full name
Person.prefix();                      // "Mr.", "Dr.", etc.
Person.suffix();                      // "Jr.", "Sr.", "PhD", etc.
Person.fullNameWithPrefix();          // "Dr. John Smith"
Person.fullNameWithSuffix();          // "John Smith, Jr."
Person.gender();                      // "male" or "female"
Person.jobTitle();                    // "Software Engineer"
Person.phoneNumber();                 // "(555) 123-4567"
Person.bio();                         // Short biography text
```

### 📍 Location
Generate geographic data.

```typescript
import { Location } from '@danny270793/faker';

Location.country();                   // "United States"
Location.countryCode();               // "US"
Location.city();                      // "New York"
Location.continent();                 // "North America"
Location.timeZone();                  // "America/New_York"
Location.latitude();                  // 40.7128
Location.longitude();                 // -74.0060
Location.coordinates();               // { latitude: 40.7128, longitude: -74.0060 }
Location.coordinatesString();         // "40.712800, -74.006000"
Location.direction();                 // "North", "Southeast", etc.
Location.cardinalDirection();         // "North", "South", "East", "West"
Location.ordinalDirection();          // "Northeast", "Southwest", etc.
```

### 🏠 Address
Generate complete addresses.

```typescript
import { Address } from '@danny270793/faker';

Address.streetName();                 // "Main Street"
Address.streetAddress();              // "123 Main Street"
Address.buildingNumber();             // "456"
Address.secondaryAddress();           // "Apartment 5"
Address.fullStreetAddress();          // "123 Main Street, Apartment 5"
Address.zipCode();                    // "12345"
Address.zipCodePlus4();               // "12345-6789"
Address.state();                      // "California"
Address.stateAbbr();                  // "CA"
Address.cityStateZip();               // "New York, NY 10001"
Address.fullAddress();                // "123 Main St, New York, NY 10001"
Address.fullAddressWithSecondary();   // Complete address with apt/suite
Address.country();                    // "United States"
Address.countryCode();                // "US"
Address.postcode();                   // International postcode
Address.nearbyGPSCoordinate(lat, lon, radius);  // GPS near location
```

### 💰 Finance
Generate financial data (for testing only!).

```typescript
import { Finance } from '@danny270793/faker';

// Credit cards (Luhn algorithm valid!)
Finance.creditCardNumber();           // "4532015112830366"
Finance.creditCardNumber('visa');     // Visa card
Finance.creditCardNumber('mastercard');  // Mastercard
Finance.creditCardNumber('amex');     // American Express
Finance.creditCardType();             // "Visa", "Mastercard", etc.
Finance.creditCardCVV();              // "123"
Finance.creditCardCVV('amex');        // "1234" (4 digits for AmEx)
Finance.creditCardExpiry();           // "12/28"
Finance.creditCardExpiryDate();       // { month: 12, year: 2028 }

// Complete credit card
Finance.creditCard();
// {
//   number: "4532015112830366",
//   type: "Visa",
//   cvv: "123",
//   expiry: "12/28",
//   holder: "JOHN DOE"
// }

// Currency
Finance.amount(0, 1000, 2);           // 523.45
Finance.price(0, 100, 2, '$');        // "$52.34"
Finance.currencyCode();               // "USD"
Finance.currencySymbol();             // "$"
Finance.currencyName();               // "US Dollar"
Finance.currency();                   // { code: "USD", symbol: "$", name: "US Dollar" }

// Banking
Finance.accountNumber();              // "1234567890"
Finance.routingNumber();              // "123456789"
Finance.iban();                       // "GB29NWBK60161331926819"
Finance.bic();                        // "NWBKGB2L"

// Crypto
Finance.bitcoinAddress();             // "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
Finance.ethereumAddress();            // "0x742d35cc6634c0532925a3b844bc9e7595f0beb"

// Other
Finance.transactionType();            // "payment", "deposit", etc.
Finance.transactionDescription();     // "Online purchase"
Finance.pin(4);                       // "1234"
Finance.mask("4532015112830366", 4);  // "************0366"
```

### 📝 Lorem
Generate placeholder text.

```typescript
import { Lorem } from '@danny270793/faker';

// Words
Lorem.word();                         // "lorem"
Lorem.words(5);                       // ["lorem", "ipsum", "dolor", "sit", "amet"]
Lorem.supplemental();                 // Extended Latin word
Lorem.supplementalWords(5);           // Array of supplemental words

// Sentences
Lorem.sentence();                     // "Lorem ipsum dolor sit amet."
Lorem.sentence(10);                   // Sentence with 10 words
Lorem.sentences(3);                   // 3 sentences joined with space
Lorem.sentences(3, '\n');             // 3 sentences, newline separated
Lorem.supplementalSentence();         // Sentence with supplemental words

// Paragraphs
Lorem.paragraph();                    // Single paragraph (3-6 sentences)
Lorem.paragraph(5);                   // Paragraph with 5 sentences
Lorem.paragraphs(3);                  // 3 paragraphs (double newline separated)
Lorem.paragraphs(3, '\n---\n');      // Custom separator
Lorem.supplementalParagraph();        // Paragraph with supplemental words

// Other
Lorem.text();                         // Random text (5-10 sentences)
Lorem.text(7);                        // Text with 7 sentences
Lorem.lines(5);                       // 5 lines (sentences separated by \n)
Lorem.slug(3);                        // "lorem-ipsum-dolor"
```

## 🎯 Use Cases

- **Testing**: Generate realistic test data for unit and integration tests
- **Prototyping**: Quickly populate UI mockups with sample data
- **Development**: Create seed data for development databases
- **Demos**: Generate convincing demo content for presentations
- **Load Testing**: Create large datasets for performance testing

## ⚠️ Important Notes

- **Credit Card Data**: All generated credit card numbers are for **testing purposes only**. While they pass Luhn validation, they are not real cards and should never be used for actual transactions.
- **Personal Data**: Generated names, addresses, and contact information are fictional and should not be used to identify real people.
- **Randomness**: This library uses `Math.random()` which is suitable for testing but not cryptographically secure.

## 🧪 Testing

All functions are thoroughly tested with 335+ passing tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm test:coverage
```

## 📖 API Documentation

Each library is exported as a static class with methods. All methods are fully typed with TypeScript for excellent IDE support and type safety.

```typescript
// Import specific libraries
import { Numbers, Strings, Person } from '@danny270793/faker';

// Or import everything
import * as Faker from '@danny270793/faker';

Faker.Person.fullName();
Faker.Internet.email();
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md) for details

## 👨‍💻 Author

**Danny Vaca**
- Email: danny270793@gmail.com
- Website: https://danny270793.github.io
- GitHub: [@danny270793](https://github.com/danny270793)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Danny Vaca](https://danny270793.github.io)

