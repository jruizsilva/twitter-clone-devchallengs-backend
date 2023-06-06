import { Schema, model } from 'mongoose'
import { Post } from '../interfaces'

const PostSchema = new Schema<Post>({
  content: {
    type: String,
    required: true
  }
})

export const PostModel = model('posts', PostSchema)
