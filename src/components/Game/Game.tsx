import React, { useEffect } from "react";
import { connect } from "react-redux";
import Next from "../Button/Next";
import Header from "../Header/Header";
import BirdsList from "./BirdsList/BirdsList";
import BirdsTitle from "./BirdsTitle/BirdsTitle";
import EndGame from "./EndGame/EndGame";
import BirdLevels from "./Nav/BirdLevels";
import Player from "./Player/Player";
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
  gameOver,
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
          <Player />
          <BirdsList />
          <BirdsTitle />
          <Next />
        </div>
      )}
    </div>
  );
};

export default connect(
  (state: any) => ({
    questions: state.questions,
    currentLevel: state.currentQuestion,
    isGameFinished: state.isGameFinished,
  }),
  (dispatch) => ({
    gameOver: () => dispatch({ type: "GAME_OVER" }),
  })
)(Game);
