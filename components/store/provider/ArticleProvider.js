import { AUTHOR_ERROR, AUTHOR_LOADED, COMMENTS_ERROR, COMMENTS_LOADED } from "../constant/article.js";
import { createContext, useContext, useEffect, useReducer } from "react";
import {initialState, reducer} from "../reducer/article.js";

import { getComments } from '../../../lib/comment';
import { getUser } from '../../../lib/user';

const ArticleContext = createContext();
ArticleContext.displayName = 'Article'

export const articleConsummerHook = () => useContext(ArticleContext);


/**
 * This commponent with fetch the comments and the author related to a user
 * 
 * @param {{context: Array}} props 
 */
const ArticleListener = (props) => {
  const [{articleId, userId}, dispatch] = props.context;
  
  useEffect(() => {
    if (articleId === null) return;

    getComments(articleId)
      .then( (comments) => dispatch({
        type: COMMENTS_LOADED,
        payload: { comments }
      }))
      .catch((error) => dispatch({
        type: COMMENTS_ERROR,
      }))
    ;

    getUser(userId)
      .then( (user) => dispatch({
        type: AUTHOR_LOADED,
        payload: { author: user }
      }))
      .catch((error) => dispatch({
        type: AUTHOR_ERROR,
      }))
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
