'use strict';
const { Model } = require('sequelize');
const { encrypt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Email are required' },
					notEmpty: { msg: 'Email are required' },
					isEmail: { msg: 'Please enter a valid email address' },
				},
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'First Name are required' },
					notEmpty: { msg: 'First Name are required' },
				},
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Last Name are required' },
					notEmpty: { msg: 'Last Name are required' },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Password are required' },
					notEmpty: { msg: 'Password are required' },
					min: {
						args: 5,
						msg: 'Password must be at least 5 character',
					},
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
			hooks: {
				beforeCreate: (instance) => {
					instance.password = encrypt(instance.password);
				},
			},
		}
	);
	return User;
};
