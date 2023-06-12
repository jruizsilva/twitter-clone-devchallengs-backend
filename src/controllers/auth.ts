import { Request, Response } from 'express'
import * as authService from '../services/auth'
import { authSchema } from '../utils/validation-schema'
import createHttpError from 'http-errors'

const register = async (req: Request, res: Response) => {
  const { email, password, name, description } = req.body

  const result = await authSchema.validateAsync({
    email,
    password,
    name,
    description
  })

  if (!email || !password || !name || !description) {
    throw createHttpError.BadRequest()
  }

  const response = await authService.registerUser({
    email: result.email,
    password: result.password,
    name: result.name,
    description: result.description
  })
  res.send(response)
}

const login = async (req: Request, res: Response) => {
  const response = await authService.loginUser(req.body)
  res.send(response)
}

export { register, login }
