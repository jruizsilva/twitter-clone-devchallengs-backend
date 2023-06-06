import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export interface RequestWithJwtPayload extends Request {
  jwtPayload?: string | JwtPayload
}
