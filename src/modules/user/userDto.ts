import { IPostDocument, IPostResponse } from '../../models/PostModel'

export const userDto = {
  onePost: (post: IPostDocument): IPostResponse => {
    const { _id, ...props } = post
    return {
      id: _id,
      ...props
    }
  }
}
