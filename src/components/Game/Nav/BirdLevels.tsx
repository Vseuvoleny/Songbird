import React from "react";
import { connect } from "react-redux";
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
  questions: any;
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

  const renderLevels = (questions: any) =>
    questions.map((_bird: any, idx: number) => (
      <BirdLevel
        title={getLevelTitle(idx)}
        key={idx}
        addActive={currentQuestion === idx ? "active" : ""}
      />
    ));

  return <ul className="navigation-list">{renderLevels(questions)}</ul>;
};

function mapStateToProps(state: { currentQuestion: any; questions: any }) {
  return {
    currentQuestion: state.currentQuestion,
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(BirdLevels);
