import { PostDocument, PostResponse } from '../../models/PostModel'

export const userDto = {
  onePost: (post: PostDocument): PostResponse => {
    const { _id, ...props } = post
    return {
      id: _id,
      ...props
    }
  }
}
