import { postDto } from './postDto'
import { NextFunction, Request, Response } from 'express'
import { postService } from './postService'
import { IPost } from '../../models/PostModel'

const checkId = (
  req: Request,
  res: Response,
  next: NextFunction,
  value: string
) => {
  console.log(value)

  next()
}
const getPosts = async (req: Request, res: Response) => {
  try {
    const docPosts = await postService.getPosts()
    console.dir(docPosts)
    res.status(200).json({
      status: 'success',
      data: postDto.manyPosts(docPosts)
    })
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message || 'Error getPosts'
    })
  }
}
const getPostById = async (req: Request, res: Response) => {
  try {
    const docPost = await postService.getPostById(req.params.id)
    if (!docPost) {
      throw { status: 404, message: 'Post not found' }
    }
    res.status(200).json({
      status: 'success',
      data: docPost ? postDto.onePost(docPost) : null
    })
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message || 'Error getPostById'
    })
  }
}
const addPost = async (req: Request, res: Response) => {
  const { content } = req.body as IPost
  try {
    const docPost = await postService.addPost({ content })
    res.status(201).json({
      status: 'success',
      data: postDto.onePost(docPost)
    })
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message || 'Error al crear el post'
    })
  }
}
const updatePost = async (req: Request, res: Response) => {
  try {
    const { content } = req.body as IPost
    const docPost = await postService.updatePost(req.params.id, {
      content
    })
    console.log(docPost)
    res.status(200).json({
      status: 'success',
      data: docPost
    })
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message || 'Error updatePost'
    })
  }
}
const deletePost = async (req: Request, res: Response) => {
  try {
    await postService.deletePost(req.params.id)
    res.status(200).json({
      status: 'success',
      data: null
    })
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message || 'Error deletePost'
    })
  }
}

export const postController = {
  checkId,
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
