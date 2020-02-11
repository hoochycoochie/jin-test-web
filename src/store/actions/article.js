import api from "../../api";
import {
  REMOVE_ARTICLE_SUCCESS,
  REMOVE_ARTICLE_ERROR,
  REMOVE_ARTICLE_LOADING,
  FETCH_ARTICLES_LOADING,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS
} from "../types";

export const fetchArticles = () => {
  return async (dispatch, _getState) => {
    try {
      await dispatch({
        type: FETCH_ARTICLES_LOADING
      });

      const { data } = await api.articles.find();

      await dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        data
      });
    } catch (error) {
      await dispatch({ type: FETCH_ARTICLES_ERROR, error });
    }
  };
};

export const removeArticle = id => {
  return async (dispatch, getState) => {
    try {
      await dispatch({
        type: REMOVE_ARTICLE_LOADING
      });

      await api.articles.remove(id);
      let data = getState().articles.data;
      const articleIndex = data.findIndex(
        a => a.id.toString() === id.toString()
      );

      if (articleIndex < 0) {
        await dispatch({ type: REMOVE_ARTICLE_ERROR, error:"Not found" });
      }

      if (articleIndex > -1) {
        data.splice(articleIndex, 1);
        await dispatch({
          type: REMOVE_ARTICLE_SUCCESS,
          data
        });
      }
    } catch (error) {
      await dispatch({ type: REMOVE_ARTICLE_ERROR, error });
    }
  };
};
