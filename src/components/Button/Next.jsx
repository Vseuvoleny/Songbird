import React from "react";
import classes from "./Next.module.css";

const Next = ({ disabled, NextClickHandler }) => {
  const cls = [classes.Next];
  disabled ? cls.push(classes.inactive) : cls.push(classes.active);

  return (
    <div className={classes.btn}>
      <button
        disabled={disabled}
        className={cls.join(" ")}
        onClick={NextClickHandler}
      >
        Next Level
      </button>
    </div>
  );
};

export default Next;
