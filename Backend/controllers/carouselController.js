const { createImage, getImages, deleteImage } = require('../models/imageModel');
const path = require('path');


exports.uploadImage = async (req, res) => {
  const { name, description } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imagePath = file.path.replace(/\\/g, '/');
  const image = await createImage(name, description, imagePath);

  res.status(201).json({ message: 'Image uploaded successfully', image });
};



exports.getAllImages = async (req, res) => {
  const images = await getImages();
  res.json(images);
};

exports.deleteImageById = async (req, res) => {
  const { id } = req.params;
  await deleteImage(id);
  res.json({ message: 'Image deleted successfully' });
};
