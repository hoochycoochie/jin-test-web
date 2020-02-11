import React from "react";
import { Article } from "./Article";
import { Card } from "semantic-ui-react";

export const ArticleList = ({ articles ,remove}) => {
  if (!articles || !articles.length) {
    return null;
  }
  return (
    <Card.Group itemsPerRow={1} style={{ padding: 20, marginTop: 30 }}>
      {articles.map((article, i) => (
        <Article key={i} article={article} remove={remove} />
      ))}
    </Card.Group>
  );
};
