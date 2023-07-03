import { Model, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser {
  email: string
  password: string
  name: string
  description?: string
}
export type IUserAuth = Pick<IUser, 'email' | 'password'>
export interface IUserDocument extends IUser, Document {
  // createdAt: Date
  // updatedAt: Date
  isValidPassword(password: string): Promise<boolean>
}
interface IUserModel extends Model<IUserDocument> {
  buildUser(user: IUser): IUserDocument
}
export interface UserResponse {
  user: IUser
  token: string
  refreshToken: string
}

const UserSchema: Schema<IUserDocument> = new Schema(
  {
    name: {
      type: String,
      required: [true, '"name" es un campo requerido']
    },
    description: {
      type: String,
      default: 'Default description'
    },
    email: {
      type: String,
      required: [true, '"email" es un campo requerido'],
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: [true, '"password" es un campo requerido']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword

    next()
  } catch (error: any) {
    next(error)
  }
})

UserSchema.methods.isValidPassword = async function (
  password: string
) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}

UserSchema.statics.buildUser = (user: IUser) => {
  return new User(user)
}

export const User = model<IUserDocument, IUserModel>(
  'users',
  UserSchema
)
export default User
