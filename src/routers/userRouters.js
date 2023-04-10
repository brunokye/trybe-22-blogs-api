const express = require('express');
const { user } = require('../controllers');
const { validateToken } = require('../middlewares');

const { signup, login, findAll } = user;
const router = express.Router();

router.get('/user', validateToken, findAll);
router.post('/user', signup);
router.post('/login', login);

module.exports = router;