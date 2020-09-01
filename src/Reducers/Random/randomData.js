import birdsData from "../../Data/birdsData";
import random from "../../utils/randomize";

export default function randomData() {
  console.log(birdsData);
  const birdsRound = birdsData.map((birdArr, _idx) => {
    return { answers: birdArr[random(birdArr.length)], variants: birdArr };
  });
  console.log(birdsRound);
  
  return birdsRound
}

