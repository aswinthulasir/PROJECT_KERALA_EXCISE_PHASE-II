const express = require('express');
const app = express();
const { connection } = require('./postgredb');
const carouselRoutes = require('./routes/carouselRoutes');
const path = require('path');
const Carousel = require('../models/Carousel');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Connect to PostgreSQL
connection();

// Use carousel routes
app.use('/Carousel', carouselRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
