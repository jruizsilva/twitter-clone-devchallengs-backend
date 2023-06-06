import { Router } from 'express'
import * as itemController from '../controllers/item'
import { logMiddleware } from '../middleware'

const router = Router()
/**
 ** http:localhost:3001/item [GET]
 */
router.get('/', logMiddleware, itemController.getItems)
router.get('/:id', itemController.getItem)
router.post('/', itemController.postItem)
router.put('/:id', itemController.updateItem)
router.delete('/:id', itemController.deleteItem)

export { router }
