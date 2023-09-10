import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Header, Icon } from 'semantic-ui-react';
import Question from '../Question';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../../utils/queries';

function QuizPage() {
  // const [activeQuestion, setActiveQuestion] = useState(0)
  // const [selectedAnswer, setSelectedAnswer] = useState('')

  // const [ questions ] = useQuery(QUERY_QUESTIONS);

  // {activeQuestion.questions.map((question) => (

  // ))}

  // const questionNum = questions[0] + 1

  /* const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
  } */


  return (
    <Container>
    <Header as='h2' textAlign='center'>
      Question #1
    </Header>
    <Grid textAlign='center'>
      <Grid.Row>
        <Question />
      </Grid.Row>
      <Button className="primary">
              Next
      </Button>
    </Grid>  
    </Container>
  );

  }
  
export default QuizPage;
