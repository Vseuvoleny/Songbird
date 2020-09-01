import birdsData from "../../Data/birdsData";
import random from "../../utils/randomize";

export default function randomData() {
  const birdsRound = birdsData.map((birdArr, _idx) => {
    return { answers: birdArr[random(birdArr.length)], variants: birdArr };
  });

  return birdsRound;
}
