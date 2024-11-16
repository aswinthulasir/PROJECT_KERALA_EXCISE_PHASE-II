const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const carouselRoutes = require('./routes/carouselRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/carousel', carouselRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
