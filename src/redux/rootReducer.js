import randomData from "../Reducers/Random/randomData";

const initialState = {
  currentQuestion: 0,
  currentPlayerAnswer: null,
  isAnswerRight: false,
  score: 0,
  numberOfAttempts: 5,
  isGameFinished: false,
  questions: randomData()
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "PLAYER_ANSWER":
      return {
        ...state,
        currentPlayerAnswer: action.payload
      };

    case "ANSWER_WAS_RIGHT":
      return {
        ...state,
        isAnswerRight: true,
        score: state.score + action.payload
      };

    case "ANSWER_WAS_WRONG":
      return {
        ...state,
        numberOfAttempts: state.numberOfAttempts - 1
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
  }

  return state;
}

// const setAnswer = {
//   type: "setAnswer"
// };
