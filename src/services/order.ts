import { ItemModel } from '../models/items'

const getOrders = async () => {
  const response = await ItemModel.find()
  return response
}

export { getOrders }
