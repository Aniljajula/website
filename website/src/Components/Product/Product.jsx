import React from 'react';
import './Product.css';  // Importing the CSS file
import videoSource from '../Assets/explore.webm';  // Importing the video file

// Sample images for cards
import productImage1 from '../Assets/temp.mo.jpeg';
import productImage2 from '../Assets/temp.mo.jpeg';
import productImage3 from '../Assets/temp.mo.jpeg'; 

const ProductPage = () => {
  return (
    <div className="product-container">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <h1>Our Amazing Products</h1>
          <p>Discover the features and benefits of our products.</p>
        </div>
      </div>

      {/* Cards section with images */}
      <div className="card-section">
        <div className="card">
          <img src={productImage1} alt="Product 1" className="card-image" />
          <div className="card-content">
            <h2>Product 1</h2>
            <p>Explore the amazing features of Product 1.</p>
          </div>
        </div>
        <div className="card">
          <img src={productImage2} alt="Product 2" className="card-image" />
          <div className="card-content">
            <h2>Product 2</h2>
            <p>Discover how Product 2 can benefit you.</p>
          </div>
        </div>
        <div className="card">
          <img src={productImage3} alt="Product 3" className="card-image" />
          <div className="card-content">
            <h2>Product 3</h2>
            <p>Learn more about the advantages of Product 3.</p>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
