import React from 'react';
import './PTS.css';
import BMSimage from '../Assets/AIOT Tracking system.jpg'; // Replace with the actual path to your image

const PTS = () => {
    return (
        <div className="PTS-description">
            <img src={BMSimage} alt="Street" className="PTS-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default PTS;
