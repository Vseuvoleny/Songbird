import React, { useState, useEffect, useRef } from "react";
import logo from "./images/swift.png";
import { fail, success } from "./MusicData/index";
import { connect } from "react-redux";
import "./styles.scss";

const Player = ({
  isAnswerRight,
  questions,
  currentLevel,
  currentPlayerAnswer
}) => {
  useEffect(() => {
    setCurrentQuestion(questions[currentLevel]);
  }, [currentLevel]);

  useEffect(() => {
    if (currentPlayerAnswer) {
      ref.current.play();
    }
  }, [currentPlayerAnswer]);

  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentLevel]
  );

  const ref = useRef(null);

  return (
    <>
      <div className="answer_effect hidden">
        <audio ref={ref} src={isAnswerRight ? success : fail}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      {isAnswerRight ? (
        <section className="player_section">
          <div className="img_block">
            <img
              className="img"
              src={currentQuestion.rightAnswer.image}
              alt={currentQuestion.rightAnswer.name}
            />
          </div>
          <div className="audio_block">
            <h5 className="title">{currentQuestion.rightAnswer.name}</h5>
            <hr />
            <div className="audio">
              <audio controls src={currentQuestion.rightAnswer.audio}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </section>
      ) : (
        <section className="player_section">
          <div className="img_block">
            <img className="img" src={logo} alt="birds" />
          </div>
          <div className="audio_block">
            <h5 className="title">****</h5>
            <hr />
            <div className="audio">
              <audio controls src={currentQuestion.rightAnswer.audio}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    isAnswerRight: state.isAnswerRight,
    questions: state.questions,
    currentLevel: state.currentQuestion,
    currentPlayerAnswer: state.currentPlayerAnswer
  };
}

export default connect(mapStateToProps)(Player);
