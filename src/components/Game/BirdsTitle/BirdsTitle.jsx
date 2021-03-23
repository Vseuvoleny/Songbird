import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";

const BirdsTitle = ({ questions, currentQuestion, currentPlayerAnswer }) => {
  useEffect(() => {
    const currentAnswer = questions[currentQuestion].variants.find(
      bird => currentPlayerAnswer === bird.id
    );
    setCurrentAnswer(currentAnswer);
  }, [currentPlayerAnswer]);

  const [currentAnswer, setCurrentAnswer] = useState(undefined);

  return (
    <section className="section_about">
      {currentAnswer ? (
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
    currentQuestion: state.currentQuestion,
    currentPlayerAnswer: state.currentPlayerAnswer
  };
}

export default connect(mapStateToProps)(BirdsTitle);
