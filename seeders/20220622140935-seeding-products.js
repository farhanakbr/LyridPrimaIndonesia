'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Products', [
			{
				kode_produk: 'PRD001',
				nama_produk: 'Jaket Uniqlo Cream Wanita',
				qty: 10,
				image_produk: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445172/item/idgoods_32_445172.jpg?width=1008&impolicy=quality_75',
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				kode_produk: 'PRD002',
				nama_produk: 'Jaket Uniqlo Putih Wanita',
				qty: 15,
				image_produk: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/448126/item/idgoods_00_448126.jpg?width=1008&impolicy=quality_75',
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				kode_produk: 'PRD003',
				nama_produk: 'Jaket Uniqlo Hitam Wanita',
				qty: 15,
				image_produk: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445167/item/idgoods_69_445167.jpg?width=1008&impolicy=quality_75',
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				kode_produk: 'PRD004',
				nama_produk: 'Blus Rayon Kerah Wanita',
				qty: 11,
				image_produk: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/452682/item/idgoods_04_452682.jpg?width=1008&impolicy=quality_75',
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				kode_produk: 'PRD005',
				nama_produk: 'Kemeja Linen Blend Wanita',
				qty: 13,
				image_produk: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445455/item/idgoods_66_445455.jpg?width=1008&impolicy=quality_75',
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				kode_produk: 'PRD006',
				nama_produk: 'Celana Tapered Linen Katun Wanita',
				qty: 13,
				image_produk: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445276/item/idgoods_32_445276.jpg?width=1008&impolicy=quality_75',
        createdAt: new Date(),
        updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	},
};
