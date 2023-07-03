import { Schema, model, Document, Model } from 'mongoose'

export interface IPost {
  content: string
}

export interface IPostDocument extends IPost, Document {
  createdAt: Date
  updatedAt: Date
}
export interface IPostResponse {
  id: string
  content: string
  createdAt: Date
  updatedAt: Date
}
interface IPostModel extends Model<IPostDocument> {
  buildPost(post: IPost): IPostDocument
}

const PostSchema: Schema<IPostDocument> = new Schema(
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

export const Post = model<IPostDocument, IPostModel>(
  'posts',
  PostSchema
)

export default Post
