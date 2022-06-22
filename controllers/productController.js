const { Product, User } = require('../models');
const { getPagination, getPagingData } = require('../helpers/pagination');
const { Op, where } = require('sequelize');

const getProducts = async (req, res, next) => {
	try {
		const { page, limit } = req.query;
		const defaultLimit = limit || 3;
		const conditions = {};
		const { limit: paginationLimit, offset } = getPagination(page, defaultLimit);
		const { totalItems, products } = await getPagingData(
			await Product.findAndCountAll({
				where: conditions,
				limit: paginationLimit,
				offset,
			})
		);
		res.status(200).json({
			message: 'Products fetched',
			data: products,
			total: totalItems,
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const getProductById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await Product.findOne({
			where: { id: +id },
		});
		if (product) {
			res.status(200).json(product);
		} else {
			throw { name: 'NotFound', entityName: 'Product', id };
		}
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const createProduct = async (req, res, next) => {
	try {
		const { kode_produk, nama_produk, qty, image_produk } = req.body;
		const product = await Product.create({
			kode_produk,
			nama_produk,
			qty,
			image_produk,
		});
		res.status(201).json({
			message: 'Product created',
			id: product.id,
			kode_produk: product.kode_produk,
			nama_produk: product.nama_produk,
			qty: product.qty,
			image_produk: product.image_produk,
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const updateProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { kode_produk, nama_produk, qty, image_produk } = req.body;

		const getOneProduct = await Product.findByPk(id);
		if (!getOneProduct) {
			throw { name: 'NotFound', entityName: 'Product', id };
		}
		const updated = await Product.update(
			{
				kode_produk,
				nama_produk,
				qty,
				image_produk,
			},
			{ where: { id }, returning: true }
		);
		res.status(200).json({
			message: 'Product updated',
			id: updated[1][0].id,
			kode_produk: updated[1][0].kode_produk,
			nama_produk: updated[1][0].nama_produk,
			qty: updated[1][0].qty,
			image_produk: updated[1][0].image_produk,
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedProduct = await Product.destroy({
			where: { id },
		});

		if (deletedProduct) {
			res.status(200).json({
				message: `Product with id ${id} has been deleted`,
			});
		} else {
			throw { name: 'NotFound', entityName: 'Product', id };
		}
	} catch (err) {
		console.log(err);
		next(err);
	}
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
