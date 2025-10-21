import Numbers from './numbers';
import Strings from './strings';

export default class Colors {
  public static hex(): string {
    return `#${Strings.hexify('HHHHHH')}`;
  }

  public static rgb(): string {
    const r = Numbers.between(0, 255);
    const g = Numbers.between(0, 255);
    const b = Numbers.between(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  public static rgba(): string {
    const r = Numbers.between(0, 255);
    const g = Numbers.between(0, 255);
    const b = Numbers.between(0, 255);
    const a = Math.round(Math.random() * 100) / 100;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  public static hsl(): string {
    const h = Numbers.between(0, 360);
    const s = Numbers.between(0, 100);
    const l = Numbers.between(0, 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  public static hsla(): string {
    const h = Numbers.between(0, 360);
    const s = Numbers.between(0, 100);
    const l = Numbers.between(0, 100);
    const a = Math.round(Math.random() * 100) / 100;
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  }

  public static colorName(): string {
    const colors = [
      'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink',
      'brown', 'gray', 'black', 'white', 'cyan', 'magenta', 'lime',
      'indigo', 'violet', 'turquoise', 'gold', 'silver', 'navy'
    ];
    return colors[Numbers.between(0, colors.length - 1)] as string;
  }
}

