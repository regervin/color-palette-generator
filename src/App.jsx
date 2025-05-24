import React, { useState } from 'react';
import ColorPalette from './components/ColorPalette';
import { generatePalettes, isValidColor } from './utils/colorUtils';

function App() {
  const [baseColor, setBaseColor] = useState('#FF5733');
  const [colorInput, setColorInput] = useState('#FF5733');
  const [palettes, setPalettes] = useState(generatePalettes('#FF5733'));
  const [error, setError] = useState('');

  const handleColorPickerChange = (e) => {
    const color = e.target.value;
    setBaseColor(color);
    setColorInput(color);
    setPalettes(generatePalettes(color));
    setError('');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setColorInput(value);
    
    if (isValidColor(value)) {
      setBaseColor(value);
      setPalettes(generatePalettes(value));
      setError('');
    } else {
      setError('Please enter a valid hex (#RRGGBB) or RGB color');
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Color Palette Generator</h1>
        
        <div className="mb-8 flex items-end gap-4">
          <div>
            <label className="block mb-2">Choose your brand color:</label>
            <input
              type="color"
              value={baseColor}
              onChange={handleColorPickerChange}
              className="w-20 h-20 rounded cursor-pointer"
            />
          </div>
          <div className="flex-1 max-w-xs">
            <label className="block mb-2">Or enter hex/RGB value:</label>
            <input
              type="text"
              value={colorInput}
              onChange={handleInputChange}
              placeholder="#RRGGBB or rgb(r,g,b)"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </div>

        {palettes && (
          <div className="space-y-8">
            <ColorPalette title="Complementary Colors" colors={palettes.complementary} />
            <ColorPalette title="Analogous Colors" colors={palettes.analogous} />
            <ColorPalette title="Neutral Variations" colors={palettes.neutrals} />
            <ColorPalette title="Accent Colors" colors={palettes.accents} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
