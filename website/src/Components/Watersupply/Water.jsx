import React from 'react';
import './Water.css';
import Waterimage from '../Assets/water.jpeg'; // Replace with the actual path to your image

const Water = () => {
    return (
        <div className="Water-description">
            <img src={Waterimage} alt="Street" className="Water-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default Water;
