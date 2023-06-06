import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = <string>process.env.JWT_SECRET

const generateToken = async (email: string) => {
  const jwt = sign({ email }, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}
const verifyToken = (token: string) => {
  const isValidToken = verify(token, JWT_SECRET)
  return isValidToken
}

export { generateToken, verifyToken }
