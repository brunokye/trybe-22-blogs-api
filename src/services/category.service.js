const { Category } = require('../models');

const getAll = () => Category.findAll();

const create = (name) => Category.create({ name });

module.exports = {
  getAll,
  create,
};
