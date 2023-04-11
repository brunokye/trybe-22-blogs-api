const { auth } = require('../utils');
const { BlogPost, PostCategory } = require('../models');
const user = require('./user.service');

const getById = async (token) => {
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
  getById,
  create,
  createAssociation,
};
