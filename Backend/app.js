const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const carouselRoutes = require('./routes/carouselRoutes');
const textRoutes = require('./routes/textRoutes');
const newsRoutes = require('./routes/newsRoutes');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/carousel', carouselRoutes);
app.use('/api/texts', textRoutes);
app.use("/api/news", newsRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
