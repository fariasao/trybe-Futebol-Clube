import * as joi from 'joi';

const loginSchema = joi.object({
  email: joi.string().email().required().messages({
    'string.email':'Incorrect email or password', 
    'any.required': 'All fields must be filled',
    'string.empty': 'All fields must be filled',
  }),
  password: joi.string().min(6).required().messages({
    'string.min':'Incorrect email or password', 
    'any.required': 'All fields must be filled',
    'string.empty': 'All fields must be filled',
  }),
});

export default loginSchema;