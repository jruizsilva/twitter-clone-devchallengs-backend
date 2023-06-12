import createHttpError from 'http-errors'
import { Auth, User } from '../interfaces'
import { UserModel } from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'
import { signAccessToken, signRefreshToken } from '../utils/jwt'

const registerUser = async (result: User) => {
  const doesExist = await UserModel.findOne({ email: result.email })
  if (doesExist) {
    throw createHttpError.Conflict(
      `${result.email} is already registered`
    )
  }
  const user = new UserModel(result)
  const savedUser = await user.save()
  const accessToken = await signAccessToken(user.id)
  const refreshToken = await signRefreshToken(user.id)

  return { accessToken, refreshToken }
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
