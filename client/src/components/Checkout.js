// src/components/Checkout.js
import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code *</label>
          <input type="text" id="zip" name="zip" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
