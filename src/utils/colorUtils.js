import chroma from 'chroma-js'

export function generatePalette(baseColor) {
  const base = chroma(baseColor)

  // Complementary color
  const complementary = base.set('hsl.h', (base.get('hsl.h') + 180) % 360)

  // Analogous colors (30 degrees apart)
  const analogous1 = base.set('hsl.h', (base.get('hsl.h') + 30) % 360)
  const analogous2 = base.set('hsl.h', (base.get('hsl.h') - 30) % 360)

  // Neutrals
  const neutrals = [
    base.luminance(0.9),
    base.luminance(0.7),
    base.luminance(0.5),
    base.luminance(0.3),
    base.luminance(0.1)
  ]

  // Accent colors (60 and 120 degrees apart)
  const accent1 = base.set('hsl.h', (base.get('hsl.h') + 60) % 360).saturate(1)
  const accent2 = base.set('hsl.h', (base.get('hsl.h') + 120) % 360).saturate(1)

  return {
    base: base.hex(),
    complementary: complementary.hex(),
    analogous: [analogous1.hex(), analogous2.hex()],
    neutrals: neutrals.map(c => c.hex()),
    accents: [accent1.hex(), accent2.hex()]
  }
}
