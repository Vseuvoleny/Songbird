import React from "react";
import { connect } from "react-redux";
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

function mapStateToProps(state: any) {
  return {
    score: state.score,
  };
}

export default connect(mapStateToProps)(Header);
