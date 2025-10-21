import Internet from './internet';

describe('Internet', () => {
  describe('email', () => {
    it('should return a valid email address', () => {
      const result = Internet.email();
      expect(result).toMatch(/^[a-z0-9]+@[a-z]+\.(com|org|net|io|dev|app|co|info)$/);
    });

    it('should create email from first and last name', () => {
      const result = Internet.email('John', 'Doe');
      expect(result).toMatch(/^john\.doe@[a-z]+\.(com|org|net|io|dev|app|co|info)$/);
    });
  });

  describe('username', () => {
    it('should return a valid username', () => {
      const result = Internet.username();
      expect(result).toMatch(/^[a-z]+_[a-z]+\d+$/);
    });
  });

  describe('url', () => {
    it('should return a valid URL', () => {
      const result = Internet.url();
      expect(result).toMatch(/^https?:\/\/[a-z]+\.(com|org|net|io|dev|app|co|info)$/);
    });
  });

  describe('domainName', () => {
    it('should return a valid domain name', () => {
      const result = Internet.domainName();
      expect(result).toMatch(/^[a-z]+\.(com|org|net|io|dev|app|co|info)$/);
    });
  });

  describe('ipv4', () => {
    it('should return a valid IPv4 address', () => {
      const result = Internet.ipv4();
      expect(result).toMatch(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);
    });

    it('should have octets between 0 and 255', () => {
      const result = Internet.ipv4();
      const octets = result.split('.').map(Number);
      expect(octets).toHaveLength(4);
      octets.forEach(octet => {
        expect(octet).toBeGreaterThanOrEqual(0);
        expect(octet).toBeLessThanOrEqual(255);
      });
    });
  });

  describe('ipv6', () => {
    it('should return a valid IPv6 address', () => {
      const result = Internet.ipv6();
      expect(result).toMatch(/^[0-9a-f]{4}(:[0-9a-f]{4}){7}$/);
    });

    it('should have 8 groups', () => {
      const result = Internet.ipv6();
      const groups = result.split(':');
      expect(groups).toHaveLength(8);
    });
  });

  describe('mac', () => {
    it('should return a valid MAC address', () => {
      const result = Internet.mac();
      expect(result).toMatch(/^[0-9A-F]{2}(:[0-9A-F]{2}){5}$/);
    });

    it('should have 6 octets', () => {
      const result = Internet.mac();
      const octets = result.split(':');
      expect(octets).toHaveLength(6);
    });
  });

  describe('port', () => {
    it('should return a valid port number', () => {
      const result = Internet.port();
      expect(result).toBeGreaterThanOrEqual(1024);
      expect(result).toBeLessThanOrEqual(65535);
    });
  });

  describe('userAgent', () => {
    it('should return a valid user agent string', () => {
      const result = Internet.userAgent();
      expect(result).toContain('Mozilla');
    });
  });

  describe('httpMethod', () => {
    it('should return a valid HTTP method', () => {
      const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];
      const result = Internet.httpMethod();
      expect(validMethods).toContain(result);
    });
  });

  describe('httpStatusCode', () => {
    it('should return a valid HTTP status code', () => {
      const validCodes = [200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 500, 502, 503];
      const result = Internet.httpStatusCode();
      expect(validCodes).toContain(result);
    });
  });
});

