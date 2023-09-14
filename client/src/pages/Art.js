import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Header, Segment } from "semantic-ui-react";
import { QUERY_CATEGORY_IMAGES } from "../utils/queries";
import ImageCarousel from "../components/ImageCarousel";

function Art() {
  const { categoryId } = useParams();
  console.log(categoryId);

  const { loading, data } = useQuery(QUERY_CATEGORY_IMAGES, {
    variables: { categoryId: categoryId },
  });

  if (loading) return <div>Loading...</div>;

  const category = data.category;

  return (
    <div style={{ margin: 20 }}>
      <Segment attached="top">
        <Header as="h2">{category.name}</Header>
        <p>{category.description}</p>
      </Segment>

      <Segment attached="bottom">
        <ImageCarousel images={category.images} />
      </Segment>
    </div>
  );
}

export default Art;
