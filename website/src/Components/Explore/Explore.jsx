import React from 'react';
import './Explore.css';

// Importing images for the cards
import cardImage1 from '../Assets/eplore card.jpg'; // Replace with the actual image path
import cardImage2 from '../Assets/eplore card.jpg'; // Replace with the actual image path

// Importing video for the Explore section
import video1 from '../Assets/explore112.webm'; // Replace with the actual video path

const Explore = () => {
    const videos = [video1]; // List of video sources
    const circularCards = [
        { 
            image: cardImage1, 
            title: 'About Vajra IoT: Innovative Solutions for a Smarter Future', 
            description: 'Founded in April 2009, Vajra IoT is driven by a passion for digital transformation and smart management solutions. We specialize in IoT devices and IT solutions that enable customers to manage energy usage, events, and alerts through mobile dashboards. With a modular design and installation time of less than 5 minutes, we aim to improve efficiency and sustainability.'


        },
        { 
            image: cardImage2, 
            title: 'Expertise & Certifications: Quality and Support You Can Trust', 
            description: 'Vajra IoT is ISO 9001:2015 and ISO 14001:2015 certified, with a team of engineers experienced in energy, telecom, healthcare, and more. Our high-performance products, including GSM/GPRS, GPS, and IoT solutions, are built for tough conditions and customer satisfaction. We also offer extensive technical support to system integrators and developers, ensuring smooth integration and operation.'

 
        },
    ];

    return (
        <div className="explore">
            {/* Video Section */}
            <div className="explore-gallery">
                {videos.map((videoSrc, index) => (
                    <div key={index} className="explore-card">
                        <video 
                            src={videoSrc} 
                            className="explore-video" 
                            loop 
                            autoPlay 
                            muted
                        />
                        {/* Overlay content */}
                        <div className="overlay-content">
                            <h1>Discover the Future of Connectivity</h1>
                            <p>Explore how IoT is transforming industries, creating smarter solutions, and driving innovation.</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Circular Cards Section */}
            <div className="circular-cards">
                {circularCards.map((card, index) => (
                    <div key={index} className="circular-card">
                        <div className="card-content">
                            <img src={card.image} alt={card.title} className="card-image" />
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
