const { userSchema } = require('../schemas');
const { user } = require('../services');
const { createToken } = require('../utils/auth');

const { getAll, getById, getByEmail, create } = user;
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

const findAll = async (_req, res) => {
  const data = await getAll();
  return res.status(200).json(data);
};

const findOne = async (req, res) => {
  const { id } = req.params;

  const userId = Number(id);
  const data = await getById(userId);

  if (!data) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(data);
};

module.exports = {
  signup,
  login,
  findAll,
  findOne,
};