import React from "react";
import Player from "../Player/Player";
import BirdsList from "../BirdsList/BirdsList";
import BirdsTitle from "../BirdsTitle/BirdsTitle";

const ActiveGame = () => {
  return (
    <>
      <Player />
      <BirdsList />
      <BirdsTitle />
    </>
  );
};

export default ActiveGame;
