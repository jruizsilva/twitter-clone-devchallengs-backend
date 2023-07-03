import { postDto } from './postDto'
import { NextFunction, Request, Response } from 'express'
import { postService } from './postService'
import { PostInput } from '../../models/PostModel'

const checkId = (
  req: Request,
  res: Response,
  next: NextFunction,
  value: string
) => {
  console.log(value)

  next()
}
const getPosts = (req: Request, res: Response) => {
  res.send('getUsers')
}
const getPostById = (req: Request, res: Response) => {
  res.send('getUserById')
}
const addPost = async (req: Request, res: Response) => {
  const { content } = req.body as PostInput
  try {
    const postCreated = await postService.addPost({ content })
    res.status(201).json({
      status: 'success',
      data: postDto.onePost(postCreated)
    })
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message || 'Error al crear el post'
    })
  }
}
const updatePost = (req: Request, res: Response) => {
  res.send('updateUser')
}
const deletePost = (req: Request, res: Response) => {
  res.send('deleteUser')
}

export const postController = {
  checkId,
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
