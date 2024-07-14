// src/components/Products.js
import React from 'react';
import './Products.css';

import bourbon from '../images/bourbon.webp';
import chili from '../images/chili.webp';
import logobeanie from '../images/logobeanie.webp';
import pepper from '../images/pepper.webp';
import pineapple from '../images/pineapple.webp';
import saucebeanie from '../images/saucebeanie.webp';

const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Bourbon', price: 13.00, image: bourbon },
    { id: 2, name: 'Red Chili', price: 13.00, image: chili },
    { id: 4, name: 'Ghost Pepper', price: 13.00, image: pepper },
    { id: 5, name: 'Pineapple', price: 13.00, image: pineapple },
    { id: 6, name: 'Sauce Beanie', price: 19.00, image: saucebeanie },
    { id: 3, name: 'Logo Beanie', price: 19.00, image: logobeanie },
  ];

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
