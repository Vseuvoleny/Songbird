import React, { Component } from "react";
import classes from "./Game.module.css";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ActiveGame from "./ActiveGame/ActiveGame";
import Next from "../Button/Next";
import Header from "../Header/Header";
import Nav from "../Game/Nav/Nav";
import EndGame from "./EndGame/EndGame";
import randomData from "../../Reducers/Random/randomData";


randomData();

class Game extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    currentAnswer: null,
    isRight: false,
    score: 0,
    numofTrying: 5,
    finished: false,
    question: randomData()
  };

  questionIsEnd() {
    return this.state.question.length === this.state.activeQuestion + 1;
  }

  onAnswerClickHandler = info => {
    const answer = this.state.question[this.state.activeQuestion].answers.id;
    const trying = this.state.numofTrying;
    this.setState({
      currentAnswer: info,
      numofTrying: trying - 1
    });

    if (answer === info.id) {
      if (!this.state.isRight) {
        this.setState({
          score: trying < 0 ? 0 : this.state.score + trying,
          answerState: { [info.id]: "success" },
          isRight: true
        });
      } else {
        this.setState({
          answerState: { [info.id]: "success" },
          numofTrying: 0
        });
      }
    } else {
      this.setState({ answerState: { [info.id]: "error" } });
    }
  };

  NextClickHandler = () => {
    if (this.questionIsEnd()) {
      this.setState({ finished: !this.state.finished });
    } else {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        answerState: null,
        isRight: false,
        currentAnswer: null,
        numofTrying: 5
      });
    }
  };

  repeatGameHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      currentAnswer: null,
      score: 0,
      finished: !this.state.finished,
      isRight: !this.state.isRight,
      question: randomData()
    });
  };

  render() {
    const question = this.state.question;

    return (
      <div className={classes.Game}>
        <Header score={this.state.score} />
        <ErrorBoundary>
          <Nav state={this.state.activeQuestion} />
        </ErrorBoundary>

        {this.state.finished ? (
          <EndGame
            score={this.state.score}
            summary={(question.length - 1) * question[0].variants.length}
            repeatStage={this.repeatGameHandler}
          />
        ) : (
          <div className={classes.current_game}>
            <ActiveGame
              answers={question[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              activeQuestion={this.state.activeQuestion}
              variants={question[this.state.activeQuestion].variants}
              bird={question[this.state.activeQuestion].variants.name}
              info={question[this.state.activeQuestion].variants}
              state={this.state.answerState}
              currentAnswer={this.state.currentAnswer}
              showTitle={this.state.currentAnswer}
              isRight={this.state.isRight}
              score={this.state.score}
            />
            <Next
              disabled={!this.state.isRight}
              NextClickHandler={this.NextClickHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Game;
