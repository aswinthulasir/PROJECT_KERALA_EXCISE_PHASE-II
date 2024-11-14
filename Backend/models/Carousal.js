const { DataTypes } = require('sequelize');
const { sequelize } = require('../postgredb');

const Carousel = sequelize.define('Carousel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Carousel;
