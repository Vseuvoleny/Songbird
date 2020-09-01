import React, { Fragment } from "react";
import classes from "./Player.module.css";
import logo from "./images/swift.png";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const Player = props => {
  return (
    <Fragment>
      {props.isRight ? (
        <ErrorBoundary>
          <section className={classes.player_section}>
            <div className={classes.img_block}>
              <img
                className={classes.image}
                src={props.answers.image}
                alt="birds"
              />
            </div>
            <div className={classes.audio_block}>
              <h5 className={classes.title}>{props.answers.name}</h5>
              <hr />
              <div className={classes.audio}>
                <audio controls src={props.answers.audio}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </div>
            </div>
          </section>
        </ErrorBoundary>
      ) : (
        <section className={classes.player_section}>
          <div className={classes.img_block}>
            <img className={classes.img} src={logo} alt="birds" />
          </div>
          <div className={classes.audio_block}>
            <h5 className={classes.title}>Здесь будет наименование птицы</h5>
            <hr />
            <div className={classes.audio}>
              <audio controls src={props.answers.audio}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Player;
