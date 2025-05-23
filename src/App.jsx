import React from 'react';
import { useState } from 'react'
import { generatePalette } from './utils/colorUtils'
import ColorCard from './components/ColorCard'

export default function App() {
  const [baseColor, setBaseColor] = useState('#FF0000')
  const palette = generatePalette(baseColor)

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Color Palette Generator</h1>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Base Color
          </label>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="h-12 w-24 cursor-pointer"
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Base & Complementary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorCard color={palette.base} name="Base" />
              <ColorCard color={palette.complementary} name="Complementary" />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Analogous Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {palette.analogous.map((color, index) => (
                <ColorCard 
                  key={color} 
                  color={color} 
                  name={`Analogous ${index + 1}`} 
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Neutrals</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {palette.neutrals.map((color, index) => (
                <ColorCard 
                  key={color} 
                  color={color} 
                  name={`Neutral ${index + 1}`} 
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Accent Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {palette.accents.map((color, index) => (
                <ColorCard 
                  key={color} 
                  color={color} 
                  name={`Accent ${index + 1}`} 
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
