import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import faker from "faker";
import Form from "../components/form";

const buildLoginForm = (overrides) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  };
};

test("form to alert username and password when submitted", () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);
  const { username, password } = buildLoginForm();

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
