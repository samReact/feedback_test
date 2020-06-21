import React from "react";
import { render, screen } from "@testing-library/react";

import Comment from "../parts/Comment";

const comment = {
  id: 0,
  name: "samir",
  comment: "Amazing !",
  email: "samir@checkout.ae",
  date: "June 21, 2020",
};

test("comment is displayed correctly", () => {
  const { getByText } = render(<Comment comment={comment} />);
  expect(getByText("samir")).toBeInTheDocument();
  expect(screen.getByTestId("comment").textContent).toBe("Amazing !");
  expect(screen.getByText(/Posted by/i).textContent).toBe(
    "Posted by samir@checkout.ae on June 21, 2020"
  );
});
