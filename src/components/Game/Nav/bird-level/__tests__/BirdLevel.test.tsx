import React from "react";
import { render, screen } from "@testing-library/react";
import BirdLevel from "../BirdLevel";

describe("BirdLevel", () => {
  test("should render BirdLevelComponent", () => {
    render(<BirdLevel title={"Title"} addActive={"active"} />);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toHaveClass("item active");
  });
});
