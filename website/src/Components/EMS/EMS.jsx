import React from 'react';
import './EMS.css';
import EMSimage from '../Assets/EMS.jpg'; // Replace with the actual path to your image

const EMS = () => {
    return (
        <div className="BMS-description">
            <img src={EMSimage} alt="Street" className="EMS-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default EMS;
