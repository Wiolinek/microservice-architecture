import Joi, { ObjectSchema } from 'joi';
import { EMAIL_REGEX, PHONE_NUMBER_REGEX /*, MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES*/ } from '@data/constants';

const addRideFormSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().required().pattern(EMAIL_REGEX).messages({
    'string.base': 'Email address must be valid',
    'string.required': 'Email address is required',
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
  carMake: Joi.when('isDriver', { is: true, then: Joi.string().required().min(2) }).messages({
    'string.base': 'Car make should be of type string',
    'string.min': 'Car make must have at least 2 characters',
    'string.required': 'Car make is required',
  }),
  carImage: Joi.when('isDriver', { is: true, then: Joi.string().required().dataUri() }).messages({
    'string.required': 'Car image is required',
  }),
  start: Joi.string().required().messages({
    'string.required': 'Start point is required',
  }),
  startDate: Joi.date().iso().required().messages({
    'string.required': 'Start date is required',
  }),
  destination: Joi.string().required().messages({
    'string.required': 'Destination is required',
  }),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required().messages({
    'string.required': 'End date is required',
    'string.greater': 'End date must be later than start date',
  }),
  freeSeats: Joi.number().required().messages({
    'string.required': 'Number of free seats is required',
  }),
  totalSeats: Joi.number().required().greater(Joi.ref('startDate')).messages({
    'string.required': 'Number of total seats is required',
    'string.greater': 'Number of total seats must be greater than number of free seats',
  }),
  price: Joi.number().required().integer().greater(0).messages({
    'string.required': 'Price is required',
    'string.integer': 'Price must be integer',
    'string.greater': 'Price must be greater than 0',
  }),
});

export { addRideFormSchema };
