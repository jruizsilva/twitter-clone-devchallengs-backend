import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'

const ACCESS_TOKEN_SECRET = <string>process.env.ACCESS_TOKEN_SECRET

const generateToken = async (email: string) => {
  const jwt = sign({ email }, ACCESS_TOKEN_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}
const verifyToken = (token: string) => {
  const isValidToken = verify(token, ACCESS_TOKEN_SECRET)
  return isValidToken
}

export { generateToken, verifyToken }
