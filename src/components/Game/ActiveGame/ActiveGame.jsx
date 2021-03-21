import React from "react";
import Player from "../Player/Player";
import { connect } from "react-redux";
import BirdsList from "../BirdsList/BirdsList";
import BirdsTitle from "../BirdsTitle/BirdsTitle";

const ActiveGame = props => {
  return (
    <>
      <Player />

      <BirdsList />
      {/*  onAnswerClick={props.onAnswerClick} */}

      {/*
      <BirdsTitle
        currentAnswer={props.currentAnswer}
        showTitle={props.showTitle}
      /> */}
    </>
  );
};

function mapStateToProps(state) {
  return {
    isAnswerRight: state.isAnswerRight
  };
}

export default connect(mapStateToProps)(ActiveGame);
