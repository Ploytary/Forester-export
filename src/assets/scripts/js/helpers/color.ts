export class Color {
  public static hslToRgb(hsl: string) {
    // eslint-disable-next-line prefer-const
    let [hue, saturation, lightness] = hsl
      .trim()
      .replace('hsl(', '')
      .replace(')', '')
      .split(' ')
      .map((value) => parseInt(value));
    saturation /= 100;
    lightness /= 100;
    const k = (n: number) => (n + hue / 30) % 12;
    const a = saturation * Math.min(lightness, 1 - lightness);
    const f = (n: number) => lightness - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)].map((value) => Math.round(value));
  }
  public static getRgbMixHex(rgbA: string | number[], rgbB: string | number[], amountToMix = 0.5) {
    const decimalValuesA = this.parseArgument(rgbA);
    const decimalValuesB = this.parseArgument(rgbB);

    const resultChannels = new Array(3)
      .fill(null)
      .map((value, index) => this.colorChannelMixer(decimalValuesA[index], decimalValuesB[index], amountToMix));
    return this.rgbChannelsToHex(resultChannels);
  }

  public static rgbChannelsToHex(channels: number[]): string {
    return '#' + channels.map((channel) => channel.toString(16)).join('');
  }

  private static parseHexString(color: string): number[] {
    const hexChannels: string[] = [];
    color
      .replace('#', '')
      .split('')
      .reduce((prev, next, index) => {
        if (index % 2 === 0) {
          return next;
        } else {
          hexChannels.push(prev + next);
          return '';
        }
      }, '');
    return hexChannels.map((hex) => parseInt(hex, 16));
  }

  private static parseFuncString(color: string): number[] {
    return color
      .split(' ')
      .join('')
      .replace('rgb(', '')
      .replace(')', '')
      .split(',')
      .map((value) => Number(value));
  }

  private static parseArgument(color: string | number[]): number[] {
    const result: number[] = [];

    if (Array.isArray(color)) {
      result.push(...color);
    }

    if (typeof color === 'string') {
      if (color.includes('rgb')) {
        result.push(...this.parseFuncString(color));
      } else {
        result.push(...this.parseHexString(color));
      }

      if (!result.length || result.some((item) => isNaN(item))) {
        throw Error('wrong color agrument. Format "#000000" or rgb(0, 0, 0)');
      }
    }
    return result;
  }

  private static colorChannelMixer(colorChannelA: number, colorChannelB: number, amountToMix: number) {
    const channelA = colorChannelA * amountToMix;
    const channelB = colorChannelB * (1 - amountToMix);
    return Math.floor(channelA + channelB);
  }
}
