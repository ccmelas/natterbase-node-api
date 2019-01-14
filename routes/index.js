const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const CountriesController = require('../controllers/CountriesController');

router.post('/login', AuthController.login);
router.get('/countries', CountriesController.index);
router.put('/countries', CountriesController.add);
router.delete('/countries/:country', CountriesController.delete);

module.exports = router;
