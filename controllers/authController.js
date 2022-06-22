const { User } = require('../models');
const { compare } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

const register = async (req, res, next) => {
	try {
		const { email, first_name, last_name, password } = req.body;

		const result = await User.create({ email, first_name, last_name, password });

		res.status(201).json({
			message: 'Register successful',
			email: result.email,
			first_name: result.first_name,
			last_name: result.last_name,
			user_id: result.id,
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });

		if (!user) {
			throw { name: 'Invalid' };
		}
		if (!compare(password, user.password)) {
			throw { name: 'Invalid' };
		}
		const payload = { id: user.id, email: user.email };
		const token = generateToken(payload);
		res.status(200).json({ message: 'Login succesful', access_token: token, user_id: user.id, email: user.email });
	} catch (err) {
    console.log(err)
		next(err);
	}
};

module.exports = { register, login };
