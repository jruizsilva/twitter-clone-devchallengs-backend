import { Router } from 'express'
import * as authController from '../controllers/auth'

const router = Router()
/**
 ** http:localhost:3001/auth/register [POST]
 */
router.post('/register', authController.register)
/**
 ** http:localhost:3001/auth/login [POST]
 */
router.post('/login', authController.login)

export { router }
