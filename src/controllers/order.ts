import { Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { RequestWithJwtPayload } from '../interfaces'

const getItems = async (
  req: RequestWithJwtPayload,
  res: Response
) => {
  try {
    res.send({
      data: `la session esta activa`,
      jwtPayload: req.jwtPayload
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GETS_ITEM')
  }
}

export { getItems }
