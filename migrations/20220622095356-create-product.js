'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_produk: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      nama_produk: {
        allowNull: false,
        type: Sequelize.STRING
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image_produk: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};