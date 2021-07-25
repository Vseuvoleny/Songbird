import { randomize } from "../../utils/randomize";
import { BirdsData, BirdsAnswer } from '../../types/types'

const randomData = (data: BirdsData[][]): BirdsAnswer[] => data.map((birds: BirdsData[]) =>
({
  rightAnswer: birds[randomize(birds.length)],
  variants: birds
})
);

export default randomData;
