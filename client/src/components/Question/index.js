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
  const [activeQuestion, setActiveQuestion] = useState(0);

  const [isDisabled, setDisabled] = useState(false);

  const { loading, data } = useQuery(QUERY_IMAGES);
  const images = data?.images || [];

  const currentImage = images[activeQuestion];

  function RatingSlider() {
    const [rating, setRating] = useState(1);
    const handleChange = (e) => {
      setRating( e.target.value );
      console.log(rating);

      if(!e.target) {
        setDisabled(true);
      }
    };

    const [updateScore, { error }] = useMutation(UPDATE_SCORE);

    if (activeQuestion === 17) {
      setDisabled(true);
    }

    const navigate = useNavigate();
    const navigateProfile = () => {
      navigate("/profile");
    };
    
    async function onClickNext(event) {
      event.preventDefault();
      event.stopPropagation();

      const currentCategory = currentImage.category.scoreCategory;
      console.log("CATEGORY", currentCategory);

      try {
        const { data } = await updateScore({
          variables: {rating: parseInt(rating), category: currentCategory.toString() },
        });

      } catch (error) {
        console.log(error);
      }

      if (activeQuestion !== images.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      } else if (isDisabled) {
        navigateProfile();
      };
    }
    
    return (
      <>
        <div>
          <Grid.Row>
            <div>Rating: {rating}</div>
            <input
              type="range"
              min={1}
              max={5}
              value={rating}
              onChange={handleChange}
            />
            <br />
            <Rating icon="star" maxRating={5} rating={rating} />
          </Grid.Row>
        </div>
        <Grid.Row>
          <Button primary onClick={onClickNext}>
            {isDisabled ? "See Your Results" : "Next"}
          </Button>
        </Grid.Row>
      </>
    );
  }

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Header as="h3" textAlign="center">
            <p> Rate the following Artworks</p>
          </Header>

          <Grid textAlign="center">
            <Grid.Row>
              {" "}
              <img
                src={currentImage.src}
                alt={currentImage.src}
                height="200"
                width="200"
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

export default Question;
