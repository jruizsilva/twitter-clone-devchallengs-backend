import { Router } from 'express'
import { authController } from './authController'

const authRouter = Router()

authRouter.post('/auth/login', authController.login)
authRouter.post('/auth/register', authController.register)

export default authRouter
