const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadImage, getAllImages, deleteImageById } = require('../controllers/carouselController');

// Multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
router.post('/uploads', upload.single('image'), uploadImage);
router.get('/images', getAllImages);
router.delete('/images/:id', deleteImageById);

module.exports = router;
