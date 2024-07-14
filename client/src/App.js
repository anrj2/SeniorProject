// src/App.js
import React,  { useState }from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import StoreLocations from './components/StoreLocations';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnPolicy from './components/ReturnPolicy';
import './App.css';
import logo from './images/logo.jpeg';
import facebookIcon from './images/facebook-icon.png';
import instagramIcon from './images/instagram-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import tiktokIcon from './images/tiktok-icon.png';

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const navigate = useNavigate();

  const checkout = () => {
    navigate('/checkout');
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/"><img src='./images/logo.jpeg' alt="Mr. Joe's Hot Sauce" /></Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/store-locations">Store Locations</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-icons">
            <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
            <Link to="/login"><i className="fa fa-user"></i></Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/store-locations" element={<StoreLocations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
        </Routes>
        <footer className="footer">
          <div className="footer-section newsletter">
            <h3>Hot Sauce Newsletter</h3>
            <form>
              <input type="email" placeholder="Email address..." />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/mrjoehotsauce"><img src='../images/facebook-icon.png' alt="Facebook" /></a>
            <a href="https://www.instagram.com/mrjoehotsauce/"><img src='../images/instagram-icon.png' alt="Instagram" /></a>
            <a href="#"><img src='../images/linkedin-icon.png' alt="LinkedIn" /></a>
            <a href="https://www.tiktok.com/@mrjoehotsauce"><img src='../images/tiktok-icon.png' alt="TikTok" /></a>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email us at <a href="mailto:mrjoehotsauce@gmail.com">mrjoehotsauce@gmail.com</a></p>
          </div>
          <div className="footer-bottom">
            <a href="/terms-of-service">Terms of Use</a>
            <a href="/privacy-policy#">Privacy Policy</a>
            <a href="/return-policy">Refund Policy</a>
            <a href="#">FAQ</a>
          </div>
          <p>&copy; 2024 Mr Joe’s Hot Sauce. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
