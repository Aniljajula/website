import React from 'react';
import './Street.css';
import streetImage from '../Assets/street light.jpeg'; // Replace with the actual path to your image

const Street = () => {
    return (
        <div className="street-description">
            <img src={streetImage} alt="Street" className="street-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default Street;
