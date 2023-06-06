import { Router } from 'express'
import * as orderController from '../controllers/order'
import { checkJwt } from '../middleware/session'

const router = Router()

router.get('/', checkJwt, orderController.getItems)

export { router }
