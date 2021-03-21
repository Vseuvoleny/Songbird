import React from "react";
import classes from "./Navitems.module.css";

const Item = props => {
  const cls = [classes.Item];
  if (props.state){
    cls.push(classes.active)
  }
  return <li className={cls.join(" ")}>{props.title}</li>;
};

export default Item;
