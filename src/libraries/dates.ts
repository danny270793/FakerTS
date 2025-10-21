import Numbers from './numbers';

export default class Dates {
  public static between(start: Date, end: Date): Date {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = Numbers.between(startTime, endTime);
    return new Date(randomTime);
  }

  public static past(years: number = 1): Date {
    const now = new Date();
    const past = new Date(now.getFullYear() - years, now.getMonth(), now.getDate());
    return Dates.between(past, now);
  }

  public static future(years: number = 1): Date {
    const now = new Date();
    const future = new Date(now.getFullYear() + years, now.getMonth(), now.getDate());
    return Dates.between(now, future);
  }

  public static recent(days: number = 1): Date {
    const now = new Date();
    const past = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return Dates.between(past, now);
  }

  public static soon(days: number = 1): Date {
    const now = new Date();
    const future = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    return Dates.between(now, future);
  }

  public static birthdate(minAge: number = 18, maxAge: number = 80): Date {
    const now = new Date();
    const maxDate = new Date(now.getFullYear() - minAge, now.getMonth(), now.getDate());
    const minDate = new Date(now.getFullYear() - maxAge, now.getMonth(), now.getDate());
    return Dates.between(minDate, maxDate);
  }

  public static month(): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[Numbers.between(0, 11)] as string;
  }

  public static weekday(): string {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return weekdays[Numbers.between(0, 6)] as string;
  }
}

