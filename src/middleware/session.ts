import { NextFunction, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { RequestWithJwtPayload } from '../interfaces/request'

const checkJwt = (
  req: RequestWithJwtPayload,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = <string>jwtByUser.split(' ').pop()
    const jwtPayload = verifyToken(jwt)
    if (!jwtPayload) {
      res.status(401)
      res.send('TOKEN_NOT_VALID')
    } else {
      req.jwtPayload = jwtPayload
      next()
    }
  } catch (error) {
    res.status(400)
    res.send('SESSION_NOT_VALID')
  }
}

export { checkJwt }
