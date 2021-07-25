import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BirdsAnswer, BirdsData, State } from "../../../types/types";
import "./styles.scss";

type BirdsTitle = {
  questions: BirdsAnswer[];
  currentQuestion: number;
  isAnswerRight: boolean;
};

const BirdsTitle: React.FC<BirdsTitle> = ({
  questions,
  currentQuestion,
  isAnswerRight,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<BirdsData | undefined>(
    undefined
  );

  useEffect(() => {
    if (isAnswerRight) {
      setCurrentAnswer(questions[currentQuestion].rightAnswer);
    }
  }, [isAnswerRight]);

  return (
    <section className="section_about">
      {isAnswerRight && currentAnswer ? (
        <>
          <div className="img_about">
            <img src={currentAnswer!["image"]} alt={currentAnswer!["name"]} />
          </div>
          <div className="title_about">
            <h5>{currentAnswer!["name"]}</h5>
            <h5>{currentAnswer!["species"]}</h5>
            <audio controls src={currentAnswer!["audio"]}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
          <p className="about_p">{currentAnswer!["description"]}</p>
        </>
      ) : (
        <>
          <p className="about_rules">
            <span>Послушайте плеер</span>
            <span>Выберите птицу из списка</span>
          </p>
        </>
      )}
    </section>
  );
};

export default connect((state: State) => ({
  questions: state.questions,
  currentQuestion: state.currentQuestion,
  currentPlayerAnswer: state.currentPlayerAnswer,
  isAnswerRight: state.isAnswerRight,
}))(BirdsTitle);
