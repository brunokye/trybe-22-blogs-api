const { userSchema } = require('../schemas');
const { user } = require('../services');
const { createToken } = require('../utils/auth');

const { getByEmail, create } = user;
const isBodyValid = (email, password) => email && password;

const signup = async (req, res) => {
  const { displayName, email, password } = req.body;

  const { error } = userSchema.validate({ displayName, email, password });
  if (error) return res.status(400).json({ message: error.message });
  
  const verifyUser = await getByEmail(email);
  if (verifyUser) return res.status(409).json({ message: 'User already registered' });
  
  await create(req.body);
  const token = await createToken(email);

  return res.status(201).json({ token });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const credentials = await getByEmail(email);
  
    if (!credentials || credentials.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
  
    const token = await createToken(email);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal error', error: err.message });
  }
};

module.exports = {
  signup,
  login,
};