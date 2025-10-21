import Finance from './finance';

describe('Finance', () => {
  // Helper function to validate Luhn algorithm
  const isValidLuhn = (cardNumber: string): boolean => {
    let sum = 0;
    let isEven = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i] as string);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  };

  describe('creditCardNumber', () => {
    it('should generate a valid credit card number', () => {
      const result = Finance.creditCardNumber();
      expect(result).toMatch(/^\d+$/);
      expect(isValidLuhn(result)).toBe(true);
    });

    it('should generate a valid Visa card', () => {
      const result = Finance.creditCardNumber('visa');
      expect(result[0]).toBe('4');
      expect([13, 16, 19]).toContain(result.length);
      expect(isValidLuhn(result)).toBe(true);
    });

    it('should generate a valid Mastercard', () => {
      const result = Finance.creditCardNumber('mastercard');
      expect(result.length).toBe(16);
      expect(isValidLuhn(result)).toBe(true);
    });

    it('should generate a valid American Express card', () => {
      const result = Finance.creditCardNumber('amex');
      expect(['34', '37']).toContain(result.slice(0, 2));
      expect(result.length).toBe(15);
      expect(isValidLuhn(result)).toBe(true);
    });

    it('should generate a valid Discover card', () => {
      const result = Finance.creditCardNumber('discover');
      expect(result.length).toBe(16);
      expect(isValidLuhn(result)).toBe(true);
    });

    it('should generate different card numbers', () => {
      const results = new Set<string>();
      for (let i = 0; i < 10; i++) {
        results.add(Finance.creditCardNumber());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('creditCardType', () => {
    it('should return a valid card type', () => {
      const validTypes = ['Visa', 'Mastercard', 'American Express', 'Discover', 'Diners Club', 'JCB'];
      const result = Finance.creditCardType();
      expect(validTypes).toContain(result);
    });
  });

  describe('creditCardCVV', () => {
    it('should return a 3-digit CVV by default', () => {
      const result = Finance.creditCardCVV();
      expect(result).toMatch(/^\d{3}$/);
    });

    it('should return a 4-digit CVV for American Express', () => {
      const result = Finance.creditCardCVV('amex');
      expect(result).toMatch(/^\d{4}$/);
    });
  });

  describe('creditCardExpiry', () => {
    it('should return a valid expiry date in MM/YY format', () => {
      const result = Finance.creditCardExpiry();
      expect(result).toMatch(/^\d{2}\/\d{2}$/);
    });

    it('should have valid month', () => {
      const result = Finance.creditCardExpiry();
      const month = parseInt(result.split('/')[0] as string);
      expect(month).toBeGreaterThanOrEqual(1);
      expect(month).toBeLessThanOrEqual(12);
    });

    it('should have future year', () => {
      const result = Finance.creditCardExpiry();
      const year = parseInt('20' + result.split('/')[1]);
      const currentYear = new Date().getFullYear();
      expect(year).toBeGreaterThanOrEqual(currentYear);
    });
  });

  describe('creditCardExpiryDate', () => {
    it('should return an object with month and year', () => {
      const result = Finance.creditCardExpiryDate();
      expect(result).toHaveProperty('month');
      expect(result).toHaveProperty('year');
      expect(result.month).toBeGreaterThanOrEqual(1);
      expect(result.month).toBeLessThanOrEqual(12);
    });
  });

  describe('creditCard', () => {
    it('should return a complete credit card object', () => {
      const result = Finance.creditCard();
      expect(result).toHaveProperty('number');
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('cvv');
      expect(result).toHaveProperty('expiry');
      expect(result).toHaveProperty('holder');
    });

    it('should have valid card number', () => {
      const result = Finance.creditCard();
      expect(isValidLuhn(result.number)).toBe(true);
    });

    it('should have uppercase holder name', () => {
      const result = Finance.creditCard();
      expect(result.holder).toMatch(/^[A-Z\s]+$/);
    });

    it('should generate Visa card when specified', () => {
      const result = Finance.creditCard('visa');
      expect(result.type).toBe('Visa');
      expect(result.number[0]).toBe('4');
    });
  });

  describe('amount', () => {
    it('should return a number within range', () => {
      const result = Finance.amount(10, 100);
      expect(result).toBeGreaterThanOrEqual(10);
      expect(result).toBeLessThanOrEqual(101); // Allow for decimals
    });

    it('should have correct decimal places', () => {
      const result = Finance.amount(0, 100, 2);
      const decimalPart = result.toString().split('.')[1];
      expect(decimalPart).toBeDefined();
    });

    it('should use default values', () => {
      const result = Finance.amount();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1001);
    });
  });

  describe('currencyCode', () => {
    it('should return a valid currency code', () => {
      const validCodes = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'MXN'];
      const result = Finance.currencyCode();
      expect(validCodes).toContain(result);
    });
  });

  describe('currencySymbol', () => {
    it('should return a valid currency symbol', () => {
      const result = Finance.currencySymbol();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('currencyName', () => {
    it('should return a valid currency name', () => {
      const result = Finance.currencyName();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('currency', () => {
    it('should return a currency object', () => {
      const result = Finance.currency();
      expect(result).toHaveProperty('code');
      expect(result).toHaveProperty('symbol');
      expect(result).toHaveProperty('name');
    });
  });

  describe('transactionType', () => {
    it('should return a valid transaction type', () => {
      const validTypes = ['payment', 'invoice', 'deposit', 'withdrawal', 'transfer', 'refund'];
      const result = Finance.transactionType();
      expect(validTypes).toContain(result);
    });
  });

  describe('accountNumber', () => {
    it('should return an account number of default length', () => {
      const result = Finance.accountNumber();
      expect(result).toMatch(/^\d{10}$/);
    });

    it('should return an account number of specified length', () => {
      const result = Finance.accountNumber(12);
      expect(result).toMatch(/^\d{12}$/);
    });
  });

  describe('routingNumber', () => {
    it('should return a 9-digit routing number', () => {
      const result = Finance.routingNumber();
      expect(result).toMatch(/^\d{9}$/);
    });
  });

  describe('iban', () => {
    it('should return a valid IBAN format', () => {
      const result = Finance.iban();
      expect(result).toMatch(/^[A-Z]{2}\d{2}[A-Z0-9]+$/);
    });

    it('should have correct country code length', () => {
      const result = Finance.iban();
      expect(result.slice(0, 2)).toMatch(/^[A-Z]{2}$/);
    });

    it('should have check digits', () => {
      const result = Finance.iban();
      expect(result.slice(2, 4)).toMatch(/^\d{2}$/);
    });
  });

  describe('bic', () => {
    it('should return a valid BIC format', () => {
      const result = Finance.bic();
      expect(result).toMatch(/^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/);
    });

    it('should have correct length', () => {
      const result = Finance.bic();
      expect([8, 11]).toContain(result.length);
    });
  });

  describe('bitcoinAddress', () => {
    it('should return a valid Bitcoin address format', () => {
      const result = Finance.bitcoinAddress();
      expect(['1', '3', 'b']).toContain(result[0]);
    });

    it('should have correct length range', () => {
      const result = Finance.bitcoinAddress();
      expect(result.length).toBeGreaterThanOrEqual(26);
      expect(result.length).toBeLessThanOrEqual(35);
    });
  });

  describe('ethereumAddress', () => {
    it('should return a valid Ethereum address format', () => {
      const result = Finance.ethereumAddress();
      expect(result).toMatch(/^0x[0-9a-f]{40}$/);
    });

    it('should always be 42 characters', () => {
      const result = Finance.ethereumAddress();
      expect(result.length).toBe(42);
    });
  });

  describe('price', () => {
    it('should return a formatted price with symbol', () => {
      const result = Finance.price();
      expect(result).toMatch(/^.+\d+\.\d{2}$/);
    });

    it('should use custom symbol when provided', () => {
      const result = Finance.price(0, 100, 2, '$');
      expect(result[0]).toBe('$');
    });

    it('should have correct decimal places', () => {
      const result = Finance.price(0, 100, 3);
      const decimalPart = result.match(/\.\d+$/);
      expect(decimalPart).not.toBeNull();
    });
  });

  describe('transactionDescription', () => {
    it('should return a transaction description', () => {
      const result = Finance.transactionDescription();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return different descriptions', () => {
      const results = new Set<string>();
      for (let i = 0; i < 10; i++) {
        results.add(Finance.transactionDescription());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('pin', () => {
    it('should return a 4-digit PIN by default', () => {
      const result = Finance.pin();
      expect(result).toMatch(/^\d{4}$/);
    });

    it('should return a PIN of specified length', () => {
      const result = Finance.pin(6);
      expect(result).toMatch(/^\d{6}$/);
    });
  });

  describe('mask', () => {
    it('should mask all but last 4 digits by default', () => {
      const cardNumber = '1234567890123456';
      const result = Finance.mask(cardNumber);
      expect(result).toBe('************3456');
    });

    it('should mask with custom visible digits', () => {
      const cardNumber = '1234567890123456';
      const result = Finance.mask(cardNumber, 6);
      expect(result).toBe('**********123456');
    });

    it('should not mask if number is shorter than visible digits', () => {
      const cardNumber = '123';
      const result = Finance.mask(cardNumber, 4);
      expect(result).toBe('123');
    });
  });
});

