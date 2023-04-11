const express = require('express');
const { category } = require('../controllers');
const { validateToken } = require('../middlewares');

const { register, findAll } = category;
const router = express.Router();

router.get('/', validateToken, findAll);

router.post('/', validateToken, register);

module.exports = router;