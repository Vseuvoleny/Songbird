import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BirdsAnswer } from "../../../../types/types";
import "./styles.scss";

type IBirdItem = {
  title: string;
  setPlayerAnswer: Function;
  answer: number;
  checkIsAnswerRight: Function;
  answerWasRight: Function;
  numberOfAttempts: number;
  subAttempts: Function;
  questions: BirdsAnswer[];
  currentQuestion: number;
  isAnswerRight: boolean;
};

const BirdItem: React.FC<IBirdItem> = ({
  title,
  answer,
  checkIsAnswerRight,
  answerWasRight,
  numberOfAttempts,
  subAttempts,
  isAnswerRight,
  currentQuestion,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  useEffect(() => {
    setSelectedVariant("");
  }, [currentQuestion]);

  const handlePlayerAnswer = () => {
    if (isAnswerRight) return;
    if (checkIsAnswerRight(answer)) {
      setSelectedVariant("success");
      answerWasRight(numberOfAttempts);
    } else {
      subAttemtps(numberOfAttempts);
      setSelectedVariant("error");
    }
  };

  const subAttemtps = (attempts: number) => {
    if (attempts > 0) subAttempts();
  };

  return (
    <li className={`bird-item ${selectedVariant}`} onClick={handlePlayerAnswer}>
      {title}
    </li>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    setPlayerAnswer: (answer: number) =>
      dispatch({ type: "PLAYER_ANSWER", payload: answer }),
    answerWasRight: (numberOfAttempts: number) =>
      dispatch({ type: "ANSWER_WAS_RIGHT", payload: numberOfAttempts }),
    subAttempts: () => dispatch({ type: "ANSWER_WAS_WRONG" }),
  };
}

export default connect(
  (state: any) => ({
    numberOfAttempts: state.numberOfAttempts,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    isAnswerRight: state.isAnswerRight,
    currentLevel: state.currentLevel,
  }),
  mapDispatchToProps
)(BirdItem);
