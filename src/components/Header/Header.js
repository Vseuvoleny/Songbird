import React from "react";
import classes from "./Header.module.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Header = props => {
  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <h1>
          <a href="/" className={classes.a}>
            Songbird
          </a>
        </h1>
      </div>
      <ErrorBoundary>
        <div className={classes.score}>Score: {props.score}</div>
      </ErrorBoundary>
    </header>
  );
};

export default Header;
