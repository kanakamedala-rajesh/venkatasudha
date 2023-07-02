import {
  getContrast,
  getContrastHex,
  getContrastHexStr,
  getContrastHsl,
  getContrastHslStr,
  getContrastRgb,
  getContrastRgbStr,
  hexToHsl,
  hexToHslStr,
  hexToRgb,
  hexToRgbStr,
  hslToHexStr,
  hslToRgb,
  hslToRgbStr,
  parseColor,
  parseHex,
  parseHsl,
  parseRgb,
  removeHash,
  rgbToHex,
  rgbToHexStr,
  rgbToHsl,
  rgbToHslStr,
} from '../src/utils/ColorUtils';

const hex = '#F07D2B',
  r = 240,
  g = 125,
  b = 43,
  h = 25,
  s = 87,
  l = 55,
  rgb = `rgb(${r}, ${g}, ${b})`,
  hsl = `hsl(${h}, ${s}%, ${l}%)`,
  hexStr = 'F07D2B',
  rgbArray = [r, g, b],
  hslArray = [h, s, l],
  rgbStr = `${r}, ${g}, ${b}`,
  hslStr = `${h}, ${s}%, ${l}%`,
  rgbObj = { r: r, g: b, b: b },
  hslObj = { h: h, s: s, l: l },
  hexObj = { r: 'f0', g: '7d', b: '2b' };

describe('removeHash', () => {
  it('should expose a function', () => {
    expect(removeHash).toBeDefined();
  });

  it('removeHash should return expected output', () => {
    const retValue = removeHash(hex);
    expect(hexStr).toEqual(retValue);
  });
});

describe('parseHex', () => {
  it('should expose a function', () => {
    expect(parseHex).toBeDefined();
  });

  it('parseHex should return expected output', () => {
    const retValue = parseHex(hex);
    expect(retValue).toEqual(rgbArray);
  });
});

describe('parseRgb', () => {
  it('should expose a function', () => {
    expect(parseRgb).toBeDefined();
  });

  it('parseRgb should return expected output', () => {
    const retValue = parseRgb(rgb);
    expect(retValue).toEqual(rgbArray);
  });
});

describe('parseHsl', () => {
  it('should expose a function', () => {
    expect(parseHsl).toBeDefined();
  });

  it('parseHsl should return expected output', () => {
    const retValue = parseHsl(hsl);
    expect(retValue).toEqual(hslArray);
  });
});

describe('parseColor', () => {
  it('should expose a function', () => {
    expect(parseColor).toBeDefined();
  });

  it('hex value parseColor should return expected output', () => {
    const retValue = parseColor(hex);
    expect(retValue).toEqual(rgbArray);
  });

  it('rgb value parseColor should return expected output', () => {
    const retValue = parseColor(rgb);
    expect(retValue).toEqual(rgbArray);
  });

  it('hsl value parseColor should return expected output', () => {
    const retValue = parseColor(hsl);
    expect(retValue).toEqual(hslArray);
  });
});

describe('rgbToHex', () => {
  it('should expose a function', () => {
    expect(rgbToHex).toBeDefined();
  });

  it('rgbToHex should return expected output', () => {
    const retValue = rgbToHex(r, g, b);
    expect(retValue).toEqual(hex);
  });
});

describe('rgbToHsl', () => {
  it('should expose a function', () => {
    expect(rgbToHsl).toBeDefined();
  });

  it('rgbToHsl should return expected output', () => {
    const retValue = rgbToHsl(r, g, b);
    expect(retValue).toEqual(hslArray);
  });
});

describe('hslToRgb', () => {
  it('should expose a function', () => {
    expect(hslToRgb).toBeDefined();
  });

  it.skip('hslToRgb should return expected output', () => {
    const retValue = hslToRgb(h, s, l);
    expect(retValue).toEqual(rgbArray);
  });
});

describe('hexToRgb', () => {
  it('should expose a function', () => {
    expect(hexToRgb).toBeDefined();
  });

  it('hexToRgb should return expected output', () => {
    const retValue = hexToRgb(hex);
    expect(retValue).toEqual(rgbArray);
  });
});

describe('hexToHsl', () => {
  it('should expose a function', () => {
    expect(hexToHsl).toBeDefined();
  });

  it('hexToHsl should return expected output', () => {
    const retValue = hexToHsl(hex);
    expect(retValue).toEqual(hslArray);
  });
});

describe('rgbToHexStr', () => {
  it('should expose a function', () => {
    expect(rgbToHexStr).toBeDefined();
  });

  it('rgbToHexStr should return expected output', () => {
    const retValue = rgbToHexStr(r, g, b);
    expect(retValue).toEqual(hex);
  });
});

describe('rgbToHslStr', () => {
  it('should expose a function', () => {
    expect(rgbToHslStr).toBeDefined();
  });

  it.skip('rgbToHslStr should return expected output', () => {
    const retValue = rgbToHslStr(r, g, b);
    expect(retValue).toEqual(hsl);
  });
});

describe('hslToRgbStr', () => {
  it('should expose a function', () => {
    expect(hslToRgbStr).toBeDefined();
  });

  it.skip('hslToRgbStr should return expected output', () => {
    const retValue = hslToRgbStr(h, s, l);
    expect(retValue).toEqual(rgb);
  });
});

describe('hslToHexStr', () => {
  it('should expose a function', () => {
    expect(hslToHexStr).toBeDefined();
  });

  it.skip('hslToHexStr should return expected output', () => {
    const retValue = hslToHexStr(h, s, l);
    expect(retValue).toEqual(hex);
  });
});

describe('hexToRgbStr', () => {
  it('should expose a function', () => {
    expect(hexToRgbStr).toBeDefined();
  });

  it('hexToRgbStr should return expected output', () => {
    const retValue = hexToRgbStr(hex);
    expect(retValue).toEqual(rgb);
  });
});

describe('hexToHslStr', () => {
  it('should expose a function', () => {
    expect(hexToHslStr).toBeDefined();
  });

  it.skip('hexToHslStr should return expected output', () => {
    const retValue = hexToHslStr(hex);
    expect(retValue).toEqual(hsl);
  });
});

describe('getContrast', () => {
  it('should expose a function', () => {
    expect(getContrast).toBeDefined();
  });

  it('getContrast should return expected output', () => {
    const retValue = getContrast(hex);
    expect(retValue).toEqual('black');
  });
});

describe('getContrastHex', () => {
  it('should expose a function', () => {
    expect(getContrastHex).toBeDefined();
  });

  it('getContrastHex should return expected output', () => {
    const retValue = getContrastHex(hex);
    expect(retValue).toEqual('#000000');
  });
});

describe('getContrastHsl', () => {
  it('should expose a function', () => {
    expect(getContrastHsl).toBeDefined();
  });

  it('getContrastHsl should return expected output', () => {
    const retValue = getContrastHsl(hex);
    expect(retValue).toEqual('hsl(0, 0%, 0%)');
  });
});

describe('getContrastRgb', () => {
  it('should expose a function', () => {
    expect(getContrastRgb).toBeDefined();
  });

  it('getContrastRgb should return expected output', () => {
    const retValue = getContrastRgb(hex);
    expect(retValue).toEqual('rgb(0, 0, 0)');
  });
});

describe('getContrastHslStr', () => {
  it('should expose a function', () => {
    expect(getContrastHslStr).toBeDefined();
  });

  it('getContrastHslStr should return expected output', () => {
    const retValue = getContrastHslStr(hex);
    expect(retValue).toEqual('hsl(0, 0%, 0%)');
  });
});

describe('getContrastRgbStr', () => {
  it('should expose a function', () => {
    expect(getContrastRgbStr).toBeDefined();
  });

  it('getContrastRgbStr should return expected output', () => {
    const retValue = getContrastRgbStr(hex);
    expect(retValue).toEqual('rgb(0, 0, 0)');
  });
});

describe('getContrastHexStr', () => {
  it('should expose a function', () => {
    expect(getContrastHexStr).toBeDefined();
  });

  it('getContrastHexStr should return expected output', () => {
    const retValue = getContrastHexStr(hex);
    expect(retValue).toEqual('#000000');
  });
});
