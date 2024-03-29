import React from "react";
import { connect } from "react-redux";
import { State } from "../../types/types";
import "./styles.scss";

type Header = {
  score: number;
};

const Header: React.FC<Header> = ({ score }) => (
  <header className="game-header">
    <h1>
      <a href="#" className="game-header__link">
        Songbird
      </a>
    </h1>
    <div>Score: {score}</div>
  </header>
);

export default connect((state: State) => ({
  score: state.score,
}))(Header);
