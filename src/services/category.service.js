const { Category } = require('../models');

const getAll = () => Category.findAll();
const getById = (categoryId) => Category.findByPk(categoryId);

const create = (name) => Category.create({ name });

module.exports = {
  getAll,
  create,
  getById,
};
