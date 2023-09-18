import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Header, Segment } from "semantic-ui-react";
import { QUERY_CATEGORY_IMAGES, QUERY_CATEGORY } from "../utils/queries";
import ImageCarousel from "../components/ImageCarousel";
import Jumbotron from "../components/Jumbotron";


function Art() {
  const { categoryId } = useParams();
  

  const { loading, data } = useQuery(QUERY_CATEGORY_IMAGES, {
    variables: { categoryId: categoryId },
  });

  const { loading: categoryLoading, data: categoryData} = useQuery(QUERY_CATEGORY, {
    variables: {id: categoryId}
  });

  
  if (loading || categoryLoading) return (
    <Jumbotron size="huge"> Loading...</Jumbotron>
    );
    
  const category = categoryData.category;
  const images = data?.categoryImages || [];
  console.log(images);

  return (
    <div style={{ margin: 20 }}>
      <Segment attached="top">
        <Header as="h2" style={{ fontSize: '3rem' }}>{category.name}</Header>
        <p>{category.description}</p>
      </Segment>

      <Segment attached="bottom">
        <ImageCarousel images={images} />
      </Segment>
    </div>
  );
}

export default Art;
