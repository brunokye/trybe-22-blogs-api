const express = require('express');
const { category } = require('../controllers');
const { validateToken } = require('../middlewares');

const { signup, findAll } = category;
const router = express.Router();

router.get('/', validateToken, findAll);

router.post('/', validateToken, signup);

module.exports = router;