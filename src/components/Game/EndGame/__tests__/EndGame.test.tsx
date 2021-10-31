import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import rootReducer from "../../../../redux/rootReducer";
import EndGame from "../EndGame";

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Redux", () => {
  test("should check", () => {
    const handleClick = jest.fn();

    const { getByText } = renderWithRedux(
      <EndGame
        score={30}
        questions={Array.from("").fill("", 0, 6)}
        startNewGame={handleClick}
      />
    );
    expect(screen.getByText("Поздравляем!")).toBeInTheDocument();
  });
});
