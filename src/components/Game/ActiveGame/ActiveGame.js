import React, { Fragment } from "react";
import classes from './ActiveGame.module.css'
import Player from "../Player/Player";
import BirdsList from "../BirdsList/BirdsList";
import BirdsTitle from "../BirdsTitle/BirdsTitle";

const ActiveGame = props => {


  return (
    <Fragment>
      <Player answers={props.answers} isRight={props.isRight} className={classes.player} audioref={props.audioref}/>
      <BirdsList
        onAnswerClick={props.onAnswerClick}
        variants={props.variants}
        answers={props.answers}
        info={props.info}
        state={props.state}
        activeQuestion={props.activeQuestion}
      />
      <BirdsTitle
        currentAnswer={props.currentAnswer}
        showTitle={props.showTitle}
      />
    </Fragment>
  );
};

export default ActiveGame;
