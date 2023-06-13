import jwt from 'jsonwebtoken'
import createHttpError from 'http-errors'
import { NextFunction } from 'express'
import { Payload, RequestExtended } from '../interfaces'
import { client } from '../config/init_regis'

const signAccessToken = (userId: string) => {
  return new Promise((resolve, reject) => {
    const payload = {}
    const secret = <string>process.env.ACCESS_TOKEN_SECRET
    const options = {
      expiresIn: '1h',
      audience: userId
    }
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err.message)
        return reject(createHttpError.InternalServerError())
      }
      return resolve(token)
    })
  })
}

const verifyAccessToken = (
  req: RequestExtended,
  _: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return next(createHttpError.Unauthorized())
  }
  const bearerToken = authHeader.split(' ')
  const secret = <string>process.env.ACCESS_TOKEN_SECRET
  const token = bearerToken[1]
  jwt.verify(token, secret, (err: any, payload) => {
    if (err) {
      const message =
        err.name === 'JsonWebTokenError'
          ? 'Unauthorized'
          : err.message

      return next(createHttpError.Unauthorized(message))
    }
    req.payload = payload
    next()
  })
}

const signRefreshToken = (userId: string) => {
  return new Promise((resolve, reject) => {
    const payload = {}
    const secret = <string>process.env.REFRESH_TOKEN_SECRET
    const options = {
      expiresIn: '1y',
      audience: userId
    }
    jwt.sign(payload, secret, options, async (err, token) => {
      if (err) {
        console.log(err.message)
        return reject(createHttpError.InternalServerError())
      }
      try {
        // await client.set(userId, token, {
        //   EX: 365 * 24 * 60 * 60
        // })
        return resolve(token)
      } catch (err: any) {
        console.log(err.message)
        return reject(createHttpError.InternalServerError())
      }
    })
  })
}

const verifyRefreshToken = (refreshToken: string) => {
  return new Promise(async (resolve, reject) => {
    const secret = <string>process.env.REFRESH_TOKEN_SECRET
    try {
      const payload = jwt.verify(refreshToken, secret) as Payload
      const userId = payload.aud
      if (!userId) {
        return createHttpError.InternalServerError()
      }

      const redisRefreshToken = await client.get(userId)
      if (refreshToken === redisRefreshToken) {
        return resolve(userId)
      }
      return reject(createHttpError.Unauthorized())
    } catch (err) {
      console.log(err)
      return reject(createHttpError.InternalServerError())
    }
  })
}

export {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken
}
