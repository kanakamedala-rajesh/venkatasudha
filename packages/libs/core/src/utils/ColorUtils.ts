/**
 * It takes a hex coded color string, and returns color without hex prefix.
 * @param {string} hex - The hex string to parse.
 * @return {string} - The color without hex prefix.
 */
export const removeHash = (hex: string) => hex.replace('#', '');

/**
 * It takes a hex string, splits it into three parts, and converts each part into a number
 *
 * @param {string} hex - The hex string to parse.
 * @returns An array of three numbers.
 */
export const parseHex = (hex: string) => {
  const [r, g, b] = removeHash(hex).match(/.{1,2}/g) as string[];
  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
};

/**
 * It takes a string in the format of `rgb(r, g, b)` and returns an array of numbers
 * @param {string} rgb - string - The string to parse.
 * @returns An array of three numbers.
 */
export const parseRgb = (rgb: string) => {
  const [r, g, b] = rgb.match(/\d+/g) as string[];
  return [parseInt(r, 10), parseInt(g, 10), parseInt(b, 10)];
};

/**
 * It takes a string like `hsl(0, 0%, 0%)` and returns an array of numbers like `[0, 0, 0]`
 * @param {string} hsl - string - The HSL string to parse.
 * @returns An array of 3 numbers.
 */
export const parseHsl = (hsl: string) => {
  const [h, s, l] = hsl.match(/\d+/g) as string[];
  return [parseInt(h, 10), parseInt(s, 10), parseInt(l, 10)];
};

/**
 * It takes a string and returns an array of three numbers
 * @param {string} color - The color string to parse.
 * @returns An array of three numbers.
 */
export const parseColor = (color: string) => {
  if (color.startsWith('#')) {
    return parseHex(removeHash(color));
  } else if (color.startsWith('rgb')) {
    return parseRgb(color);
  } else if (color.startsWith('hsl')) {
    return parseHsl(color);
  }
  return [0, 0, 0];
};

/**
 * It takes three numbers, converts them to hexadecimal, and returns a string
 * @param {number} r - The red value of the color (0-255)
 * @param {number} g - number - The green value of the color.
 * @param {number} b - number - The blue value of the color.
 * @returns A function that takes in 3 numbers and returns a string.
 */
export const rgbToHex = (r: number, g: number, b: number) => {
  const hex = (x: number) => {
    const hex = x.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${hex(r)}${hex(g)}${hex(b)}`.toUpperCase();
};

/**
 * It takes three numbers, each representing a color channel, and returns an array of three numbers,
 * each representing a color channel
 * @param {number} r - red value
 * @param {number} g - number, b: number
 * @param {number} b - number - blue value
 * @returns An array of three numbers.
 */
export const rgbToHsl = (r: number, g: number, b: number) => {
  (r /= 255), (g /= 255), (b /= 255);
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    Math.ceil(60 * h < 0 ? 60 * h + 360 : 60 * h),
    Math.ceil(
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
    ),
    Math.floor((100 * (2 * l - s)) / 2),
  ];
};

/**
 * "Convert a hue, saturation, and lightness value to a red, green, and blue value."
 *
 * The function takes three parameters:
 *
 * h: A number between 0 and 1 representing the hue.
 * s: A number between 0 and 1 representing the saturation.
 * l: A number between 0 and 1 representing the lightness.
 * The function returns an array of three numbers between 0 and 255 representing the red, green, and
 * blue values
 * @param {number} h - 0-360
 * @param {number} s - saturation
 * @param {number} l - lightness
 * @returns An array of three numbers, each of which is between 0 and 255.
 */
export const hslToRgb = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [
    Math.floor(255 * f(0)),
    Math.floor(255 * f(8)),
    Math.floor(255 * f(4)),
  ];
};

/**
 * It takes a hex string, removes the hash, parses the hex string into an array of numbers, and returns
 * an array of numbers
 * @param {string} hex - The hexadecimal color value to convert to RGB.
 * @returns An array of three numbers.
 */
export const hexToRgb = (hex: string) => {
  const [r, g, b] = parseHex(removeHash(hex));
  return [r, g, b];
};

/**
 * It converts a hex color to an HSL color
 * @param {string} hex - The hexadecimal color value.
 * @returns An array of three numbers.
 */
export const hexToHsl = (hex: string) => {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHsl(r, g, b);
};

/**
 * It takes three numbers, and returns a string
 * @param {number} r - number - The red value of the color.
 * @param {number} g - number, b: number
 * @param {number} b - number - The blue value of the color.
 * @returns A string
 */
export const rgbToHexStr = (r: number, g: number, b: number) => {
  return rgbToHex(r, g, b);
};

/**
 * It converts an RGB color to an HSL color and returns the HSL color as a string
 * @param {number} r - number, g: number, b: number
 * @param {number} g - number, b: number
 * @param {number} b - number - The blue value of the color.
 * @returns A string of the HSL value of the RGB value.
 */
export const rgbToHslStr = (r: number, g: number, b: number) => {
  const [h, s, l] = rgbToHsl(r, g, b);
  return `hsl(${h * 360}, ${s * 100}%, ${l * 100}%)`;
};

/**
 * It takes in a hue, saturation, and lightness value and returns a string that can be used as a CSS
 * color value
 * @param {number} h - hue (0-360)
 * @param {number} s - saturation
 * @param {number} l - lightness
 * @returns A string of rgb values
 */
export const hslToRgbStr = (h: number, s: number, l: number) => {
  const [r, g, b] = hslToRgb(h, s, l);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Convert HSL to RGB, then convert RGB to hex.
 * @param {number} h - hue (0-360)
 * @param {number} s - saturation
 * @param {number} l - lightness
 * @returns A string of the hex value of the color.
 */
export const hslToHexStr = (h: number, s: number, l: number) => {
  const [r, g, b] = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
};

/**
 * It takes a hex string, converts it to an array of RGB values, and then converts that array to a
 * string
 * @param {string} hex - The hexadecimal color value to convert.
 * @returns A string of the rgb values of the hex color.
 */
export const hexToRgbStr = (hex: string) => {
  const [r, g, b] = hexToRgb(hex);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * It converts a hex color string to an HSL string
 * @param {string} hex - The hexadecimal color value.
 * @returns A string of the HSL value of the hex color.
 */
export const hexToHslStr = (hex: string) => {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHslStr(r, g, b);
};

/**
 * It takes a color string, converts it to RGB, then calculates the YIQ value, and returns either black
 * or white depending on the YIQ value
 * @param {string} color - The color to get the contrast of.
 * @returns A function that takes a color and returns the contrast color.
 */
export const getContrast = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

/**
 * It takes a color in hex format and returns the hex value of the color that contrasts the most with
 * it
 * @param {string} color - The color to get the contrast of.
 * @returns A hex color string.
 */
export const getContrastHex = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};

/**
 * It takes a color string, converts it to RGB, calculates the YIQ value, and returns a contrasting
 * color based on the YIQ value
 * @param {string} color - The color to get the contrast of.
 * @returns A string of the color in HSL format.
 */
export const getContrastHsl = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)';
};

/**
 * It takes a color string, converts it to RGB, then calculates the YIQ value, and returns either black
 * or white depending on the YIQ value
 * @param {string} color - The color to get the contrast of.
 * @returns A string of rgb values.
 */
export const getContrastRgb = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
};

/**
 * It takes a color string, converts it to RGB, calculates the YIQ value, and returns a contrasting
 * color string
 * @param {string} color - The color to get the contrast of.
 * @returns A string of the color in HSL format.
 */
export const getContrastHslStr = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'hsl(0, 0%, 0%)' : 'hsl(0, 0%, 100%)';
};

/**
 * It takes a color string, converts it to RGB, then calculates the YIQ value, and returns a string of
 * either black or white depending on the YIQ value
 * @param {string} color - The color to get the contrast color for.
 * @returns A string of rgb values.
 */
export const getContrastRgbStr = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
};

/**
 * It takes a color string, converts it to RGB, calculates the YIQ value, and returns a hex string of
 * either black or white depending on the YIQ value
 * @param {string} color - The color to get the contrast of.
 * @returns A hex string of either black or white, depending on the contrast of the input color.
 */
export const getContrastHexStr = (color: string) => {
  const [r, g, b] = parseColor(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};
