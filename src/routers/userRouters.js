const express = require('express');
const { user } = require('../controllers');
const { validateToken } = require('../middlewares');

const { signup, login, findAll, findOne } = user;
const router = express.Router();

router.get('/user', validateToken, findAll);
router.get('/user/:id', validateToken, findOne);

router.post('/user', signup);
router.post('/login', login);

module.exports = router;