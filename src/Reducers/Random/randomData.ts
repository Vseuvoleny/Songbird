import { randomize } from "../../utils/randomize";
import { BirdsData, BirdsAnswer } from '../../types/types'

const randomData = (data: BirdsData[][]): any[] => {

  const x = data.map((birds: any) => {
    return ({

      rightAnswer: birds[randomize(birds.length)],
      variants: birds
    })
  })

  return x
};

export default randomData;
