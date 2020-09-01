import React from "react";
import classes from "./Next.module.css";

const Next = props => {
  const cls = [classes.Next];
  props.disabled ? cls.push(classes.inactive) : cls.push(classes.active);

  return (
    <div className={classes.btn}>
      <button
        disabled={props.disabled}
        className={cls.join(" ")}
        onClick={props.NextClickHandler}
      >
        Next Level
      </button>
    </div>
  );
};

export default Next;
