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
    case "setAnswer":
      return {
        ...state,
        currentPlayerAnswer: action.payload
      };
  }

  return state;
}

const setAnswer = {
  type: "setAnswer"
};
