import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import { Card, Container } from "semantic-ui-react";

const Categories = () => {
  return (
    <Container style={{padding: "20px"}}>
      <Card.Group centered>
      <CategoryMenu />
      </Card.Group>
    </Container>
  );
};

export default Categories;
