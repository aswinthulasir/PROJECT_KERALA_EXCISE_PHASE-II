const pool = require('../config/connection');

const getAllTexts = async () => {
  const result = await pool.query('SELECT * FROM scrolling_texts ORDER BY id DESC');
  return result.rows;
};

const addText = async (text) => {
  const result = await pool.query('INSERT INTO scrolling_texts (text) VALUES ($1) RETURNING *', [text]);
  return result.rows[0];
};

module.exports = { getAllTexts, addText };
