import Joi from 'joi';

const taskValidation = Joi.object({
  heading: Joi.string().required(),
  completed: Joi.boolean(),
});

export default taskValidation;
