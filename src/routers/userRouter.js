const express = require('express');
const { user } = require('../controllers');
const { validateToken } = require('../middlewares');

const { signup, findAll, findOne } = user;
const router = express.Router();

router.get('/', validateToken, findAll);
router.get('/:id', validateToken, findOne);

router.post('/', signup);

module.exports = router;