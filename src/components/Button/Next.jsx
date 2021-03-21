import React from "react";
import { connect } from "react-redux";
import classes from "./Next.module.css";

const Next = ({ isAnswerRight, nextQuestion }) => {
  const cls = [classes.Next];
  isAnswerRight ? cls.push(classes.active) : cls.push(classes.inactive);

  return (
    <div className={classes.btn}>
      <button
        disabled={!isAnswerRight}
        className={cls.join(" ")}
        onClick={nextQuestion}
      >
        Next Level
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAnswerRight: state.isAnswerRight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextQuestion: () => dispatch({ type: "NEXT_QUESTION" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);
