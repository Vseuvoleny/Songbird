import React from "react";
import classes from "./BirdItem.module.css";

const BirdItem = props => {
  const cls = [classes.BirdItem];
  
  if (props.state) {
    console.log(props.state);
    
    cls.push(classes[props.state]);
  }

  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.info)}
    >
      {props.info.name}
    </li>
  );
};

export default BirdItem;
