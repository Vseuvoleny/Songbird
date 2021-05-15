import React, { useState } from "react";
import "./styles.scss";
import { connect } from "react-redux";

interface IBirdItem{
  title: string,
  setPlayerAnswer: Function,
  answer: any,
  checkIsAnswerRight: 
}

const BirdItem: React.FC<IBirdItem> = ({
  title,
  setPlayerAnswer,
  answer,
  checkIsAnswerRight,
  answerWasRight,
  numberOfAttempts,
  subAttempts
}) => {
  const handlePlayerAnswer = (e: MouseEvent) => {
    const target = e.target;

    setPlayerAnswer(answer);
    if (checkIsAnswerRight(answer)) {
      setIsRightAnswer(target);
      answerWasRight(numberOfAttempts);
    } else {
      target.className = `${target.className} error`;
      subAttemtps(numberOfAttempts);
    }
  };

  const [isRightAnswer, setIsRightAnswer] = useState("");

  const subAttemtps = (attempts: number) => {
    if (attempts > 0) {
      subAttempts();
    }
    return undefined;
  };

  return (
    <li className={`bird-item ${isRightAnswer}`} onClick={handlePlayerAnswer}>
      {title}
    </li>
  );
};

function mapStateToProps({numberOfAttempts}: any) {
  return {
    numberOfAttempts: numberOfAttempts
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setPlayerAnswer: (answer: any) =>
      dispatch({ type: "PLAYER_ANSWER", payload: answer }),
    answerWasRight: (numberOfAttempts: number) =>
      dispatch({ type: "ANSWER_WAS_RIGHT", payload: numberOfAttempts }),
    subAttempts: () => dispatch({ type: "ANSWER_WAS_WRONG" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdItem);
