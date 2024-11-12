import React from 'react';
import './AMR.css';
import AMRimage from '../Assets/Autometic-meter-reading.jpg'; // Replace with the actual path to your image

const AMR = () => {
    return (
        <div className="BMS-description">
            <img src={AMRimage} alt="Street" className="AMR-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default AMR;
