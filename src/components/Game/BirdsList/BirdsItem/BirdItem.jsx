import React from "react";
import "./styles.scss";
import { connect } from "react-redux";

const BirdItem = ({
  title,
  setPlayerAnswer,
  answer,
  checkIsAnswerRight,
  answerWasRight,
  numberOfAttempts,
  subAttempts
}) => {
  const handlePlayerAnswer = () => {
    setPlayerAnswer(answer);
    if (checkIsAnswerRight(answer)) {
      answerWasRight(numberOfAttempts);
    } else {
      subAttemtps(numberOfAttempts);
    }
  };

  const subAttemtps = attempts => {
    if (attempts > 0) {
      subAttempts();
    }
    return undefined;
  };

  return (
    <li className="bird-item" onClick={handlePlayerAnswer}>
      {title}
    </li>
  );
};

function mapStateToProps(state) {
  return {
    numberOfAttempts: state.numberOfAttempts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPlayerAnswer: answer =>
      dispatch({ type: "PLAYER_ANSWER", payload: answer }),
    answerWasRight: numberOfAttempts =>
      dispatch({ type: "ANSWER_WAS_RIGHT", payload: numberOfAttempts }),
    subAttempts: () => dispatch({ type: "ANSWER_WAS_WRONG" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdItem);
