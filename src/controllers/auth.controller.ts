import { Request, Response } from 'express'
import * as authService from '../services/auth'
import createHttpError from 'http-errors'
import { registerValidation } from '../libs/joi'
import { User } from '../interfaces'

const register = async (req: Request, res: Response) => {
  const { value, error } = registerValidation(req.body)
  if (error) createHttpError.BadRequest(error.message)
  const response = await authService.registerUser(value as User)
  res.send(response)
}

const login = async (req: Request, res: Response) => {
  const response = await authService.loginUser(req.body)
  res.send(response)
}

export { register, login }
