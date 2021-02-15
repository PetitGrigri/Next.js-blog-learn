import { authorError, authorSuccess, commentsError, commentsSuccess } from "../action/article.js";
import { createContext, useContext, useEffect, useReducer } from "react";
import {initialState, reducer} from "../reducer/article.js";

import { getComments } from '../../lib/comment';
import { getUser } from '../../lib/user';

const ArticleContext = createContext();
ArticleContext.displayName = 'Article'

export const articleConsummerHook = () => useContext(ArticleContext);


/**
 * This component will fetch the comments and the author related to a user
 * 
 * @param {{context: Array}} props 
 */
const ArticleListener = (props) => {
  const [{articleId, userId}, dispatch] = props.context;
  
  useEffect(() => {
    if (articleId === null) return;

    getComments(articleId)
      .then( (comments) => dispatch(commentsSuccess(comments)))
      .catch((error) => dispatch(commentsError()))
    ;

    getUser(userId)
      .then( (user) => dispatch(authorSuccess(user)))
      .catch((error) => dispatch(authorError()))
    ;
    
  }, [articleId]);
  
  return null;
}


export const ArticleProvider = ({children}) => {
  return (
    <ArticleContext.Provider value={useReducer(reducer, initialState)}>
      <ArticleContext.Consumer>
        {context => <ArticleListener context={context} />}
      </ArticleContext.Consumer>
      { children }
    </ArticleContext.Provider>
  );
}
