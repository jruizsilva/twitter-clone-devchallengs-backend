import createHttpError from 'http-errors'
import { Auth, User } from '../interfaces'
import { UserModel } from '../models/User'
import { signAccessToken, signRefreshToken } from '../utils/jwt'

const registerUser = async (data: User) => {
  const doesExist = await UserModel.findOne({ email: data.email })
  if (doesExist) {
    throw createHttpError.Conflict(
      `${data.email} is already registered`
    )
  }
  const user = new UserModel(data)
  await user.save()
  const accessToken = await signAccessToken(user.id)
  const refreshToken = await signRefreshToken(user.id)

  return { accessToken, refreshToken }
}

const loginUser = async (authUser: Auth) => {
  return authUser
}

export { registerUser, loginUser }
