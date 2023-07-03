import { Schema, model, Document } from 'mongoose'

export interface PostInput {
  content: string
}

export interface PostDocument extends PostInput, Document {
  createdAt: Date
  updatedAt: Date
}
export interface PostResponse {
  id: string
  content: string
  createdAt: Date
  updatedAt: Date
}

const PostSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'content es un campo requerido']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const PostModel = model<PostDocument>('posts', PostSchema)
