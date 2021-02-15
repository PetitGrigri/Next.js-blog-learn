import { AUTHOR_ERROR, AUTHOR_LOADED, COMMENTS_ERROR, COMMENTS_LOADED } from "../constant/article";

export const commentsSuccess = (comments) => ({
    type: COMMENTS_LOADED,
    payload: {
        comments
    }
});

export const commentsError = () => ({
    type: COMMENTS_ERROR,
});

export const authorSuccess = () => ({
    type: AUTHOR_LOADED,
    payload: { author: user }
});


export const authorError = () => ({
    type: AUTHOR_ERROR,
})