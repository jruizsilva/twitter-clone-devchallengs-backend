import { Router } from 'express'
import { userController } from './userController'

const userRouter = Router()

userRouter.param('id', userController.checkId)

userRouter
  .route('/users')
  .get(userController.getUsers)
  .post(userController.addUser)

userRouter
  .route('/users/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

export default userRouter
