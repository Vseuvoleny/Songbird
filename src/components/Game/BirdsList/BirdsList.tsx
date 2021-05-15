import React, { useEffect, useState, useRef } from "react";
import BirdItem from "./BirdsItem/BirdItem";
import { connect } from "react-redux";
import "./styles.scss";

const BirdsList = ({ questions, currentLevel }) => {
  useEffect(() => {
    setVariants(questions[currentLevel].variants);
    setroundAnswer(questions[currentLevel].rightAnswer.id);
  }, [currentLevel]);

  const [variants, setVariants] = useState(questions[currentLevel].variants);
  const [roundAnswer, setroundAnswer] = useState(
    questions[currentLevel].rightAnswer.id
  );
  const ref = useRef(null);
  const checkIsAnswerRight = (answer: number) => roundAnswer === answer;

  return (
    <ul ref={ref} className="birds_name">
      {variants.map((bird: any, idx: number) => {
        return (
          <BirdItem
            key={bird.id}
            title={bird.name}
            answer={bird.id}
            checkIsAnswerRight={checkIsAnswerRight}
            addSuccess={bird.id === idx ? "success" : "error"}
          />
        );
      })}
    </ul>
  );
};

function mapStateToProps(state: any) {
  return {
    questions: state.questions,
    currentLevel: state.currentQuestion,
    currentPlayerAnswer: state.currentPlayerAnswer,
    score: state.score
  };
}

export default connect(mapStateToProps)(BirdsList);
