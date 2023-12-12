import { render, screen } from "@testing-library/react";
import Stats from "../components/Stats";
import "@testing-library/jest-dom";
import { ItemArrTypes } from "../App";

test("check the initial message of the component", () => {
  const arr: ItemArrTypes[] = [];

  render(<Stats initialItems={arr} />);

  const messageWithItem = screen.getByText(
    /Start adding some items to your packing list 🚀/i
  );

  expect(messageWithItem).toBeInTheDocument();
});

test("check the message of the component", () => {
  const arr = [{ id: 1, description: "Socks", quantity: 2, packed: false }];

  render(<Stats initialItems={arr} />);

  const messageWithItem = screen.getByText(
    /💼 you have 1 items on your list and you have packed 0 items 0 %/i
  );

  expect(messageWithItem).toBeInTheDocument();
});
