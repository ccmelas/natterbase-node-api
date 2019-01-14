const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const CountriesController = require('../controllers/CountriesController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.post('/login', AuthController.login);
router.get('/countries', AuthMiddleware.middleware, CountriesController.index);
router.put('/countries', AuthMiddleware.middleware, CountriesController.add);
router.delete('/countries/:country', AuthMiddleware.middleware, CountriesController.delete);

module.exports = router;
