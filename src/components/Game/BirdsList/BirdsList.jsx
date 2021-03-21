import React, { useEffect, useState } from "react";
import BirdItem from "./BirdsItem/BirdItem";
import { connect } from "react-redux";
import "./styles.scss";

const BirdsList = ({
  questions,
  currentLevel,
  setPlayerAnswer,
  currentPlayerAnswer,
  score
}) => {
  useEffect(() => {
    setVariants(questions[currentLevel].variants);
  }, [currentLevel]);

  const [variants, setVariants] = useState(questions[currentLevel].variants);

  return (
    <ul className="birds_name">
      {variants.map(bird => {
        return (
          <BirdItem
            key={bird.id}
            title={bird.name}
            setPlayerAnswer={setPlayerAnswer}
            answer={bird.id}
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

function mapDispatchToProps(dispatch) {
  return {
    setPlayerAnswer: answer => dispatch({ type: "setAnswer", payload: answer })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdsList);
