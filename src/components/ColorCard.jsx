import React from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline'

export default function ColorCard({ color, name }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="h-24 w-full" 
        style={{ backgroundColor: color }}
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">{name}</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-gray-700"
          >
            <ClipboardIcon className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">{color}</p>
      </div>
    </div>
  )
}
