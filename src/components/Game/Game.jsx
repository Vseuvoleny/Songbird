import React, { useEffect } from "react";
import classes from "./Game.module.css";
import ActiveGame from "./ActiveGame/ActiveGame";
import Next from "../Button/Next";
import Header from "../Header/Header";
import BirdLevels from "./Nav/BirdLevels";
import EndGame from "./EndGame/EndGame";
import { connect } from "react-redux";

export const Game = ({ isGameFinished, currentLevel, questions, gameOver }) => {
  useEffect(() => {
    if (currentLevel === questions.length) {
      gameOver();
    }
  }, [currentLevel]);
  return (
    <div className={classes.Game}>
      <Header />
      <BirdLevels />
      {isGameFinished ? (
        <EndGame />
      ) : (
        <div className={classes.current_game}>
          <ActiveGame />
          <Next />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
    currentLevel: state.currentQuestion,
    isGameFinished: state.isGameFinished
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameOver: () => dispatch({ type: "GAME_OVER" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
