import React from 'react';
import './FMS.css';
import FMSimage from '../Assets/FMS.jpg'; // Replace with the actual path to your image

const FMS = () => {
    return (
        <div className="BMS-description">
            <img src={FMSimage} alt="Street" className="FMS-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default FMS;
