import Numbers from './numbers';
import Strings from './strings';
import Arrays from './arrays';

export default class Internet {
  public static email(firstName?: string, lastName?: string): string {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    const domain = Arrays.randomItem(domains);
    
    if (firstName && lastName) {
      return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    }
    
    const username = Strings.characters(Numbers.between(5, 10));
    const number = Numbers.between(0, 999);
    return `${username}${number}@${domain}`;
  }

  public static username(): string {
    const adjectives = ['cool', 'super', 'mega', 'ultra', 'pro', 'epic', 'fast', 'smart'];
    const nouns = ['user', 'coder', 'ninja', 'master', 'guru', 'wizard', 'dev', 'hacker'];
    const adjective = Arrays.randomItem(adjectives);
    const noun = Arrays.randomItem(nouns);
    const number = Numbers.between(0, 9999);
    return `${adjective}_${noun}${number}`;
  }

  public static url(): string {
    const protocols = ['http', 'https'];
    const protocol = Arrays.randomItem(protocols);
    const domain = Strings.characters(Numbers.between(5, 10));
    const tlds = ['com', 'org', 'net', 'io', 'dev', 'app'];
    const tld = Arrays.randomItem(tlds);
    return `${protocol}://${domain}.${tld}`;
  }

  public static domainName(): string {
    const domain = Strings.characters(Numbers.between(5, 10));
    const tlds = ['com', 'org', 'net', 'io', 'dev', 'app', 'co', 'info'];
    const tld = Arrays.randomItem(tlds);
    return `${domain}.${tld}`;
  }

  public static ipv4(): string {
    const octet1 = Numbers.between(1, 255);
    const octet2 = Numbers.between(0, 255);
    const octet3 = Numbers.between(0, 255);
    const octet4 = Numbers.between(1, 255);
    return `${octet1}.${octet2}.${octet3}.${octet4}`;
  }

  public static ipv6(): string {
    const groups: string[] = [];
    for (let i = 0; i < 8; i++) {
      groups.push(Strings.hexify('HHHH').toLowerCase());
    }
    return groups.join(':');
  }

  public static mac(): string {
    const octets: string[] = [];
    for (let i = 0; i < 6; i++) {
      octets.push(Strings.hexify('HH'));
    }
    return octets.join(':');
  }

  public static port(): number {
    return Numbers.between(1024, 65535);
  }

  public static userAgent(): string {
    const browsers = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    ];
    return Arrays.randomItem(browsers);
  }

  public static httpMethod(): string {
    const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];
    return Arrays.randomItem(methods);
  }

  public static httpStatusCode(): number {
    const codes = [200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 500, 502, 503];
    return Arrays.randomItem(codes);
  }
}

