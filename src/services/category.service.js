const { Category } = require('../models');

const getAll = async () => {
  const test = await Category.findAll();

  return test;
};

const create = (name) => Category.create({ name });

module.exports = {
  getAll,
  create,
};
