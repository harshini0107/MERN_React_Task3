

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ColorPicker = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [displayColors, setDisplayColors] = useState(false);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setDisplayColors(false);
    };

    return (
        <div className="container mt-5">
            <div className="text-center">
                <button
                    className="btn btn-primary"
                    onClick={() => setDisplayColors(!displayColors)}
                >
                    Pick a color
                </button>
            </div>
            {displayColors && (
                <div className="row justify-content-center mt-3">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="color-square m-2"
                            style={{
                                backgroundColor: color,
                                width: '50px',
                                height: '50px',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleColorSelect(color)}
                        />
                    ))}
                </div>
            )}
            <div
                className="mt-3"
                style={{
                    backgroundColor: selectedColor,
                    width: '100%',
                    height: '600px',
                    display: selectedColor ? 'block' : 'none'
                }}
            />
        </div>
    );
};


const App = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    return <ColorPicker colors={colors} />;
};

export default App;



