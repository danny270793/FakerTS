import Dates from './dates';

describe('Dates', () => {
  describe('between', () => {
    it('should return a date between start and end', () => {
      const start = new Date('2020-01-01');
      const end = new Date('2020-12-31');
      const result = Dates.between(start, end);
      expect(result.getTime()).toBeGreaterThanOrEqual(start.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(end.getTime());
    });
  });

  describe('past', () => {
    it('should return a date in the past', () => {
      const result = Dates.past(1);
      const now = new Date();
      expect(result.getTime()).toBeLessThanOrEqual(now.getTime());
    });

    it('should return a date within specified years', () => {
      const years = 5;
      const result = Dates.past(years);
      const now = new Date();
      const minDate = new Date(now.getFullYear() - years, now.getMonth(), now.getDate());
      expect(result.getTime()).toBeGreaterThanOrEqual(minDate.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(now.getTime());
    });
  });

  describe('future', () => {
    it('should return a date in the future', () => {
      const result = Dates.future(1);
      const now = new Date();
      expect(result.getTime()).toBeGreaterThanOrEqual(now.getTime());
    });

    it('should return a date within specified years', () => {
      const years = 5;
      const result = Dates.future(years);
      const now = new Date();
      const maxDate = new Date(now.getFullYear() + years, now.getMonth(), now.getDate());
      expect(result.getTime()).toBeGreaterThanOrEqual(now.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(maxDate.getTime());
    });
  });

  describe('recent', () => {
    it('should return a recent date', () => {
      const result = Dates.recent(7);
      const now = new Date();
      const past = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(result.getTime()).toBeGreaterThanOrEqual(past.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(now.getTime());
    });
  });

  describe('soon', () => {
    it('should return a date in the near future', () => {
      const result = Dates.soon(7);
      const now = new Date();
      const future = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      expect(result.getTime()).toBeGreaterThanOrEqual(now.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(future.getTime());
    });
  });

  describe('birthdate', () => {
    it('should return a valid birthdate', () => {
      const result = Dates.birthdate(18, 80);
      const now = new Date();
      const maxDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
      const minDate = new Date(now.getFullYear() - 80, now.getMonth(), now.getDate());
      expect(result.getTime()).toBeGreaterThanOrEqual(minDate.getTime());
      expect(result.getTime()).toBeLessThanOrEqual(maxDate.getTime());
    });
  });

  describe('month', () => {
    it('should return a valid month name', () => {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const result = Dates.month();
      expect(months).toContain(result);
    });
  });

  describe('weekday', () => {
    it('should return a valid weekday name', () => {
      const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const result = Dates.weekday();
      expect(weekdays).toContain(result);
    });
  });
});

