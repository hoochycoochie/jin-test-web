import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_LOADING,
  REMOVE_ARTICLE_SUCCESS
} from "../types";

const initialState = {
  data: [],
  error: null,
  loading: false
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null
      };

    case FETCH_ARTICLES_LOADING:
      return {
        loading: true,
        data: [],
        error: null
      };

    case REMOVE_ARTICLE_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null
      };

    case FETCH_ARTICLES_ERROR:
      return {
        data: [],
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};
