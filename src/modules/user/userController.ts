import { NextFunction, Request, Response } from 'express'

const checkId = (
  req: Request,
  res: Response,
  next: NextFunction,
  value: string
) => {
  console.log(value)

  next()
}

const getUsers = (req: Request, res: Response) => {
  res.send('getUsers')
}

const getUserById = (req: Request, res: Response) => {
  res.send('getUserById')
}

const addUser = (req: Request, res: Response) => {
  res.send('addUser')
}

const updateUser = (req: Request, res: Response) => {
  res.send('updateUser')
}

const deleteUser = (req: Request, res: Response) => {
  res.send('deleteUser')
}

export const userController = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  checkId
}
