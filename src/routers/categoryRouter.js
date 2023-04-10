const express = require('express');
const { category } = require('../controllers');
const { validateToken } = require('../middlewares');

const { signup } = category;
const router = express.Router();

router.post('/', validateToken, signup);

module.exports = router;