import React from "react";
import Quiz from "../components/Quiz";
import Question from "../components/Question";

const QuizPage = () => {
  return (
    <div className="container">
      <Quiz />
      <Question />
    </div>
  );
};

export default QuizPage;
