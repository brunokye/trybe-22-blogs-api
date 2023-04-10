const { category } = require('../services');

const { create } = category;

const signup = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const test = await create(req.body);

  return res.status(201).json(test);
};

module.exports = {
  signup,
};