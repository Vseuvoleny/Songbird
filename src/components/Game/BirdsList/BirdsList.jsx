import React, { useEffect, useState } from "react";
import BirdItem from "./BirdsItem/BirdItem";
import { connect } from "react-redux";
import "./styles.scss";

const BirdsList = ({ questions, currentLevel }) => {
  useEffect(() => {
    setVariants(questions[currentLevel].variants);
  }, [currentLevel]);

  const [variants, setVariants] = useState(questions[currentLevel].variants);
  const [roundAnswer, setroundAnswer] = useState(
    questions[currentLevel].rightAnswer.id
  );

  const checkIsAnswerRight = answer => roundAnswer === answer;

  return (
    <ul className="birds_name">
      {variants.map(bird => {
        return (
          <BirdItem
            key={bird.id}
            title={bird.name}
            answer={bird.id}
            checkIsAnswerRight={checkIsAnswerRight}
          />
        );
      })}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
    currentLevel: state.currentQuestion,
    currentPlayerAnswer: state.currentPlayerAnswer,
    score: state.score
  };
}

export default connect(mapStateToProps)(BirdsList);
