const { Pool } = require('pg');

// PostgreSQL Database Connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'KeralaExcise',
  password: 'aSWIN@2000',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = pool;
