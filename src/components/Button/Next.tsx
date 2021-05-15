import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

interface INext {
  isAnswerRight: boolean;
  nextQuestion: any;
}

const Next: React.FC<INext> = ({ isAnswerRight, nextQuestion }) => {
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

function mapStateToProps(state: any) {
  return {
    isAnswerRight: state.isAnswerRight
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    nextQuestion: () => dispatch({ type: "NEXT_QUESTION" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);
