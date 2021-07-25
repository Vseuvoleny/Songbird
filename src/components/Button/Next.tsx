import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

type NextButton = {
  isAnswerRight: boolean;
  nextQuestion: () => {};
};

const Next: React.FC<NextButton> = ({ isAnswerRight, nextQuestion }) => {
  return (
    <div className="button_next_container">
      <button
        disabled={!isAnswerRight}
        className="button"
        onClick={nextQuestion}
      >
        Next Level
      </button>
    </div>
  );
};

export default connect(
  (state: any) => ({ isAnswerRight: state.isAnswerRight }),
  (dispatch) => ({ nextQuestion: () => dispatch({ type: "NEXT_QUESTION" }) })
)(Next);
