const { auth } = require('../utils');

const { verifyToken } = auth;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
  const verify = verifyToken(authorization);
  if (!verify) return res.status(401).json({ message: 'Expired or invalid token' });

  next();
};