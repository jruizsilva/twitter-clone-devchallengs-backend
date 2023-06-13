import { Request } from 'express'
import jwt from 'jsonwebtoken'
import { Document } from 'mongoose'

export interface Auth {
  email: string
  password: string
}

export type Payload = {
  aud: string
  iat: number
}
export interface RequestExtended extends Request {
  payload: string | jwt.JwtPayload | undefined
}

export interface User extends Auth {
  name: string
  description: string
  isValidPassword: (password: string) => boolean
}
