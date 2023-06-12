import { Request } from 'express'
import jwt from 'jsonwebtoken'

export interface Auth {
  email: string
  password: string
}
export interface RequestExtended extends Request {
  payload: string | jwt.JwtPayload | undefined
}
