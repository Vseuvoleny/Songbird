import birdsData from "../../Data/birdsData";
import randomize from "../../utils/randomize";

const randomData = () =>
  birdsData.map(birds => ({
    rightAnswer: birds[randomize(birds.length)],
    variants: birds
  }));

export default randomData;
