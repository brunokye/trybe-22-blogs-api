const { User } = require('../models');

const getAll = () => User.findAll({ attributes: { exclude: ['password'] } });
const getById = (userId) => User.findByPk(userId, { attributes: { exclude: ['password'] } });
const getByEmail = (email) => User.findOne({ where: { email } });

const create = async ({ displayName, email, password, image }) =>
  User.create({ displayName, email, password, image });

module.exports = {
  getAll,
  getById,
  getByEmail,
  create,
};
