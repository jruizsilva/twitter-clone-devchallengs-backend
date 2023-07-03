import { PostInput, PostModel } from '../../models/PostModel'

const getPosts = () => {}
const getPostById = () => {}
const addPost = async (post: PostInput) => {
  const docPost = await PostModel.create(post)
  return docPost.toObject()
}

const updatePost = () => {}
const deletePost = () => {}

export const postDal = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
