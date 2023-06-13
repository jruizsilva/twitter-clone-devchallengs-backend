import { NextFunction, Request, Response } from 'express'
import * as authService from '../services/auth'
import createHttpError from 'http-errors'
import { registerValidation } from '../utils/joi'
import { User } from '../interfaces'

const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerValidation(req.body)
    console.log('************RESULT***************')

    res.send('test')

    //   const response = await authService.registerUser(value)
    //   res.send(response)
  } catch (err: any) {
    if (err.isJoi === true) {
      err.status = 422
    }
    next(err)
  }
}

const login = async (req: Request, res: Response) => {
  const response = await authService.loginUser(req.body)
  res.send(response)
}

export { register, login }
