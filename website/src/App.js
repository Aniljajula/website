// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Import the Navbar
import Home from './Components/Home/Home';
import Network from './Components/Network/Network';
import FMS from './Components/FMS/FMS';
import BMS from './Components/BMS/BMS';
import PTS from './Components/PTS/PTS';
import AMR from './Components/AMR/AMR';
import Food from './Components/Food/Food';
import Warehouse from './Components/Warehouse/Warehouse';
import EMS from './Components/EMS/EMS';
import Watersupply from './Components/Watersupply/Water';
import VTS from './Components/VTS/VTS';
import Street from './Components/Street/Street';
import Contact from './Components/Contacts/Contact';
import Blog from './Components/Blog/Blog';
import Team from './Components/Team/Team';
import Overview from './Components/Overview/Overview';
import Explore from './Components/Explore/Explore';
import Product from './Components/Product/Product';

function App() {
    return (
        <Router>
            {/* Navbar is rendered on every page */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/network" element={<Network />} />
                <Route path="/Fuel monitoring" element={<FMS />} />
                <Route path="/Battery management" element={<BMS />} />
                <Route path="/Person tracking system" element={<PTS />} />
                <Route path="/Retrofit AMR solutions" element={<AMR />} />
                <Route path="/Food chain industries" element={<Food />} />
                <Route path="/Logistics and warehouse management solutions" element={<Warehouse />} />
                <Route path="/Energy monitoring system" element={<EMS />} />
                <Route path="/Water supply management solution" element={<Watersupply />} />
                <Route path="/Vehicle Tracking System" element={<VTS />} />
                <Route path="/Street light control" element={<Street />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Team" element={<Team />} />
                <Route path="/Overview" element={<Overview />} />
                <Route path="/Explore" element={<Explore />} />
                <Route path="/Product" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;
