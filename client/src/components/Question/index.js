import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Radio, Button } from 'semantic-ui-react';
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





const text = questions.map((question) => question.text)
console.log('questions', questions)
console.log(text, 'text')
const images = questions.map((image) => image.image)

console.log("images at active q", images[activeQuestion])
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
     
      {loading ? (<div>Loading...</div>) : (
        <div>
      <Header as='h3' textAlign='center'>
       <p> {text[activeQuestion]}</p>
      </Header>
      <Grid textAlign='center'>
      {images[activeQuestion].map((image) => {
        return <Grid.Row>   <Radio onClick={onClickNext}/> <img src={image} alt={image} height = '200' width = '200' margin = '10px' padding = '10px'></img> 
       
            <Grid.Column key='temp'>
            <div>{showResults()}</div>
            </Grid.Column>
         
        </Grid.Row>
        } )
        }
      
      </Grid>
      </div>
      )}
    </Container>
  );
}

export default Question;
