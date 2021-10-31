import React from "react";
import { connect } from "react-redux";
import { BirdsAnswer, State } from "../../../types/types";
import BirdLevel from "./bird-level/BirdLevel";
import "./styles.scss";

enum birdTitle {
  training = "Разминка",
  songBird = "Певчие птицы",
  sparrows = "Воробьиные птицы",
  forestBird = "Лесные птицы",
  predatorBirds = "Хищные птицы",
  seaBirds = "Морские птицы",
}

type BirdsLevels = {
  questions: BirdsAnswer[];
  currentQuestion: number;
};

const BirdLevels = ({ questions, currentQuestion }: BirdsLevels) => {
  const getLevelTitle = (index: number) => {
    switch (index) {
      case 0:
        return birdTitle.training;
      case 1:
        return birdTitle.sparrows;
      case 2:
        return birdTitle.songBird;
      case 3:
        return birdTitle.forestBird;
      case 4:
        return birdTitle.predatorBirds;
      case 5:
        return birdTitle.seaBirds;
      default:
        break;
    }
  };

  return (
    <ul className="navigation-list">
      {questions.map((_bird: any, idx: number) => (
        <BirdLevel
          key={idx}
          title={getLevelTitle(idx)}
          addActive={currentQuestion === idx ? "active" : ""}
        />
      ))}
    </ul>
  );
};

export default connect((state: State) => ({
  currentQuestion: state.currentQuestion,
  questions: state.questions,
}))(BirdLevels);
