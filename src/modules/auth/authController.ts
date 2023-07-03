import { Request, Response } from 'express'

const register = (req: Request, res: Response) => {
  res.send('register')
}

const login = (req: Request, res: Response) => {
  res.send('updateUser')
}

export const authController = {
  register,
  login
}
