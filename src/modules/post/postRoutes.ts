import { Router } from 'express'
import { postController } from './postController'

const postRouter = Router()

postRouter.param('id', postController.checkId)

postRouter
  .route('/posts')
  .get(postController.getPosts)
  .post(postController.addPost)

postRouter
  .route('/posts/:id')
  .get(postController.getPostById)
  .patch(postController.updatePost)
  .delete(postController.deletePost)

export default postRouter
