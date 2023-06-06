import { Car } from '../interfaces'
import { ItemModel } from '../models/items'

const insertItem = async (item: Car) => {
  const response = await ItemModel.create(item)
  return response
}
const getItems = async () => {
  const response = await ItemModel.find()
  return response
}
const getItem = async (id: string) => {
  const response = await ItemModel.findById(id)
  console.log(response)
  return response ? response : 'NOT_FOUND'
}
const updateItem = async (id: string, data: Car) => {
  const response = await ItemModel.findByIdAndUpdate(id, data, {
    new: true
  })
  return response
}
const deleteItem = async (id: string) => {
  const response = await ItemModel.findByIdAndDelete(id)
  return response
}

export { insertItem, getItems, getItem, updateItem, deleteItem }
