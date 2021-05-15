import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

interface IEndGame {
  score: number;
  questions: any[];
  startNewGame: Function;
}

const EndGame: React.FC<IEndGame> = ({ score, questions, startNewGame }) => {
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
function mapStateToProps(state: any) {
  return {
    score: state.score,
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    startNewGame: () => dispatch({ type: "NEW_GAME" })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
