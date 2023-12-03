import Joi from 'joi';

const taskValidation = Joi.object({
  id: Joi.string().required(),
  type: Joi.string().valid(
    'Urgent and Important',
    'Not Urgent but Important',
    'Urgent but Not Important',
  ),
  heading: Joi.string().required(),
  status: Joi.string().valid('ToDo', 'InProgress', 'Done'),
});

export default taskValidation;
