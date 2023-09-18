import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Header,
  Rating,
  Button,
} from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_IMAGES } from "../../utils/queries";
import { UPDATE_SCORE } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";

export function Question() {
  const { loading, data } = useQuery(QUERY_IMAGES);
  const images = data?.images || [];
  let questionNumber = 0;
  
  const [activeQuestion, setActiveQuestion] = useState(0);

  const [isDisabled, setDisabled] = useState(false);

useEffect(() => {
  if (data) {
    console.log('we have data')
  }
  else if (loading){
    console.log("LOADING");
  }

}, [loading, data,])

  const currentImage = images[activeQuestion];





  function RatingSlider() {
    const [rating, setRating] = useState(1);
    const handleChange = (e) => {
      setRating( e.target.value );

      if(!e.target) {
        setDisabled(true);
      }
    };

    const [updateScore, { error }] = useMutation(UPDATE_SCORE);
    
    async function onClickNext(event) {
      event.preventDefault();
      
      const currentCategory = currentImage.category.scoreCategory;

      try {
        const { data } = await updateScore({
          variables: {rating: parseInt(rating), category: currentCategory.toString() },
        });

      } catch (error) {
        console.log(error);
      }
      setActiveQuestion(activeQuestion+1)
    }
    while (activeQuestion < 20) {
      if (activeQuestion === 19) {
        setDisabled(true);
      }
      return (
        <>
          <div>
            <Grid.Row style={{ textAlign: "center" }}>
              <div style={{margin: "10px", fontWeight: "bold"}}>
                Your Rating: 
                <span style={{border: "solid 2px black", margin: "15px", padding: "5px", fontWeight: "bolder", background: "white"}}>
                  {rating}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={rating}
                onChange={handleChange}
              />
              <br />
              <Rating icon="star" maxRating={10} rating={rating} />
            </Grid.Row>
          </div>
          <Grid.Row>
            <Button className="quizButton" primary onClick={onClickNext}>
              {isDisabled ? "See Your Results" : "Next"}
            </Button>
          </Grid.Row>
        </>
      );
    }
  }
while (activeQuestion < 20) {
  return (
    <Container>
      <style>
        {`
        .ui.header:first-child {
          margin-top: 1.5rem; 
        }
        `}
      </style>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="quiz-container">
          <Header as="h1" textAlign="center" >
            <p> Rate the following Artwork</p>
          </Header>

          <Grid textAlign="center" >
              <h4 style={{margin: "10px", color: "#F86537", fontSize: "1.5em" }}>
                Question {activeQuestion+1}/20
              </h4>
            <Grid.Row>
             
              <img
                className="artwork"
                src={currentImage.src}
                alt={currentImage.category.name}
                height="400"
                width="auto"
                margin="10px"
                padding="10px"
              ></img> 
            </Grid.Row>
            
            <RatingSlider />
            
            <Grid.Row key="temp"></Grid.Row>
          </Grid>
        </div>
      )}
    </Container>
  );
}
window.location.replace('/profile');
}

export default Question;
