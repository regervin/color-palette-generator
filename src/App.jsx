import React, { useState } from 'react';
import ColorPalette from './components/ColorPalette';
import { generatePalettes } from './utils/colorUtils';

function App() {
  const [baseColor, setBaseColor] = useState('#FF5733');
  const [inputValue, setInputValue] = useState('#FF5733');
  const [palettes, setPalettes] = useState(generatePalettes('#FF5733'));

  const handleColorChange = (e) => {
    const color = e.target.value;
    setBaseColor(color);
    setInputValue(color);
    setPalettes(generatePalettes(color));
  };

  const handleTextInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    let color = value;
    if (!color.startsWith('#')) {
      color = '#' + color;
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
      setBaseColor(color);
      setPalettes(generatePalettes(color));
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Color Palette Generator</h1>
        
        <div className="mb-8 flex items-center gap-4">
          <div>
            <label className="block mb-2">Select Base Color:</label>
            <input
              type="color"
              value={baseColor}
              onChange={handleColorChange}
              className="w-20 h-20 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block mb-2">Or enter hex value:</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleTextInput}
              placeholder="#FF5733"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {palettes && (
          <div>
            <ColorPalette title="Complementary Colors" colors={palettes.complementary} />
            <ColorPalette title="Analogous Colors" colors={palettes.analogous} />
            <ColorPalette title="Neutrals" colors={palettes.neutrals} />
            <ColorPalette title="Accent Colors" colors={palettes.accents} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
