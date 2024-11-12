import React from 'react';
import './BMS.css';
import BMSimage from '../Assets/Bms.jpg'; // Replace with the actual path to your image

const BMS = () => {
    return (
        <div className="BMS-description">
            <img src={BMSimage} alt="Street" className="BMS-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default BMS;
