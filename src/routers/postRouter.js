const express = require('express');
const { post } = require('../controllers');
const { validateToken } = require('../middlewares');

const { signup } = post;
const router = express.Router();

router.post('/', validateToken, signup);

module.exports = router;