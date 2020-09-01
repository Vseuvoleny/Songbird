import React from "react";
import classes from "./App.module.css";
import Game from "./components/Game/Game";

function App() {
  return (
    <main className={classes.main}>
        <Game />
    </main>
  );
}

export default App;
