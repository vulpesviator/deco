import React, { useEffect, useState } from 'react';
 import { useQuery, userQuery } from '@apollo/client';
 import { QUERY_QUESTIONS } from '../../utils/queries';
function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const [ questions ] = useQuery(QUERY_QUESTIONS);

  // {activeQuestion.questions.map((question) => (

  // ))}

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
  }


  return (
  
    <div>
      <h2>This is the quiz</h2>
      <div>
      <ul>
       <li>
        {questions}
         <button onClick={onClickNext}>Next</button>
       </li>
      </ul>
      </div>
   
    </div>   

  );

  }
  
export default Quiz;
