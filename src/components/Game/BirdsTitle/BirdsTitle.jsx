import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";

const BirdsTitle = ({ questions, isAnswerRight, currentQuestion }) => {
  useEffect(() => {
    setCurrentAnswer(questions[currentQuestion]);
  }, [currentQuestion]);

  const [currentAnswer, setCurrentAnswer] = useState(
    questions[currentQuestion]
  );

  return (
    <section className="section_about">
      {isAnswerRight ? (
        <>
          <div className="img_about">
            <img src={currentAnswer.image} alt={currentAnswer.name} />
          </div>
          <div className="title_about">
            <h5>{currentAnswer.name}</h5>
            <h5>{currentAnswer.species}</h5>
            <audio controls src={currentAnswer.audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
          <p className="about_p">{currentAnswer.description}</p>
        </>
      ) : (
        <p className="about_rules">
          <span>Послушайте плеер</span>
          <span>Выберите птицу из списка</span>
        </p>
      )}
    </section>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
    isAnswerRight: state.isAnswerRight,
    currentQuestion: state.currentQuestion
  };
}

export default connect(mapStateToProps)(BirdsTitle);
