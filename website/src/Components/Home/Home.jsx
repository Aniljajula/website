// Home.jsx
import React from 'react';
import './Home.css';
import backgroundVideo from '../Assets/3126361-uhd_3840_2160_25fps.mp4';

const Home = () => {
    return (
        <div className="home-container">
            <video autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>
    );
};

export default Home;
