import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

interface IHeader {
  score: number;
}

const Header: React.FC<IHeader> = ({ score }) => (
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

function mapStateToProps(state: any) {
  return {
    score: state.score
  };
}

export default connect(mapStateToProps)(Header);
