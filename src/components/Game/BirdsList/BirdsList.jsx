import React, { useEffect, useState } from "react";
import classes from "./BirdsList.module.css";
import BirdItem from "./BirdsItem/BirdItem";
import { connect } from "react-redux";

const BirdsList = ({ questions, currentLevel }) => {
  useEffect(() => {
    setVariants(questions[currentLevel].variants);
  }, [currentLevel]);
  const [variants, setVariants] = useState(questions[currentLevel].variants);

  return (
    <ul className={classes.birds_name}>
      {variants.map(bird => {
        return (
          <BirdItem
            key={bird.id}
            // answer={props.id}
            // answers={props.answers}
            // onAnswerClick={props.onAnswerClick}
            // info={bird}
            // state={props.state ? props.state[bird.id] : null}
          />
        );
      })}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
    currentLevel: state.currentQuestion
  };
}

export default connect(mapStateToProps)(BirdsList);
