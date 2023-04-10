const express = require('express');
const { user } = require('../controllers');

const { login } = user;
const router = express.Router();

router.post('/', login);

module.exports = router;
