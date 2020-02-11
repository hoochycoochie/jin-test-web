import React from "react";
import { Card, Button } from "semantic-ui-react";

export const Article = ({ article, remove }) => {
  if (!article) {
    return null;
  }
  return (
    <Card fluid style={{ padding: 10 }}>
      <Card.Content>
        <Card.Header
          style={{ fontSize: 15, textAlign: "center", paddingBottom: 20 }}
        >
          {article.title}
        </Card.Header>

        <Button
          floated="right"
          negative
          onClick={async e => {
            e.preventDefault();
            await remove(article.id);
          }}
        >
          Supprimer
        </Button>

        <div
          className="post__content"
          style={{ fontSize: 10 }}
          dangerouslySetInnerHTML={{ __html: article.description }}
        ></div>
      </Card.Content>
    </Card>
  );
};
