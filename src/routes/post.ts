import { Router } from 'express'
import * as postController from '../controllers/post'

const router = Router()

router.get('/', postController.getPosts)
router.get('/:id', postController.getPost)
router.post('/', postController.insertPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

export { router }
