import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import * as itemService from '../services/item'

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await itemService.getItems()
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GETS_ITEM')
  }
}
const getItem = async (req: Request, res: Response) => {
  try {
    const response = await itemService.getItem(req.params.id)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}
const updateItem = async (req: Request, res: Response) => {
  try {
    const response = await itemService.updateItem(
      req.params.id,
      req.body
    )
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}
const postItem = async (req: Request, res: Response) => {
  try {
    const response = await itemService.insertItem(req.body)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}
const deleteItem = async (req: Request, res: Response) => {
  try {
    const response = await itemService.deleteItem(req.params.id)
    res.send(response)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItems, getItem, updateItem, postItem, deleteItem }
