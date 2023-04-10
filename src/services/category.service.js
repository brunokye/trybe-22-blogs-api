const { Category } = require('../models');

const getByName = (name) => Category.findOne({ where: { name } });

const create = async ({ name }) => Category.create({ name });

module.exports = {
  getByName,
  create,
};
