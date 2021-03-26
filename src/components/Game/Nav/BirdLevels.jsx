import React from "react";
import { connect } from "react-redux";
import BirdLevel from "./bird-level/BirdLevel";
import "./styles.scss";

// TODO вовремя рефактор на TS ввести enum для определения уровня вместо хардкора

const birdTitle = {
  training: "Разминка",
  songBird: "Певчие птицы",
  sparrows: "Воробьиные птицы",
  forestBird: "Лесные птицы",
  predatorBirds: "Хищные птицы",
  seaBirds: "Морские птицы"
};

const BirdLevels = ({ questions, currentQuestion }) => {
  const getLevelTitle = index => {
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

  const renderLevels = questions =>
    questions.map((_bird, idx) => (
      <BirdLevel
        title={getLevelTitle(idx)}
        key={idx}
        addActive={currentQuestion === idx ? "active" : null}
      />
    ));

  return <ul className="navigation-list">{renderLevels(questions)}</ul>;
};

function mapStateToProps(state) {
  return {
    currentQuestion: state.currentQuestion,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(BirdLevels);
