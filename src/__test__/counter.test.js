import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../components/counter";

test("counter increment and decrement when buttons are clicked", () => {
  render(<Counter />);
  const increment = screen.getByRole("button", { name: /increment/i });
  const decrement = screen.getByRole("button", { name: /decrement/i });
  const message = screen.getByText(/current count/i);

  expect(message).toHaveTextContent("Current count: 0");
  userEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 1");
  userEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 0");
});
