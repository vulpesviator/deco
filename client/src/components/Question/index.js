
import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Radio, Button } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../../utils/queries';
import RenderImages from '../Quiz Images';

export function RatingSlider() {
  const [rating, setRating] = useState(1);

  const handleChange = (e) => {
    setRating(e.target.value);
  };

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
      <div>
      <Button primary onClick={() => rating}>
          Next
        </Button>
      </div>
    </>
    )
}

function Question() {

  const [activeQuestion, setActiveQuestion] = useState(0);
  
  const { loading, data } = useQuery(QUERY_QUESTIONS);

  const [isDisabled, setDisabled] = useState(true);

  const questions = data?.questions || [];
  console.log(questions);

  useEffect(() => {
    if (data) {
    } else if (loading) {
      console.log("LOADING..");
    }
  }, [data, loading]);

const text = questions.map((question) => question.text)
console.log('questions', questions)
console.log(text, 'text')

const images = questions.map((question) => question.image)
console.log(images[activeQuestion], 'images')

// console.log("images at active q", images[activeQuestion])
console.log(activeQuestion, 'active question')
 console.log(questions.length, 'questions length')
 
  const onClickNext = (event) => {
    event.preventDefault();

    event.stopPropagation();
    if (activeQuestion !== questions.length - 1) { setActiveQuestion((prev) => prev + 1)
      setDisabled(false)
   } 
   }

   const showResults = () => {
    if (activeQuestion === 4) {
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
       <p> {text[activeQuestion]}</p>
      </Header>

         <Grid textAlign='center'>
       {images[activeQuestion].map((image) => {
         return <Grid.Row>    <Radio></Radio> <img src={image.src} alt={image.src} height = '200' width = '200' margin = '10px' padding = '10px'></img>
         </Grid.Row>
       })}
        </Grid>
         
            <Grid.Column key='temp'>
            <div>{showResults()}</div>
            </Grid.Column>
         <div>
                  <RatingSlider />
                  </div>
      
      
        
    
      </div>
      )}
    </Container>
  );
}

export default Question;
