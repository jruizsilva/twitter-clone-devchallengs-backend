import { Router } from 'express'
import userRouter from '../modules/user/userRouter'
import postRouter from '../modules/post/postRoutes'
import authRouter from '../modules/auth/authRouter'

const router = Router()

router.use(userRouter)
router.use(postRouter)
router.use(authRouter)

export default router
