import Joi, { ValidationResult } from 'joi'
import { User } from '../interfaces'

export const registerValidation = (
  data: User
): ValidationResult<User> => {
  const userSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    password: Joi.string().min(6).required()
  })
  return userSchema.validate(data)
}

export const loginValidation = (
  data: User
): ValidationResult<User> => {
  const userSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required()
  })
  return userSchema.validate(data)
}
