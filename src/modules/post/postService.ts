import { PostInput } from './../../models/PostModel'
import { postDal } from './postDal'

const getPosts = () => {}
const getPostById = () => {}
const addPost = (post: PostInput) => postDal.addPost(post)
const updatePost = () => {}
const deletePost = () => {}

export const postService = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
