import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import * as postService from '../services/post'

const getPosts = async (req: Request, res: Response) => {
  try {
    const response = await postService.getPosts()
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GETS_ITEM')
  }
}
const getPost = async (req: Request, res: Response) => {
  try {
    const response = await postService.getPost(req.params.id)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}
const updatePost = async (req: Request, res: Response) => {
  try {
    const response = await postService.updatePost(
      req.params.id,
      req.body
    )
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}
const insertPost = async (req: Request, res: Response) => {
  try {
    const response = await postService.insertPost(req.body)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}
const deletePost = async (req: Request, res: Response) => {
  try {
    const response = await postService.deletePost(req.params.id)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { insertPost, getPosts, getPost, updatePost, deletePost }
