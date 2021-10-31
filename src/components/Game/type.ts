

export interface IGame {
    isGameFinished: boolean;
    currentQuestion: number;
    questions: any[];
    gameOver: Function;
    nextQuestion: Function;
    isAnswerRight: boolean;
}