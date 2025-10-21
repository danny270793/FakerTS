import Arrays from './arrays';
import Numbers from './numbers';

export default class Person {
  private static readonly FIRST_NAMES_MALE = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
    'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark',
    'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian',
    'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan'
  ];

  private static readonly FIRST_NAMES_FEMALE = [
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan',
    'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Margaret', 'Sandra',
    'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Dorothy', 'Carol',
    'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia'
  ];

  private static readonly LAST_NAMES = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White',
    'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King',
    'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams'
  ];

  private static readonly PREFIXES = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.', 'Prof.'];
  
  private static readonly SUFFIXES = ['Jr.', 'Sr.', 'II', 'III', 'IV', 'V', 'PhD', 'MD'];

  public static firstName(gender?: 'male' | 'female'): string {
    if (gender === 'male') {
      return Arrays.randomItem(Person.FIRST_NAMES_MALE);
    } else if (gender === 'female') {
      return Arrays.randomItem(Person.FIRST_NAMES_FEMALE);
    } else {
      const allNames = [...Person.FIRST_NAMES_MALE, ...Person.FIRST_NAMES_FEMALE];
      return Arrays.randomItem(allNames);
    }
  }

  public static lastName(): string {
    return Arrays.randomItem(Person.LAST_NAMES);
  }

  public static fullName(gender?: 'male' | 'female'): string {
    const first = Person.firstName(gender);
    const last = Person.lastName();
    return `${first} ${last}`;
  }

  public static prefix(): string {
    return Arrays.randomItem(Person.PREFIXES);
  }

  public static suffix(): string {
    return Arrays.randomItem(Person.SUFFIXES);
  }

  public static fullNameWithPrefix(gender?: 'male' | 'female'): string {
    const prefix = Person.prefix();
    const fullName = Person.fullName(gender);
    return `${prefix} ${fullName}`;
  }

  public static fullNameWithSuffix(gender?: 'male' | 'female'): string {
    const fullName = Person.fullName(gender);
    const suffix = Person.suffix();
    return `${fullName}, ${suffix}`;
  }

  public static gender(): 'male' | 'female' {
    return Arrays.randomItem(['male', 'female']);
  }

  public static jobTitle(): string {
    const positions = [
      'Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer',
      'Marketing Manager', 'Sales Representative', 'Accountant', 'Human Resources Manager',
      'Operations Manager', 'Customer Service Representative', 'Business Analyst',
      'Project Manager', 'System Administrator', 'DevOps Engineer', 'Quality Assurance Engineer'
    ];
    return Arrays.randomItem(positions);
  }

  public static phoneNumber(): string {
    const areaCode = Numbers.between(200, 999);
    const prefix = Numbers.between(200, 999);
    const lineNumber = Numbers.between(1000, 9999);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  }

  public static bio(): string {
    const bios = [
      'Passionate about technology and innovation.',
      'Coffee enthusiast and problem solver.',
      'Lover of good code and great design.',
      'Always learning, always growing.',
      'Building the future, one line at a time.',
      'Turning ideas into reality.',
      'Striving for excellence in everything.',
      'Making the world a better place through technology.'
    ];
    return Arrays.randomItem(bios);
  }
}

