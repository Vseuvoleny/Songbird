import React from "react";
import classes from "./BirdsList.module.css";
import BirdItem from "./BirdsItem/BirdItem";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const BirdsList = props => {
  return (
    <ul className={classes.birds_name}>
      <ErrorBoundary>
        {props.variants.map((bird, idx) => {
          return (
            <BirdItem
              key={idx}
              answer={props.id}
              answers={props.answers}
              onAnswerClick={props.onAnswerClick}
              info={bird}
              state={props.state ? props.state[bird.id] : null}
            />
          );
        })}
      </ErrorBoundary>
    </ul>
  );
};

export default BirdsList;
