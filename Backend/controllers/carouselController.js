const Carousel = require('../models/Carousel');
const path = require('path');
const fs = require('fs');

exports.getImages = async (req, res) => {
  try {
    const images = await Carousel.findAll();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching images', error: err });
  }
};

exports.uploadImage = async (req, res) => {
  const { name, description } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  if (!imagePath) {
    return res.status(400).json({ message: 'Image file is required' });
  }

  try {
    const image = await Carousel.create({ name, description, imagePath });
    res.json({ message: 'Image uploaded successfully', image });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading image', error: err });
  }
};

exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Carousel.findByPk(id);
    if (image) {
      const fullPath = path.join(__dirname, '../public', image.imagePath);
      fs.unlinkSync(fullPath); // Delete the file from the server
      await image.destroy();
      res.json({ message: 'Image deleted successfully' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting image', error: err });
  }
};
