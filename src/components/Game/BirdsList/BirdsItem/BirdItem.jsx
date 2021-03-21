import React from "react";
import "./styles.scss";

const BirdItem = ({ title, setPlayerAnswer, answer }) => {
  return (
    <li className="bird-item" onClick={() => setPlayerAnswer(answer)}>
      {title}
    </li>
  );
};

export default BirdItem;
