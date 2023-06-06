import { Request, Response } from 'express'
import * as authService from '../services/auth'

const register = async (req: Request, res: Response) => {
  const response = await authService.registerUser(req.body)
  res.send(response)
}

const login = async (req: Request, res: Response) => {
  const response = await authService.loginUser(req.body)
  res.send(response)
}

export { register, login }
