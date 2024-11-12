import React from 'react';
import './VTS.css';
import VTSimage from '../Assets/VTS.jpg'; // Replace with the actual path to your image

const Street = () => {
    return (
        <div className="VTS-description">
            <img src={VTSimage} alt="Street" className="VTS-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default Street;
