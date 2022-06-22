'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    kode_produk: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'Kode Produk are required' },
        notEmpty: { msg: 'Kode Produk are required' },
      },
    },
    nama_produk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Nama Produk are required' },
        notEmpty: { msg: 'Nama Produk are required' },
      },
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Quantity are required' },
        notEmpty: { msg: 'Quantity are required' },
      }
    },
    image_produk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Image Produk are required' },
        notEmpty: { msg: 'Image Produk are required' },
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};