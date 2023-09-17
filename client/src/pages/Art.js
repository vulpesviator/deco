import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Header, Segment } from "semantic-ui-react";
import { QUERY_CATEGORY_IMAGES, QUERY_CATEGORY } from "../utils/queries";
import ImageCarousel from "../components/ImageCarousel";

function Art() {
  const { categoryId } = useParams();
  

  const { loading, data } = useQuery(QUERY_CATEGORY_IMAGES, {
    variables: { categoryId: categoryId },
  });

  const { loading: categoryLoading, data: categoryData} = useQuery(QUERY_CATEGORY, {
    variables: {id: categoryId}
  });

  console.log(categoryData);

  const category = categoryData.category;

  if (loading || categoryLoading) return (
     <div>Loading...</div>
  );

  const images = data?.categoryImages || [];
  console.log(images);
  return (
    <div style={{ margin: 20 }}>
      <Segment attached="top">
        <Header as="h2">{category.name}</Header>
        <p>{category.description}</p>
      </Segment>

      <Segment attached="bottom">
        <ImageCarousel images={images} />
      </Segment>
    </div>
  );
}

export default Art;
