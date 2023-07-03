import { IPost } from './../../models/PostModel'
import { postDal } from './postDal'

const getPosts = () => postDal.getPosts()
const getPostById = (postId: string) => postDal.getPostById(postId)
const addPost = (post: IPost) => postDal.addPost(post)
const updatePost = (postId: string, data: IPost) =>
  postDal.updatePost(postId, data)
const deletePost = (postId: string) => postDal.deletePost(postId)

export const postService = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
