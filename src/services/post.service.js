const { auth } = require('../utils');
const { User, Category, BlogPost, PostCategory } = require('../models');
const user = require('./user.service');

const getAll = () => BlogPost.findAll({
  attributes: { exclude: ['user_id'] },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getById = (postId) => BlogPost.findByPk(
  postId,
  {
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);

const getByToken = async (token) => {
  const decode = auth.decodeToken(token);
  const { email } = decode.data;
  const userId = await user.getByEmail(email);

  return userId.dataValues.id;
};

const create = ({ title, content, userId }) =>
  BlogPost.create({ title, content, userId });

const createAssociation = (postId, categories) => {
  const newArray = [];

  categories.forEach((categoryId) => {
    const newObject = {
      postId,
      categoryId,
    };

    newArray.push(newObject);
  });

  return PostCategory.bulkCreate(newArray);
};

module.exports = {
  getAll,
  getById,
  getByToken,
  create,
  createAssociation,
};
