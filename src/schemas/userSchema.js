const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
}).messages({
  'any.empty': '"{#label}" is required',
  'any.min': '"{#label}" length must be at least {#limit} characters long',
  'any.email': '"{#label}" must be a valid email',
});