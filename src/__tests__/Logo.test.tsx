import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo";

test("does the heading match", () => {
  render(<Logo />);
  const heading = screen.getByRole("heading", { name: /🛫 far away 🚅/i });
  expect(heading).toBeInTheDocument();
});
