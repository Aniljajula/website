// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/WhatsApp_Image_2024-08-12_at_11.09.13_AM-removebg-preview.png';

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <img src={logo} alt="Company Logo" className="logo-image" />
            </div>
            <Link to="/" className="active">Home</Link>
            <Link to="/Overview">Overview</Link>
            <div className="dropdown">
                <a href="#">About</a>
                <div className="dropdown-content">
                    <Link to="/Team">Team</Link>
                    <Link to="/Blog">Blog</Link>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="dropdown-button">Solutions</a>
                <div className="dropdown-content">
                    <Link to="/Fuel monitoring">Fuel Monitoring System Solution</Link>
                    <Link to="/Battery management">Battery Management Systems</Link>
                    <Link to="/Person tracking system">
                        Asset Tracking/Person Tracking System
                        </Link>
                        <Link to="/Retrofit AMR solutions">
                        Retrofit AMR Solution
                        </Link>
                        <a href="#Prepaid meter solution">Prepaid Meter Solution</a>
                        <Link to="/Street light control">
                        Street Light Control
                        </Link>
                        <Link to="/Vehicle Tracking System"> 
                        Vehicle Tracking System
                        </Link>
                        <a href="#Weather Monitoring">Weather Monitoring</a>
                        <a href="#Aqua">AQUA</a>
                        <a href="#Water quality management solution">Water Quality Management Solution</a>
                        <Link to="/Energy monitoring system">
                        Energy Monitoring System
                        </Link>
                        <a href="#Parking management">Parking Management</a>
                        <a href="#Visitor management">Visitor Management</a>
                        <Link to="/Water supply management solution">
                        Water Supply Management Solution 
                        </Link>
                        <a href="#Data transfer unit">Data Transfer Unit</a>
                        <a href="#Remote gateway unit">Remote Gateway Unit</a>
                        <Link to="/Logistics and warehouse management solutions">
                        Logistics And Warehouse Management
                        </Link>
                        <Link to="/Food chain industries">
                        Food Chain Industry
                        </Link>
                        <a href="#Fire detection">Fire Detection</a>
                        <a href="#PMS for food grade industries">Power Monitoring Solution For Various Food Grade Industries</a>
                        <a href="#Solar energy generation and consumption monitoring">Solar Energy Generation And Consumption Monitoring</a>
                        <a href="#Management of lights, air conditioning, fire detection surveillance">Management Of Lights, Air Conditioning, Fire Detection, Surveillance</a>
                        <a href="#Women safety">Women Safety</a>
                    {/* Add other links as needed */}
                </div>
            </div>
            <div className="dropdown">
                    <a href="technologies.react" className="dropdown-button">Technologies</a>
                    <div className="dropdown-content">
                    <Link to="/network">
          
                        Network
          
                    </Link>
                        <a href="Wired">Wired</a>
                        <a href="Rf(Radio frequency)">RF(Radio Frequency)</a>
                        <a href="core">Core</a>
                        <a href="protocols System">Protocols system</a>

                    </div>
                </div>

            
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default Navbar;
