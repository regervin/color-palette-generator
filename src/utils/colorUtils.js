import chroma from 'chroma-js';

// Fix: Export the functions properly
const isValidColor = (color) => {
  try {
    chroma(color);
    return true;
  } catch {
    return false;
  }
};

const generatePalettes = (baseColor) => {
  try {
    const base = chroma(baseColor);

    // Complementary colors
    const complementary = [
      baseColor,
      base.set('hsl.h', (base.get('hsl.h') + 180) % 360).hex()
    ];

    // Analogous colors
    const analogous = [
      base.set('hsl.h', (base.get('hsl.h') - 30) % 360).hex(),
      baseColor,
      base.set('hsl.h', (base.get('hsl.h') + 30) % 360).hex()
    ];

    // Neutrals
    const neutrals = [
      base.desaturate(3).hex(),
      base.desaturate(2).hex(),
      base.desaturate(1).hex(),
      baseColor,
      base.saturate(1).hex()
    ];

    // Accent colors
    const accents = [
      base.set('hsl.h', (base.get('hsl.h') + 120) % 360).hex(),
      base.set('hsl.h', (base.get('hsl.h') + 180) % 360).hex(),
      base.set('hsl.h', (base.get('hsl.h') + 240) % 360).hex()
    ];

    return {
      complementary,
      analogous,
      neutrals,
      accents
    };
  } catch (error) {
    return null;
  }
};

// Fix: Export both functions
export { isValidColor, generatePalettes };
