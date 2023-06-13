import { Router } from 'express'
import * as authController from '../controllers/auth.controller'
import { registerValidation } from '../utils/joi'

const router = Router()
router.post('/register', async (req, res, next) => {
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
})
router.post('/login', authController.login)

export { router }
