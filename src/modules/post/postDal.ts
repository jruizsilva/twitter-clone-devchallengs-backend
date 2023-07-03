import { IPost, Post } from '../../models/PostModel'

const getPosts = () => Post.find()
const getPostById = (postId: string) => Post.findById(postId)
const addPost = (post: IPost) => Post.create(post)

const updatePost = (postId: string, data: IPost) =>
  Post.findByIdAndUpdate(postId, data, {
    new: true,
    runValidators: true
  }).lean()
const deletePost = (postId: string) => Post.findByIdAndDelete(postId)

export const postDal = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
