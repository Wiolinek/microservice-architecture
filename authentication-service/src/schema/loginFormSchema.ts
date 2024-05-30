import Joi, { ObjectSchema } from 'joi';

const loginFormSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email address must be valid',
    'string.required': 'Email address required',
    'string.email': 'Email address is not valid',
  }),
  password: Joi.string().required().min(8).messages({
    'string.base': 'Password should be of type string',
    'string.min': 'Password must have at least 8 characters',
    'string.empty': 'Password is required',
  }),
});


export { loginFormSchema };
