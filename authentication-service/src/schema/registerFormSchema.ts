import Joi, { ObjectSchema } from 'joi';
import { EMAIL_REGEX, PHONE_NUMBER_REGEX/*, MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES*/ } from '@data/constants';

const registerFormSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().required().pattern(EMAIL_REGEX).messages({
    'string.base': 'Email address must be valid',
    'string.required': 'Email address required',
    'string.email': 'Email address is not valid',
  }),
  name: Joi.string()
    .required()
    .min(2)
    .messages({ 'string.min': 'Name must have at least 2 characters', 'string.empty': 'Name is required' }),
  phone: Joi.string().required().min(9).pattern(PHONE_NUMBER_REGEX).messages({
    'string.base': 'Phone number should be of type string',
    'string.min': 'Phone number must have at least 9 characters',
    'string.required': 'Phone number required',
    'string.pattern': 'Phone number required',
  }),
  password: Joi.string().required().min(8).label('Password').messages({
    'string.base': 'Password should be of type string',
    'string.min': 'Password must have at least 8 characters',
    'string.required': 'Password is required',
  }),
  repeatPassword: Joi.string().required().min(8).equal(Joi.ref('password')).label('Repeat password').messages({
    'string.base': 'Password should be of type string',
    'string.min': 'Password must have at least 8 characters',
    'string.required': 'Password is required',
    'any.only': '{{#label}} does not match',
  }),
  isDriver: Joi.boolean().when('isPassenger', { is: false, then: Joi.required() }).messages({
    'string.required': 'At least one option has to be checked',
  }),
  isPassenger: Joi.boolean().when('isDriver', { is: false, then: Joi.required() }).messages({
    'string.required': 'At least one option has to be checked',
  }),
  carMake: Joi.when('isDriver', { is: true, then: Joi.string().required().min(2) }).messages({
    'string.base': 'Car make should be of type string',
    'string.min': 'Car make must have at least 2 characters',
    'string.required': 'Car make is required',
  }),
  carImage: Joi.when('isDriver', { is: true, then: Joi.string().required().dataUri() }).messages({
    'string.required': 'Car image is required',
  }),
  // carImage: Joi.when('isDriver', {
  //   is: true,
  //   then: Joi.object({
  //     type: Joi.string().valid('image/png', 'image/jpeg'),
  //   }),
  // }).messages({
  //   'object.required': 'Car image is required',
  // }),
});

export { registerFormSchema };
