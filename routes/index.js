const router = require('express').Router();
const authRouter = require('./auth');
const productRouter = require('./product');
const { authentication } = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');

router.use('/', authRouter);

router.use(authentication);

router.use('/products', productRouter);

router.use(errorHandler);

module.exports = router;
