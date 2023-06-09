const { category } = require('../services');

const { getAll, create } = category;

const findAll = async (_req, res) => {
  const data = await getAll();
  return res.status(200).json(data);
};

const register = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const data = await create(name);

  return res.status(201).json(data);
};

module.exports = {
  findAll,
  register,
};