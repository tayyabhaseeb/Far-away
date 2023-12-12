/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from "@testing-library/react";
import PackingList from "../components/PackingList";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

function componentTest() {
  const initialData = [
    { id: 1, description: "Socks", quantity: 2, packed: false },
  ];
  const handleChangeMock = jest.fn();
  const deleteItemMock = jest.fn();
  const handleClearMock = jest.fn();

  render(
    <PackingList
      initialItems={initialData}
      handleChange={handleChangeMock}
      deleteItem={deleteItemMock}
      handleClear={handleClearMock}
    />
  );

  return {
    initialData,
    handleChangeMock,
    deleteItemMock,
    handleClearMock,
  };
}

test("check where there is one select and one button  is present", () => {
  componentTest();
  const selectOptions = screen.getByRole("combobox");
  const allDeleteBtn = screen.getByRole("button", { name: /delete all/i });

  expect(selectOptions).toBeInTheDocument();
  expect(allDeleteBtn).toBeInTheDocument();
});

test("does the wanted item and delete of it exists in the document", () => {
  componentTest();

  const deleteBtn = screen.getByRole("button", { name: /❌/i });
  const item = screen.getByText(/2 socks/i);
  expect(deleteBtn).toBeInTheDocument();
  expect(item).toBeInTheDocument();
});

test("when we click deleteAll button will all items will be removed", () => {
  const { handleClearMock } = componentTest();

  const deleteAllBtn = screen.getByRole("button", { name: /delete all/i });
  act(() => {
    userEvent.click(deleteAllBtn);
  });
  expect(handleClearMock).toHaveBeenCalled();
});
