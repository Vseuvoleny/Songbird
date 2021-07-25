import React, { useState, useEffect, useRef } from "react";
import logo from "./images/swift.png";
import { fail, success } from "./MusicData/index";
import { connect } from "react-redux";
import "./styles.scss";
import { State } from "../../../types/types";

type Player = {
  isAnswerRight: boolean;
  questions: any;
  currentLevel: number;
  currentPlayerAnswer: number;
};

const Player = ({
  isAnswerRight,
  questions,
  currentLevel,
  currentPlayerAnswer,
}: Player) => {
  useEffect(() => {
    setCurrentQuestion(questions[currentLevel].rightAnswer);
  }, [currentLevel]);

  useEffect(() => {
    if (currentPlayerAnswer && ref.current) {
      ref.current.play();
    }
  }, [currentPlayerAnswer]);

  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentLevel]
  );

  const ref = useRef<HTMLAudioElement>(null);

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
              src={currentQuestion.image}
              alt={currentQuestion.name}
            />
          </div>
          <div className="audio_block">
            <h5 className="title">{currentQuestion.name}</h5>
            <hr />
            <div className="audio">
              <audio controls src={currentQuestion.audio}>
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
              <audio controls src={currentQuestion.audio}>
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

function mapStateToProps(state: any) {
  return {
    isAnswerRight: state.isAnswerRight,
    questions: state.questions,
    currentLevel: state.currentQuestion,
    currentPlayerAnswer: state.currentPlayerAnswer,
  };
}

export default connect(mapStateToProps)(Player);
