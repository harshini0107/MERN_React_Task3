import React, { useState } from 'react';
import './coloPickerStyles.css'; 

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="container text-center mt-5">
      <button className="btn btn-primary" onClick={() => setShowColors(!showColors)}>
        Pick a color
      </button>
      {showColors && (
        <div className="d-flex justify-content-center mt-3">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p className="mt-3">You have picked {selectedColor} color.</p>}
    </div>
  );
};

export default ColorPicker;
