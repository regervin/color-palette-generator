import React from 'react';

const ColorPalette = ({ title, colors }) => {
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-4 flex-wrap">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-24 h-24 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: color }}
            onClick={() => copyToClipboard(color)}
          >
            <div className="h-full flex items-end">
              <span className="w-full bg-white/80 px-2 py-1 text-sm rounded-b-lg text-center">
                {color}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
