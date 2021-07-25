import React, { useEffect, useState, useRef } from "react";
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
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setVariants(questions[currentLevel].variants);
    setRoundAnswer(questions[currentLevel].rightAnswer.id);
  }, [currentLevel]);

  const checkIsAnswerRight = (answer: number) => roundAnswer === answer;

  return (
    <ul ref={ref} className="birds_name">
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

function mapStateToProps({
  questions,
  currentQuestion,
  currentPlayerAnswer,
  score,
}: State) {
  return {
    questions: questions,
    currentLevel: currentQuestion,
    currentPlayerAnswer: currentPlayerAnswer,
    score: score,
  };
}

export default connect(mapStateToProps)(BirdsList);
