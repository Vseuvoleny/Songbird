import React from "react";
import { connect } from "react-redux";
import { State, BirdsAnswer } from "../../../types/types";
import "./styles.scss";

type EndGame = {
  score: number;
  questions: BirdsAnswer[];
  startNewGame: Function;
};

const EndGame: React.FC<EndGame> = ({ score, questions, startNewGame }) => {
  const repeatGame = () => startNewGame();

  return (
    <div className="end-game">
      <span className="end-game__title">Поздравляем!</span>

      {score === questions.length * 5 ? (
        <p className="end-game__compliment">
          Вы набрали максимальное количество баллов! Вы настоящий птицевед!
        </p>
      ) : (
        <p className="end-game__compliment">
          Вы прошли викторину и набрали {score} из {questions.length * 5}{" "}
          возможных баллов
        </p>
      )}

      <button onClick={repeatGame} className="end-game__repeat-btn">
        Попробовать еще раз!
      </button>
    </div>
  );
};

export default connect(
  (state: State) => ({
    score: state.score,
    questions: state.questions,
  }),
  (dispatch) => ({
    startNewGame: () => dispatch({ type: "NEW_GAME" }),
  })
)(EndGame);
