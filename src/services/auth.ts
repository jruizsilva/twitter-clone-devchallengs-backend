import { Auth, User } from '../interfaces'
import { UserModel } from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const registerUser = async (user: User) => {
  const existsUser = await UserModel.findOne({
    email: user.email
  })
  if (existsUser) return 'ALREADY_USER'
  user.password = await encrypt(user.password)
  const newUser = await UserModel.create(user)
  return newUser
}

const loginUser = async (authUser: Auth) => {
  const user = await UserModel.findOne({
    email: authUser.email
  })
  if (!user) return 'USER_NOT_FOUND'

  const passwordEncrypted = user.password
  const isCorrectPassword = await verified(
    authUser.password,
    passwordEncrypted
  )
  if (!isCorrectPassword) return 'PASSWORD_INCORRECT'
  const token = await generateToken(user.email)
  return { token }
}

export { registerUser, loginUser }
