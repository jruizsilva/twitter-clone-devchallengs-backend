import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

export interface UserInput {
  email: string
  password: string
  name: string
  description?: string
  isValidPassword: (password: string) => boolean
}
export type AuthInput = Pick<UserInput, 'email' | 'password'>
export interface UserDocument extends UserInput, Document {
  createdAt: Date
  updatedAt: Date
}
export interface UserResponse {
  user: UserInput
  token: string
  refreshToken: string
}

const UserSchema = new Schema(
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

// UserSchema.pre('save', async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(this.password, salt)
//     this.password = hashedPassword

//     next()
//   } catch (error: any) {
//     next(error)
//   }
// })

UserSchema.methods.isValidPassword = async function (
  password: string
) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}

export const UserModel = model<UserDocument>('users', UserSchema)

export default UserModel
