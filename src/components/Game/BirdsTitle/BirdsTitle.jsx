import React, { Fragment } from "react";
import classes from "./BirdsTitle.module.css";

const BirdsTitle = props => {
  return (
    <>
      {props.showTitle ? (
        <section className={classes.section_about}>
          <div className={classes.img_about}>
            <img src={props.currentAnswer.image} alt="bird" />
          </div>
          <div className={classes.title_about}>
            <h5 className={classes.about_name}>{props.currentAnswer.name}</h5>
            <br />
            <h5 className={classes.about_lat}>{props.currentAnswer.species}</h5>
            <br />
            <audio controls src={props.currentAnswer.audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
          <p className={classes.about_p}>{props.currentAnswer.description}</p>
        </section>
      ) : (
        <section className={classes.section_about}>
          <p className={classes.about_rules}>
            <span>Послушайте плеер</span>
            <br />
            <span>Выберите птицу из списка</span>
          </p>
        </section>
      )}
    </>
  );
};

export default BirdsTitle;
