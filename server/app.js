// server/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');
const stripe = require('stripe')('your_stripe_secret_key');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/views/products.html');
});

app.get('/store-locations', (req, res) => {
  res.sendFile(__dirname + '/views/store-locations.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

app.get('/add-product', (req, res) => {
  res.sendFile(__dirname + '/views/add-product.html');
});

app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.post('/api/products', async (req, res) => {
  const { name, description, price, image_url } = req.body;
  try {
    const newProduct = await pool.query(
      'INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, image_url]
    );
    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.post('/api/payment', async (req, res) => {
  const { amount, source, receipt_email } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email,
    });
    res.json(charge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
