// client/src/components/Homepage.js
// src/components/Homepage.js
// src/components/Homepage.js
import React from 'react';
import './Homepage.css';
import heroImage from '../images/hero-image.jpg'; 


const Homepage = () => (
  <div className="homepage">
    <header className="hero">
      <img src={heroImage} alt="Mr. Joe's Hot Sauce" className="hero-image" />
      <div className="hero-text">
        <h1>Discover Authentic Flavor</h1>
        <p>
          Transform every meal with the bold, vibrant taste of Mr. Joe’s Caribbean hot sauce.
          Dive into a culinary adventure that promises to elevate your dishes with its unique blend of spices and heat.
          Experience the flavor revolution today!
        </p>
        <button className="buy-now">Buy Now</button>
      </div>
    </header>
    <section className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="review-list">
        <div className="review">Review 1</div>
        <div className="review">Review 2</div>
        <div className="review">Review 3</div>
      </div>
    </section>
  </div>
);

export default Homepage;
