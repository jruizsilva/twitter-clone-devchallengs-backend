import { IPostDocument, IPostResponse } from '../../models/PostModel'

export const postDto = {
  onePost: (docPost: IPostDocument): IPostResponse => {
    const formatData = {
      id: docPost._id,
      ...docPost.toObject()
    }
    delete formatData._id
    return formatData
  },
  manyPosts: (docPosts: IPostDocument[]): IPostResponse[] => {
    return docPosts.map((docPost) => {
      const formatData = {
        id: docPost._id,
        ...docPost.toObject()
      }
      delete formatData._id
      return formatData
    })
  }
}
