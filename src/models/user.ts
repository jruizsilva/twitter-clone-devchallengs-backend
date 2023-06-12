import { Schema, Types, model, Model } from 'mongoose'
import bcrypt from 'bcrypt'

import { User } from '../interfaces/user'

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: 'Default description'
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true
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
    console.log(this.id)
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}

const UserModel = model('users', UserSchema)

export { UserModel }
