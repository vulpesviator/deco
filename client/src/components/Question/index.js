import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Radio } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../../utils/queries';



function Question() {
// const [activeQuestion, setActiveQuestion] = useState(0)
// const [selectedAnswer, setSelectedAnswer] = useState('')

  
  const [activeQuestion, setActiveQuestion] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState('')
  const { loading, data } = useQuery(QUERY_QUESTIONS);

  const [isDisabled, setDisabled] = useState(true);
  
  const questions = data?.questions || [];
  console.log(questions);

  useEffect( () => {
    if (data) {

    } else if (loading) {
      console.log("LOADING..");
    
    }
  }, [data, loading])

  const onClickNext = (event) => {
    event.preventDefault();
    if (activeQuestion !== questions.length - 1) { setActiveQuestion((prev) => prev + 1)
      setDisabled(false)
   } else {
     setActiveQuestion(0)
   }
   }



const text = questions.map((question) => question.text)
console.log('questions', questions)
console.log(text, 'text')
const images = questions.map((image) => image.image)

console.log("images at active q", images[activeQuestion])
  

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Header as="h3" textAlign="center">
            <p> {text[activeQuestion]}</p>
          </Header>
          <Grid textAlign="center">
            {images[activeQuestion].map((image) => {
              return (
                <Grid.Row>
                  {" "}
                  <button onClick={onClickNext}>
                    {" "}
                    <img
                      src={image}
                      alt={image}
                      height="auto"
                      width="200"
                      margin="10px"
                      padding="10px"
                    ></img>{" "}
                  </button>
                  <Grid.Column key="temp">
                    <Radio />
                    <p>{image.text}</p>
                  </Grid.Column>
                </Grid.Row>
              );
            })}
          </Grid>
        </div>
      )}
    </Container>
  );
}

export default Question;
