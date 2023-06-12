import { Router } from 'express'
import * as authController from '../controllers/auth'

const router = Router()
router.post('/register', authController.register)
router.post('/login', authController.login)

export { router }
