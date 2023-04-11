const { BlogPost } = require('../models');

const create = ({ title, content, categoryIds }) => 
  BlogPost.create({ title, content, categoryIds });

module.exports = {
  create,
};
