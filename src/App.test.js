import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Clicking delete all should show the confirm alert", () => {
    render(<App />);
    const mockConfirm = jest.spyOn(window, 'confirm');
    mockConfirm.mockImplementation(() => true);
    screen.getByText("Delete All").click();
    expect(mockConfirm).toHaveBeenCalledWith('Are you sure you want to delete them all');
  });




  
});





