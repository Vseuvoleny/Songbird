import React from "react";
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
export default Header;
