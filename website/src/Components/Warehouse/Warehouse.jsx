import React from 'react';
import './Warehouse.css';
import Warehouseimage from '../Assets/ware house.jpg'; // Replace with the actual path to your image

const Warehouse = () => {
    return (
        <div className="BMS-description">
            <img src={Warehouseimage} alt="Street" className="Warehouse-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default Warehouse;
