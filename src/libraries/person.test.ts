import Person from './person';

describe('Person', () => {
  describe('firstName', () => {
    it('should return a first name', () => {
      const result = Person.firstName();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return a male first name when specified', () => {
      const maleNames = [
        'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
        'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark',
        'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian',
        'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan'
      ];
      const result = Person.firstName('male');
      expect(maleNames).toContain(result);
    });

    it('should return a female first name when specified', () => {
      const femaleNames = [
        'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan',
        'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Margaret', 'Sandra',
        'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Dorothy', 'Carol',
        'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia'
      ];
      const result = Person.firstName('female');
      expect(femaleNames).toContain(result);
    });
  });

  describe('lastName', () => {
    it('should return a last name', () => {
      const result = Person.lastName();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('fullName', () => {
    it('should return a full name', () => {
      const result = Person.fullName();
      expect(result).toMatch(/^[A-Z][a-z]+ [A-Z][a-z]+$/);
    });

    it('should return a full name with gender', () => {
      const result = Person.fullName('male');
      expect(result).toMatch(/^[A-Z][a-z]+ [A-Z][a-z]+$/);
    });
  });

  describe('prefix', () => {
    it('should return a valid prefix', () => {
      const validPrefixes = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.', 'Prof.'];
      const result = Person.prefix();
      expect(validPrefixes).toContain(result);
    });
  });

  describe('suffix', () => {
    it('should return a valid suffix', () => {
      const validSuffixes = ['Jr.', 'Sr.', 'II', 'III', 'IV', 'V', 'PhD', 'MD'];
      const result = Person.suffix();
      expect(validSuffixes).toContain(result);
    });
  });

  describe('fullNameWithPrefix', () => {
    it('should return a full name with prefix', () => {
      const result = Person.fullNameWithPrefix();
      expect(result).toMatch(/^(Mr\.|Mrs\.|Ms\.|Miss|Dr\.|Prof\.) [A-Z][a-z]+ [A-Z][a-z]+$/);
    });
  });

  describe('fullNameWithSuffix', () => {
    it('should return a full name with suffix', () => {
      const result = Person.fullNameWithSuffix();
      expect(result).toMatch(/^[A-Z][a-z]+ [A-Z][a-z]+, (Jr\.|Sr\.|II|III|IV|V|PhD|MD)$/);
    });
  });

  describe('gender', () => {
    it('should return male or female', () => {
      const result = Person.gender();
      expect(['male', 'female']).toContain(result);
    });
  });

  describe('jobTitle', () => {
    it('should return a job title', () => {
      const result = Person.jobTitle();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('phoneNumber', () => {
    it('should return a valid phone number', () => {
      const result = Person.phoneNumber();
      expect(result).toMatch(/^\(\d{3}\) \d{3}-\d{4}$/);
    });
  });

  describe('bio', () => {
    it('should return a bio', () => {
      const result = Person.bio();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });
});

