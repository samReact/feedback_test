import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../parts/Form";

test("sets the input value on onChange event", () => {
  render(<Form />);
  const nameInput = screen.getByPlaceholderText("name");
  fireEvent.change(nameInput, { target: { value: "samir" } });
  expect(nameInput.value).toEqual("samir");
});

test("Submit button must be disabled", () => {
  const { getByRole } = render(<Form />);
  expect(getByRole("button")).toBeDisabled();
});
