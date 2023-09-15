import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Grid, Header } from 'semantic-ui-react';
import Question from '../components/Question';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';

function QuizPage() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  // const [selectedAnswer, setSelectedAnswer] = useState('')

  // const [ questions ] = useQuery(QUERY_QUESTIONS);

  // {activeQuestion.questions.map((question) => (

  // ))}

  // const questionNum = questions[0] + 1

  // const onClickNext = () => {
  //   setActiveQuestion((prev) => prev + 1)
  // }

 

return (
  <Container>
      
        <div key={'index'}>
          <Header as='h2' textAlign='center'>
            {/* Question #{index + 1} of {questions.length} */}
          </Header>
          <Grid textAlign='center'>
            <Grid.Row>
              <Question  />
            </Grid.Row>
             {/* {showResults()} */}
          </Grid>
        </div>
      
    </Container>

  
  );
}
export default QuizPage;
