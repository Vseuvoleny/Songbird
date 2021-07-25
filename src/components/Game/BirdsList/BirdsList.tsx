import React, { useEffect, useState } from "react";
import BirdItem from "./BirdsItem/BirdItem";
import { connect } from "react-redux";
import { BirdsData, State, BirdsAnswer } from "../../../types/types";
import "./styles.scss";

type BirdsList = {
  questions: BirdsAnswer[];
  currentLevel: number;
};

const BirdsList: React.FC<BirdsList> = ({ questions, currentLevel }) => {
  const [variants, setVariants] = useState(questions[currentLevel].variants);
  const [roundAnswer, setRoundAnswer] = useState(
    questions[currentLevel].rightAnswer.id
  );

  useEffect(() => {
    setVariants(questions[currentLevel].variants);
    setRoundAnswer(questions[currentLevel].rightAnswer.id);
  }, [currentLevel]);

  const checkIsAnswerRight = (answer: number) => roundAnswer === answer;

  return (
    <ul className="birds_name">
      {variants.map((bird: BirdsData) => {
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

export default connect((state: State) => ({
  questions: state.questions,
  currentLevel: state.currentQuestion,
  currentPlayerAnswer: state.currentPlayerAnswer,
  score: state.score,
}))(BirdsList);
