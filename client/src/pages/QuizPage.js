import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Header, Icon } from 'semantic-ui-react';
import Question from '../components/Question';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';

function QuizPage() {
  // const [activeQuestion, setActiveQuestion] = useState(0)
  // const [selectedAnswer, setSelectedAnswer] = useState('')

  const [ questions ] = useQuery(QUERY_QUESTIONS);

  // {activeQuestion.questions.map((question) => (

  // ))}

  // const questionNum = questions[0] + 1

  /* const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
  } */


  <Container>
      {questions.map((question, index) => (
        <div key={index}>
          <Header as='h2' textAlign='center'>
            Question #{index + 1}
          </Header>
          <Grid textAlign='center'>
            <Grid.Row>
              <Question {...question} />
            </Grid.Row>
            
            {index < questions.length - 1 && (
              <Button className="primary">
                Next
              </Button>
            )}
          </Grid>
        </div>
      ))}
    </Container>

  }
  
export default QuizPage;
