import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Buttons";

describe("testing Button component", () => {
  it("renders with children and onClick handler", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
