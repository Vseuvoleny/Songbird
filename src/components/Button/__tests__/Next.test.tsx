import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Next from "../Next";

describe("Next", () => {
  test("should render Next button component", () => {
    const handleClick = jest.fn();
    render(<Next isAnswerRight={true} nextQuestion={handleClick} />);
    expect(screen.getByText(/Next Level/i)).toBeInTheDocument();
    expect(screen.getByText(/Next Level/i)).not.toBeDisabled();
  });

  test("should clicked", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Next isAnswerRight={true} nextQuestion={handleClick} />
    );
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getByText(/Next Level/i));
    expect(handleClick).toHaveBeenCalled();
  });
});
