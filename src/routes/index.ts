import { Router } from 'express'
import userRouter from '../modules/user/userRouter'
import postRouter from '../modules/post/postRoutes'

const router = Router()

router.use(userRouter)
router.use(postRouter)

export default router
