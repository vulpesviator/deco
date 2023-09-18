import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { Card, Icon, Image } from "semantic-ui-react";

function CategoryMenu() {
  const cardColor = ["orange", "yellow", "green", "teal", "blue", "violet", "purple", "pink", "brown"];
  
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  
  const categories = categoryData?.categories || []

  if(!loading){
    return (
      <>
      {categories.map((item, index) => (
        
        <Card 
        color={cardColor[index % cardColor.length]} 
        key={item.id} 
        
      >
        <Image style={{ 
          position: 'relative', 
          backgroundImage: `url(${item.image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center', 
          minHeight: '200px' 
        }} />
          <Card.Content>
          <Link to={`/art/${item._id}`} style={{ color: '#150020', fontSize: '1.5rem', fontWeight: '600' }}>
            <Card.Header as="h2" style={{ marginBottom: '.5rem' }}>{item.name}</Card.Header>
            </Link>
            <Card.Description style={{ 
                maxHeight: '200px', 
                overflowY: 'auto' 
              }}>
              {item.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/art/${item._id}`} style={{ color: '#925BFF', fontWeight: '600' }}>
              <Icon name='th' />
              See more examples?
            </Link>
          </Card.Content>
        </Card>
      ))}
      </>
  )};
}

export default CategoryMenu;
