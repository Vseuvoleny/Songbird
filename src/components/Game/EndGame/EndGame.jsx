import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

const EndGame = ({ score }) => {
  return (
    <div className="end-game">
      <span className="end-game__title">Поздравляем!</span>

      {score === 30 ? (
        <p className="end-game__compliment">
          Вы набрали максимальное количество баллов! Вы настоящий птицевед!
        </p>
      ) : (
        <p className="end-game__compliment">
          Вы прошли викторину и набрали {score} из {30} возможных баллов
        </p>
      )}

      <button className="end-game__repeat-btn">Попробовать еще раз!</button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    score: state.score
  };
}
export default connect(mapStateToProps)(EndGame);
