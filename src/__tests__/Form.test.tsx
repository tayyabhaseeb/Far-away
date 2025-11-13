/* eslint-disable testing-library/no-unnecessary-act */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("check that inputs and buttons are present in the document", () => {
  render(<Form setInitialItems={() => {}} />);

  const select = screen.getByRole("combobox");
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  expect(select).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("when we click the button the item is added to the list of array", () => {
  const mock = jest.fn();
  render(<Form setInitialItems={mock} />);

  const select = screen.getByRole("combobox");
  act(() => {
    userEvent.click(select);
  });

  act(() => {
    userEvent.selectOptions(select, "1");
  });

  const input = screen.getByRole("textbox");

  act(() => {
    userEvent.click(input);
  });

  act(() => {
    userEvent.type(input, "socks");
  });

  const button = screen.getByRole("button");
  act(() => {
    userEvent.click(button);
  });

  expect(mock).toHaveBeenCalled();
});

test("check when we click add button does that input goes empty and select goes to 1", () => {
  const mock = jest.fn();
  render(<Form setInitialItems={mock} />);

  const select = screen.getByRole("combobox");
  act(() => {
    userEvent.click(select);
  });

  act(() => {
    userEvent.selectOptions(select, "1");
  });

  const input = screen.getByRole("textbox");

  act(() => {
    userEvent.click(input);
  });

  act(() => {
    userEvent.type(input, "socks");
  });

  const button = screen.getByRole("button");
  act(() => {
    userEvent.click(button);
  });

  expect(mock).toHaveBeenCalled();
  expect(input).toHaveValue("");
  expect(select).toHaveValue("1");
});
