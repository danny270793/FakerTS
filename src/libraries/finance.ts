import Arrays from './arrays';
import Numbers from './numbers';
import Strings from './strings';
import Person from './person';
import Booleans from './booleans';

export default class Finance {
  private static readonly CARD_TYPES = {
    visa: {
      name: 'Visa',
      prefixes: ['4'],
      lengths: [13, 16, 19]
    },
    mastercard: {
      name: 'Mastercard',
      prefixes: ['51', '52', '53', '54', '55', '2221', '2720'],
      lengths: [16]
    },
    amex: {
      name: 'American Express',
      prefixes: ['34', '37'],
      lengths: [15]
    },
    discover: {
      name: 'Discover',
      prefixes: ['6011', '65'],
      lengths: [16]
    },
    dinersclub: {
      name: 'Diners Club',
      prefixes: ['36', '38', '300', '301', '302', '303', '304', '305'],
      lengths: [14]
    },
    jcb: {
      name: 'JCB',
      prefixes: ['35'],
      lengths: [16]
    }
  };

  private static readonly CURRENCIES = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'MXN', symbol: 'Mex$', name: 'Mexican Peso' }
  ];

  private static readonly TRANSACTION_TYPES = [
    'payment', 'invoice', 'deposit', 'withdrawal', 'transfer', 'refund'
  ];

  // Luhn algorithm to generate valid credit card numbers
  private static luhnChecksum(cardNumber: string): number {
    let sum = 0;
    let shouldDouble = true;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i] as string);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return (10 - (sum % 10)) % 10;
  }

  private static generateCardNumber(prefix: string, length: number): string {
    let cardNumber = prefix;
    
    // Fill with random digits up to length - 1 (leaving space for checksum)
    while (cardNumber.length < length - 1) {
      cardNumber += Numbers.digit().toString();
    }

    // Add Luhn checksum digit
    const checksumDigit = Finance.luhnChecksum(cardNumber);
    cardNumber += checksumDigit.toString();

    return cardNumber;
  }

  public static creditCardNumber(type?: 'visa' | 'mastercard' | 'amex' | 'discover' | 'dinersclub' | 'jcb'): string {
    const cardType = type 
      ? Finance.CARD_TYPES[type]
      : Arrays.randomItem(Object.values(Finance.CARD_TYPES));

    const prefix = Arrays.randomItem(cardType.prefixes);
    const length = Arrays.randomItem(cardType.lengths);

    return Finance.generateCardNumber(prefix, length);
  }

  public static creditCardType(): string {
    return Arrays.randomItem(Object.values(Finance.CARD_TYPES)).name;
  }

  public static creditCardCVV(type?: 'amex'): string {
    // American Express uses 4 digits, others use 3
    const length = type === 'amex' ? 4 : 3;
    return Strings.numerify('#'.repeat(length));
  }

  public static creditCardExpiry(): string {
    const currentYear = new Date().getFullYear();
    const month = Numbers.between(1, 12).toString().padStart(2, '0');
    const year = Numbers.between(currentYear, currentYear + 10);
    return `${month}/${year.toString().slice(-2)}`;
  }

  public static creditCardExpiryDate(): { month: number; year: number } {
    const currentYear = new Date().getFullYear();
    return {
      month: Numbers.between(1, 12),
      year: Numbers.between(currentYear, currentYear + 10)
    };
  }

  public static creditCard(type?: 'visa' | 'mastercard' | 'amex' | 'discover' | 'dinersclub' | 'jcb'): {
    number: string;
    type: string;
    cvv: string;
    expiry: string;
    holder: string;
  } {
    const cardType = type || Arrays.randomItem(Object.keys(Finance.CARD_TYPES)) as any;
    const isAmex = cardType === 'amex';
    
    return {
      number: Finance.creditCardNumber(cardType),
      type: Finance.CARD_TYPES[cardType as keyof typeof Finance.CARD_TYPES].name,
      cvv: Finance.creditCardCVV(isAmex ? 'amex' : undefined),
      expiry: Finance.creditCardExpiry(),
      holder: Person.fullName().toUpperCase()
    };
  }

  public static amount(min: number = 0, max: number = 1000, decimalPlaces: number = 2): number {
    return Numbers.decimal(min, max, decimalPlaces);
  }

  public static currencyCode(): string {
    return Arrays.randomItem(Finance.CURRENCIES).code;
  }

  public static currencySymbol(): string {
    return Arrays.randomItem(Finance.CURRENCIES).symbol;
  }

  public static currencyName(): string {
    return Arrays.randomItem(Finance.CURRENCIES).name;
  }

  public static currency(): { code: string; symbol: string; name: string } {
    return Arrays.randomItem(Finance.CURRENCIES);
  }

  public static transactionType(): string {
    return Arrays.randomItem(Finance.TRANSACTION_TYPES);
  }

  public static accountNumber(length: number = 10): string {
    return Strings.numerify('#'.repeat(length));
  }

  public static routingNumber(): string {
    // US routing numbers are 9 digits
    return Strings.numerify('#########');
  }

  public static iban(): string {
    // Simplified IBAN format: 2 country code + 2 check digits + up to 30 alphanumeric
    const countryCode = Arrays.randomItem(['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH']);
    const checkDigits = Strings.numerify('##');
    const accountCode = Strings.alphanumeric(Numbers.between(12, 18)).toUpperCase();
    return `${countryCode}${checkDigits}${accountCode}`;
  }

  public static bic(): string {
    // BIC format: 4 bank code + 2 country code + 2 location + optional 3 branch
    const bankCode = Strings.characters(4).toUpperCase();
    const countryCode = Arrays.randomItem(['US', 'GB', 'DE', 'FR', 'IT', 'ES', 'JP', 'CA']);
    const location = Strings.alphanumeric(2).toUpperCase();
    const branch = Booleans.boolean(0.5) ? Strings.alphanumeric(3).toUpperCase() : '';
    return `${bankCode}${countryCode}${location}${branch}`;
  }

  public static bitcoinAddress(): string {
    // Bitcoin addresses start with 1, 3, or bc1 and are 26-35 characters
    const prefix = Arrays.randomItem(['1', '3', 'bc1']);
    const targetLength = Numbers.between(26, 35);
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let address = prefix;
    
    while (address.length < targetLength) {
      address += chars[Numbers.between(0, chars.length - 1)];
    }
    
    return address;
  }

  public static ethereumAddress(): string {
    // Ethereum addresses are 0x followed by 40 hex characters
    return '0x' + Strings.hexify('H'.repeat(40)).toLowerCase();
  }

  public static price(min: number = 0, max: number = 1000, decimalPlaces: number = 2, symbol?: string): string {
    const amount = Finance.amount(min, max, decimalPlaces);
    const currencySymbol = symbol || Finance.currencySymbol();
    return `${currencySymbol}${amount.toFixed(decimalPlaces)}`;
  }

  public static transactionDescription(): string {
    const descriptions = [
      'Online purchase',
      'Grocery store',
      'Gas station',
      'Restaurant',
      'Coffee shop',
      'Department store',
      'Pharmacy',
      'Utilities payment',
      'Insurance premium',
      'Subscription service',
      'ATM withdrawal',
      'Direct deposit',
      'Wire transfer',
      'Mobile payment',
      'Check deposit'
    ];
    return Arrays.randomItem(descriptions);
  }

  public static pin(length: number = 4): string {
    return Strings.numerify('#'.repeat(length));
  }

  public static mask(cardNumber: string, visibleDigits: number = 4): string {
    if (cardNumber.length <= visibleDigits) {
      return cardNumber;
    }
    const masked = '*'.repeat(cardNumber.length - visibleDigits);
    const visible = cardNumber.slice(-visibleDigits);
    return masked + visible;
  }
}

