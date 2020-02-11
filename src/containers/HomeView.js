import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArticleList } from "../components/ArticleList";
import { useComponentDidMount } from "../components/useComponentDidMount";
import { fetchArticles, removeArticle } from "../store/actions/article";
import Loading from "../components/Loading";
import { Message } from "semantic-ui-react";

function HomeView() {
  const { loading, data, error } = useSelector(state => state.articles);

  const dispatch = useDispatch();

  useComponentDidMount(() => {
    dispatch(fetchArticles());
  });

  const remove = async id => {
    try {
      if (window.confirm("êtes vous sûr(e) de vouloir supprimer cet article")) {
        await dispatch(removeArticle(id));
      }
    } catch (error) {
      throw error;
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Message negative>{error.message || error}</Message>;
  }
  return <div style={{padding:20}}>
    <ArticleList articles={data} remove={remove} />
  </div>;
}

export default HomeView;
