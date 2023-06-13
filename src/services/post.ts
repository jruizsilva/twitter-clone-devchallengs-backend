import { Post } from '../interfaces'
import { PostModel } from '../models/Post'

const insertPost = async (post: Post) => {
  const response = await PostModel.create(post)
  return response
}
const getPosts = async () => {
  const response = await PostModel.find()
  return response
}
const getPost = async (id: string) => {
  const response = await PostModel.findById(id)
  return response ? response : 'NOT_FOUND'
}
const updatePost = async (id: string, data: Post) => {
  const response = await PostModel.findByIdAndUpdate(id, data, {
    new: true
  })
  return response
}
const deletePost = async (id: string) => {
  const response = await PostModel.findByIdAndDelete(id)
  return response
}

export { insertPost, getPosts, getPost, updatePost, deletePost }
