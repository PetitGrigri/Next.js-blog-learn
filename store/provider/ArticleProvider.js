import { authorError, authorSuccess, commentsError, commentsSuccess } from "../action/article.js";
import { createContext, useContext, useEffect, useReducer } from "react";
import {initialState, reducer} from "../reducer/article.js";

import { effects } from "../effects/article.js";

const ArticleContext = createContext();
ArticleContext.displayName = 'Article'


export const articleConsummerHook = () => {
  const [state, dispatch] = useContext(ArticleContext)
  
  const dispatchWithEffect = (objectToDispatch) => {
      dispatch(objectToDispatch);
      effects(objectToDispatch, dispatch);
  }
  return [state, dispatchWithEffect];
};



export const ArticleProvider = ({children}) => {
  return (
    <ArticleContext.Provider value={useReducer(reducer, initialState)}>
      { children }
    </ArticleContext.Provider>
  );
}
