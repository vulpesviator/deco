
import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Radio, Rating, Button } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGES } from '../../utils/queries';
import {Routes, useNavigate, Navigate} from 'react-router-dom';


export 

function Question() {
  
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  const [isDisabled, setDisabled] = useState(true);
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
   
  //  const saveUserRating = () => {
  //    ratingArray.push(userRating)
  //  }
    const onClickNext = (event) => {
      
      event.preventDefault();
  
      event.stopPropagation();
      if (activeQuestion !== images.length - 1) { setActiveQuestion((prev) => prev + 1)
        setDisabled(false)
     } 
     }
  
      return (
        <>
        <div>
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
        </div>
        <Grid>
        <Grid.Row>
        <div>
        <Button primary onClick={onClickNext}>
            Next
          </Button>
        </div>
        </Grid.Row>
        </Grid>
      </>
      )
  }

  const navigate = useNavigate();
  const navigateProfile = () => {
    // 👇️ navigate to /
    navigate('/profile');
  };

   const showResults = () => {
 
    if (activeQuestion === 17) {
    
      return (
      <Button className="primary" onClick={navigateProfile}>
            See Results
          </Button>
      );
    } 
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
                 <Grid.Row>
                  <RatingSlider />
                  </Grid.Row>
                 
                  <Grid.Row key='temp'>
            <div>{showResults()}</div>
            </Grid.Row>
                  </Grid>  
             </div>
      )}
    </Container>
  );
}

export default Question;
