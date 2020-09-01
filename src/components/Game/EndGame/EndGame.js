import React from "react";
import classes from "./EndGame.module.css";

const EndGame = props => {
  return (
    <div className={classes.EndGame}>
      <h1>Поздравляем!</h1>

      {props.score === props.summary ? (
        <p>Вы набрали максимальное количество баллов! Вы настоящий птицевед!</p>
      ) : (
        <p>
          Вы прошли викторину и набрали {props.score} из {props.summary}{" "}
          возможных баллов
        </p>
      )}

      <button onClick={props.repeatStage}>Попробовать еще раз!</button>
    </div>
  );
};

export default EndGame;
