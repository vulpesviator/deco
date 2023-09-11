import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import { Card, Container } from "semantic-ui-react";

const Categories = () => {
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
      <CategoryMenu />
      </Card.Group>
    </Container>
  );
};

export default Categories;
