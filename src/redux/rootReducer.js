const initialState = {
  currentQuestion: 0,
  currentPlayerAnswer: null,
  isAnswerRight: false,
  score: 0,
  numberOfAttempts: 5,
  isGameFinished: false,
  questions: []
};

export default function rootReducer(state = initialState, action) {
  return state;
}
