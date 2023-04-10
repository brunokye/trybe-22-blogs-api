const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (email) => {
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  verifyToken,
};