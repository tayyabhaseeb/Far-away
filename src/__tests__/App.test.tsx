/* eslint-disable testing-library/no-unnecessary-act */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("check whether clicking the add button add items to the list", () => {
  render(<App />);

  const select = screen.getByTestId("select");
  const input = screen.getByRole("textbox");
  const button = screen.getByTestId("addBtn");
  act(() => {
    userEvent.click(select);
  });

  act(() => {
    userEvent.selectOptions(select, "1");
  });
  act(() => {
    userEvent.click(input);
  });
  act(() => {
    userEvent.type(input, "socks");
  });
  act(() => {
    userEvent.click(button);
  });

  const item = screen.getByText(/1 socks/i);

  expect(item).toBeInTheDocument();
});

test("when we click on the delete all button does the confirm alert pop up", () => {
  render(<App />);
  const confirmWindow = jest.spyOn(window, "confirm");
  confirmWindow.mockImplementation(() => true);

  const deleteAllBtn = screen.getByRole("button", { name: /delete all/i });
  act(() => {
    userEvent.click(deleteAllBtn);
  });

  expect(confirmWindow).toHaveBeenCalledWith(
    "Are you sure you want to delete them all",
  );
});

test("when add item to the list the footer message changes every time", () => {
  render(<App />);

  const select = screen.getByTestId("select");
  const input = screen.getByRole("textbox");
  const button = screen.getByTestId("addBtn");
  act(() => {
    userEvent.click(select);
  });

  act(() => {
    userEvent.selectOptions(select, "1");
  });
  act(() => {
    userEvent.click(input);
  });
  act(() => {
    userEvent.type(input, "socks");
  });
  act(() => {
    userEvent.click(button);
  });
  const footerMessage = screen.getByTestId("footerMessage");
  expect(footerMessage).toHaveTextContent(
    "💼 You have 1 items on your list and you have packed 0 items 0 %",
  );
});

test("when click the checkbox footer message changes every time", () => {
  render(<App />);

  const select = screen.getByTestId("select");
  const input = screen.getByRole("textbox");
  const button = screen.getByTestId("addBtn");
  act(() => {
    userEvent.click(select);
  });

  act(() => {
    userEvent.selectOptions(select, "1");
  });
  act(() => {
    userEvent.click(input);
  });
  act(() => {
    userEvent.type(input, "socks");
  });
  act(() => {
    userEvent.click(button);
  });

  const deleteBtn = screen.getByRole("button", { name: /❌/i });

  act(() => {
    userEvent.click(deleteBtn);
  });

  const footerMessage = screen.getByTestId("footerMessage");
  expect(footerMessage).toHaveTextContent(
    "Start adding some items to your packing list 🚀",
  );
});
