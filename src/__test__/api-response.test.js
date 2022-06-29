import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/node";
import faker from "faker";
import ApiRequest from "../components/api-request";

const server = setupServer(
  rest.get("https://rickandmortyapi.com/api/character/?page=1"),
  async (req, res, ctx) => {
    return res(ctx.json(res.status(200).json()));
  }
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("api request to return 20 names of rick and morty characters", async () => {
  render(<ApiRequest />);

  //   async window.fetch()

  // eslint-disable-next-line testing-library/prefer-query-by-disappearance
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));
  // eslint-disable-next-line testing-library/prefer-query-by-disappearance
  //   await waitForElementToBeRemoved(() => screen.getByText(/error/i));
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
