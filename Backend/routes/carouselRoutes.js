const express = require('express');
const multer = require('multer');
const { getImages, uploadImage, deleteImage } = require('../controllers/carouselController');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.get('/images', getImages);
router.post('/upload', upload.single('image'), uploadImage);
router.delete('/images/:id', deleteImage);

module.exports = router;
