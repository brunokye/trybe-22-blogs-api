const { User } = require('../models');

const getAll = () => User.findAll();
const getByEmail = (email) => User.findOne({ where: { email } });
const getById = (userId) => User.findByPk(userId);

const createUser = ({ email, password }) => User.create({ email, password });

module.exports = {
  getAll,
  getByEmail,
  getById,
  createUser,
};
