import React from 'react';
import './Food.css';
import FOODimage from '../Assets/food.jpg'; // Replace with the actual path to your image

const Food = () => {
    return (
        <div className="FOOD-description">
            <img src={FOODimage} alt="Street" className="FOOD-image" />
            <h1 className="heading">Street Information</h1>
            <p className="para">This is a description about the street project.</p>
        </div>
    );
};

export default Food;
