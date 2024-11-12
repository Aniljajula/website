import React from 'react';
import './Overview.css';
import heroImage from '../Assets/soverview vid.webm'; // Path to your .webm video file
import heroImage1 from '../Assets/overview-HTfXfNBV9-transformed-transformed_(1)[1].jpeg';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/explore');
    };

    return (
        <div className="overview">
            {/* Hero Section with Video Background */}
            <div className="hero-section">
                <video autoPlay muted loop className="hero-video">
                    <source src={heroImage} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1>Innovative IoT for Tomorrow's World</h1>
                    <p>Redefining industries with end-to-end IoT solutions for smarter decisions.</p>
                    <button className="hero-button" onClick={handleExploreClick}>Explore More</button>
                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-card">
                    <img src={heroImage1} alt="Sample 1" />
                    <h2>Our Value Proposition</h2>
                    <p>IoT CoE<br></br>Consulting</p>
                </div>
                <div className="content-card">
                    <img src={heroImage1} alt="Sample 2" />
                    <h2>Benefits Derived to customers from our products & Solutions</h2>
                    <p>“One stop shop” for end to end solutions using disruptive technologies and methods.</p>
                </div>
                <div className="content-card">
                    <img src={heroImage1} alt="Sample 3" />
                    <h2>Key Activities</h2>
                    <p>In house Design & Development of hardware and software...</p>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <div className="gallery-card">
                    <img src={heroImage1} alt="Gallery 1" />
                    <h1>Certifications & Methodologies</h1>
                </div>
                <div className="gallery-card">
                    <img src={heroImage1} alt="Gallery 2" />
                    <h1>Mission</h1>
                    <p>To become a market leader in providing end to end IoT & IT based solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
