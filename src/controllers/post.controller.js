const { post, category } = require('../services');

const { create } = post;
const { getById } = category;
const isBodyValid = (title, content, categoryIds) => title && content && categoryIds;

const signup = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  if (!isBodyValid(title, content, categoryIds)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const verifyFirst = await getById(categoryIds[0]);
  const verifySecond = await getById(categoryIds[1]);

  if (!verifyFirst || !verifySecond) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const data = await create(req.body);

  return res.status(201).json(data);
};

module.exports = {
  signup,
};