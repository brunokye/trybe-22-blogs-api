const express = require('express');
const { post } = require('../controllers');
const { validateToken } = require('../middlewares');

const { findAll, findOne, publish } = post;
const router = express.Router();

router.get('/', validateToken, findAll);
router.get('/:id', validateToken, findOne);

router.post('/', validateToken, publish);

module.exports = router;