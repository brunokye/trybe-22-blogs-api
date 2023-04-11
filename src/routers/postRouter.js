const express = require('express');
const { post } = require('../controllers');
const { validateToken } = require('../middlewares');

const { findAll, publish } = post;
const router = express.Router();

router.get('/', validateToken, findAll);

router.post('/', validateToken, publish);

module.exports = router;