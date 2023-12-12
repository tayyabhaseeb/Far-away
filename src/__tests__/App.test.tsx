/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("when we click on the delete all button does the confirm alert pop up", () => {
  render(<App />);
  const confirmWindow = jest.spyOn(window, "confirm");
  confirmWindow.mockImplementation(() => true);

  const deleteAllBtn = screen.getByRole("button", { name: /delete all/i });
  act(() => {
    userEvent.click(deleteAllBtn);
  });

  expect(confirmWindow).toHaveBeenCalled();
  expect(confirmWindow).toHaveBeenCalledWith(
    "Are you sure you want to delete them all"
  );
});
