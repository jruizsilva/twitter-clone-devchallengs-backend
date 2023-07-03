import { Request, Response } from 'express'

const register = (req: Request, res: Response) => {
  res.send('register')
}

const login = (req: Request, res: Response) => {
  res.send('login')
}

export const authController = {
  register,
  login
}
