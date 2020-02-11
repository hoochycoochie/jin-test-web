import React from "react";
import { Loader, Container } from "semantic-ui-react";

const Loading = () => (
  <Container style={{marginTop:300}}>
    <Loader active inline="centered" size="large" />
  </Container>
);

export default Loading;
