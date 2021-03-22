import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

const Header = ({ score }) => (
  <header className="game-header">
    <div>
      <h1>
        <a href="#" className="game-header__link">
          Songbird
        </a>
      </h1>
    </div>
    <div>Score: {score}</div>
  </header>
);

function mapStateToProps(state) {
  return {
    score: state.score
  };
}

export default connect(mapStateToProps)(Header);
