export type BirdsData = {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
};

export type BirdsAnswer = {
  variants: BirdsData[];
  rightAnswer: BirdsData;
};

export type State = {
  currentQuestion: number;
  currentPlayerAnswer: null | number;
  isAnswerRight: boolean;
  score: number;
  numberOfAttempts: number;
  isGameFinished: boolean;
  questions: BirdsAnswer[];
};
