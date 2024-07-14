// server/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mr_joe_hot_sauce',
  password: 'Betterdaysahead@24',
  port: 5432,
});

module.exports = pool;
 
