import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Radio, Rating, Button } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGES } from '../../utils/queries';


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
    const onClickNext = (event) => {
      event.preventDefault();
  
      event.stopPropagation();
      if (activeQuestion !== images.length - 1) { setActiveQuestion((prev) => prev + 1)
        setDisabled(false)
     } 
     }
    const handleChange = (e) => {
      setRating(e.target.value);
    };
  
      return (
        <>
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
        <Grid.Row>
        <Button primary onClick={onClickNext}>
            Next
          </Button>
        </Grid.Row>
      </>
      )
  }
   


   const showResults = () => {
    if (activeQuestion === 18) 
    {
      return (
      <Button className="primary" to="/profile">
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
                    <Grid.Column>
                      <RatingSlider />
                    </Grid.Column>
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
