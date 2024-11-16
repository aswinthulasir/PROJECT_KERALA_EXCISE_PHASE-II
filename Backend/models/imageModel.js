const pool = require('../db');

const createImage = async (name, description, path) => {
  const query = 'INSERT INTO images (name, description, path) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, description, path];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getImages = async () => {
  const result = await pool.query('SELECT * FROM images ORDER BY id DESC');
  return result.rows;
};

const deleteImage = async (id) => {
  await pool.query('DELETE FROM images WHERE id = $1', [id]);
};

module.exports = { createImage, getImages, deleteImage };
