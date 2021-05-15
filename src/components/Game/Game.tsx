import React, { useEffect } from "react";
import { connect } from "react-redux";
import Next from "../Button/Next";
import Header from "../Header/Header";
import ActiveGame from "./ActiveGame/ActiveGame";
import EndGame from "./EndGame/EndGame";
import BirdLevels from "./Nav/BirdLevels";
import "./styles.scss";

interface IGame {
  isGameFinished: boolean;
  currentLevel: number;
  questions: any[];
  gameOver: Function;
}

export const Game: React.FC<IGame> = ({
  isGameFinished,
  currentLevel,
  questions,
  gameOver
}) => {
  useEffect(() => {
    if (currentLevel === questions.length) {
      gameOver();
    }
  }, [currentLevel]);
  return (
    <div className="Game">
      <Header />
      <BirdLevels />
      {isGameFinished ? (
        <EndGame />
      ) : (
        <div className="current_game">
          <ActiveGame />
          <Next />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    questions: state.questions,
    currentLevel: state.currentQuestion,
    isGameFinished: state.isGameFinished
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    gameOver: () => dispatch({ type: "GAME_OVER" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);