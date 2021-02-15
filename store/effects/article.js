import { authorError, authorSuccess, commentsError, commentsSuccess } from "../action/article";

import { NEW_ARTICLE } from "../constant/article";
import { getComments } from "../../lib/comment";
import { getUser } from "../../lib/user";

export const effects = (action, dispatch) => {

  const { type, payload } = action

  /** @todo remove : debug purpose only */
  console.log(type, payload);

  switch (type) {
    case NEW_ARTICLE:
      const {articleId, userId} = payload;
      console.log("NEW ARTICLE TO LOAD", articleId, userId);
      
      getComments(articleId)
        .then( (comments) => dispatch(commentsSuccess(comments)))
        .catch((error) => dispatch(commentsError()))
      ;
      getUser(userId)
        .then( (user) => dispatch(authorSuccess(user)))
        .catch((error) => dispatch(authorError()))
      ;
      return;
    default:
      return;
  }
}