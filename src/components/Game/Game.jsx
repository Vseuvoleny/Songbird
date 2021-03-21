import React, { useEffect } from "react";
import classes from "./Game.module.css";
import ActiveGame from "./ActiveGame/ActiveGame";
import Next from "../Button/Next";
import Header from "../Header/Header";
import BirdLevels from "./Nav/BirdLevels";
import EndGame from "./EndGame/EndGame";
import randomData from "../../Reducers/Random/randomData";
import { connect } from "react-redux";
// randomData();

export const Game = ({ score, questions, activeQuestion, isGameFinished }) => {
  return (
    <div className={classes.Game}>
      <Header score={score} />

      <BirdLevels />
      {isGameFinished ? (
        <EndGame
        // summary={(question.length - 1) * question[0].variants.length}
        // repeatStage={this.repeatGameHandler}
        />
      ) : (
        <div className={classes.current_game}>
          <ActiveGame />
          <Next />
        </div>
      )}
    </div>
  );
};

// class Game extends Component {

//   questionIsEnd() {
//     return this.state.question.length === this.state.activeQuestion + 1;
//   }

//   onAnswerClickHandler = info => {
//     const answer = this.state.question[this.state.activeQuestion].answers.id;
//     const trying = this.state.numofTrying;
//     this.setState({
//       currentAnswer: info,
//       numofTrying: trying - 1
//     });

//     if (answer === info.id) {
//       if (!this.state.isRight) {
//         this.setState({
//           score: trying < 0 ? 0 : this.state.score + trying,
//           answerState: { [info.id]: "success" },
//           isRight: true
//         });
//       } else {
//         this.setState({
//           answerState: { [info.id]: "success" },
//           numofTrying: 0
//         });
//       }
//     } else {
//       this.setState({ answerState: { [info.id]: "error" } });
//     }
//   };

//   NextClickHandler = () => {
//     if (this.questionIsEnd()) {
//       this.setState({ finished: !this.state.finished });
//     } else {
//       this.setState({
//         activeQuestion: this.state.activeQuestion + 1,
//         answerState: null,
//         isRight: false,
//         currentAnswer: null,
//         numofTrying: 5
//       });
//     }
//   };

//   repeatGameHandler = () => {
//     this.setState({
//       activeQuestion: 0,
//       answerState: null,
//       currentAnswer: null,
//       score: 0,
//       finished: !this.state.finished,
//       isRight: !this.state.isRight,
//       question: randomData()
//     });
//   };

//   render() {
//     const question = this.state.question;
// }

function mapStateToProps(state) {
  return {
    currentQuestion: state.currentQuestion,
    currentPlayerAnswer: state.currentPlayerAnswer,
    isAnswerRight: state.isAnswerRight,
    state: state.score,
    numberOfAttempts: state.numberOfAttempts,
    isGameFinished: state.isGameFinished,
    questions: state.questions,
    score: state.score
  };
}

export default connect(mapStateToProps)(Game);
