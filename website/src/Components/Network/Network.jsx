import React from 'react';
import './Network.css';
import sampleImage from '../Assets/networkshort.jpeg'; // Import your image here

const Network = () => {
    return (
        <div className="network-container">
            <div className="image-description">
                <h2>Mobile Computing and GSM</h2>
                <p>This image illustrates mobile computing and GSM technology, showcasing how devices communicate within cellular networks to enable connectivity and data transfer across distances.</p>
            </div>
            <img src={sampleImage} alt="Sample" className="hover-image" />
        </div>
    );
};

export default Network;
