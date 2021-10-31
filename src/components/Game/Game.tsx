import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BirdsAnswer, State } from "../../types/types";
import Next from "../Button/Next";
import Header from "../Header/Header";
import BirdsList from "./BirdsList/BirdsList";
import BirdsTitle from "./BirdsTitle/BirdsTitle";
import EndGame from "./EndGame/EndGame";
import BirdLevels from "./Nav/BirdLevels";
import Player from "./Player/Player";
import { IGame } from "./type";
import "./styles.scss";

export const Game: React.FC<IGame> = ({
  isGameFinished,
  currentQuestion,
  questions,
  isAnswerRight,
  nextQuestion,
  gameOver,
}) => {
  useEffect(() => {
    if (currentQuestion === questions.length) {
      gameOver();
    }
  }, [currentQuestion]);
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
          <Next isAnswerRight={isAnswerRight} nextQuestion={nextQuestion} />
        </div>
      )}
    </div>
  );
};

export default connect(
  (state: State) => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    isGameFinished: state.isGameFinished,
    isAnswerRight: state.isAnswerRight,
  }),
  (dispatch) => ({
    gameOver: () => dispatch({ type: "GAME_OVER" }),
    nextQuestion: () => dispatch({ type: "NEXT_QUESTION" }),
  })
)(Game);
