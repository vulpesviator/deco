
import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Radio, Rating, Button } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGES } from '../../utils/queries';
import {Routes, useNavigate, Navigate} from 'react-router-dom';


export 

function Question() {
  
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  const [isDisabled, setDisabled] = useState(false);
  const { loading, data } = useQuery(QUERY_IMAGES);
  const images = data?.images || [];
  const currentImage = images[activeQuestion]
  console.log(images)
  console.log(currentImage)
  
  function RatingSlider() {
    const [rating, setRating] = useState(1);
    const [userRating, setUserRating] = useState();
    const ratingArray = []
    const handleChange = (e) => {
      setRating(e.target.value);
      const userInput = e.target.value
      ratingArray.push(userInput)
      console.log('category:', currentImage.category.name, 'category ID:', currentImage.category._id, 'rating', userRating, )
      // console.log('userRating STate:', userRating)
      setUserRating(userInput)
    };

    console.log(userRating)
   
  if (activeQuestion === 17){
  setDisabled(true)
  }

  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate('/profile');
  };
    const onClickNext = (event) => {
      
      event.preventDefault();
  
      event.stopPropagation();
      if (activeQuestion !== images.length - 1) { setActiveQuestion((prev) => prev + 1)
       
     } else if (isDisabled){
       navigateProfile()
     }
     }
  
      return (
        <>
        <div>
          <Grid.Row>
          <div>Rating: {rating}</div>
          <input
            type='range'
            min={1}
            max={5}
            value={rating}
            onChange={handleChange}
          /><br />
          <Rating
            icon="star"
            maxRating={5}
            rating={rating}
          />
          </Grid.Row>
        </div>
       <Grid.Row>
        <Button primary onClick={onClickNext} >
           { isDisabled? 'See Your Results' : 'Next'}
          </Button>
          </Grid.Row>
      </>
      )
  }

 
  
   


  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>

      <Header as='h3' textAlign='center'>
       <p> Rate the following Artworks</p>
      </Header>

         <Grid textAlign='center'>
       
        <Grid.Row> <img src={currentImage.src} alt={currentImage.src} height = '200' width = '200' margin = '10px' padding = '10px'></img>
         </Grid.Row>
                
                  <RatingSlider />
               
                 
                  <Grid.Row key='temp'>
            
            </Grid.Row>
                  </Grid>  
             </div>
      )}
    </Container>
  );
}

export default Question;
