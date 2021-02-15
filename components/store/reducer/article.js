import {
  AUTHOR_ERROR,
  AUTHOR_LOADED,
  COMMENTS_ERROR,
  COMMENTS_LOADED,
  NEW_ARTICLE
} from "../constant/article";

export const initialState = {
  articleId: null,
  userId: null,
  comments:  {
      loading: false,
      data: [],
  },
  author: {
      loading: false,
      data: {
          name: null,
          username: null,
          email: null
      }
  }
}

export const reducer = (state, action) => {

  const { type, payload } = action

  /** @todo remove : debug purpose only */
  console.log(type, payload);

  switch (type) {
    case NEW_ARTICLE:
      return {
        ...state,
        articleId: payload.articleId,
        userId: payload.userId,
        comments: {
          error: false,
          loading: true,
          data: [],
        },
        author: {
          error: false,
          loading: true,
          data: {
            name: null,
            username: null,
            email: null
          }
        }
      }
    case COMMENTS_LOADED:
      return {
        ...state,
        comments: {
          error: false,
          loading: false,
          data: payload.comments,
        }
      }
    case COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          error: true,
          data: []
        }
      }
    case AUTHOR_LOADED:
      return {
        ...state,
        author: {
          loading: false,
          error: false,
          data: payload.author
        }
      }
    case AUTHOR_ERROR:
      return {
        ...state,
        author: {
          loading: false,
          error: true,
          data: initialState.author.data
        }
      }
    default:
      return state;
  }
}