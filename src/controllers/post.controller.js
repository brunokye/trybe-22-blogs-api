const { post, category } = require('../services');

const { getAll, getById, create, createAssociation } = post;
const isBodyValid = (title, content, categoryIds) => title && content && categoryIds;

const findAll = async (_req, res) => {
  const data = await getAll();
  return res.status(200).json(data);
};

const publish = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  if (!isBodyValid(title, content, categoryIds)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const getAllCategories = await category.getAll();
  const getAllIds = getAllCategories.map(({ id }) => id);
  const verifyIds = categoryIds.every((id) => getAllIds.includes(id));

  if (!verifyIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const userId = await getById(authorization);
  const data = await create({ title, content, userId });
  const postId = data.dataValues.id; 
  
  await createAssociation(postId, categoryIds);
  return res.status(201).json(data);
};

module.exports = {
  findAll,
  publish,
};