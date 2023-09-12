import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Card, Icon, Image } from "semantic-ui-react";

function CategoryMenu() {
  const cardColor = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey"];

  const src = "https://react.semantic-ui.com/images/avatar/large/matthew.png"
  
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
      <>
      {categories.map((item) => (
        <Card color={cardColor[0]} key={item.id}>
          <Image src='${src}' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>
              <span className='subhead'>This category of art means a thing</span>
            </Card.Meta>
            <Card.Description>
              Artistic description
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/art">
              <Icon name='th' />
              See more examples?
            </Link>
          </Card.Content>
        </Card>
      ))}
      </>
  );
}

export default CategoryMenu;
