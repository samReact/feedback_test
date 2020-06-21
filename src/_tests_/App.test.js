import React from "react";
import { render, screen } from "@testing-library/react";

import { StateContext } from "../App";
import { initialState } from "../store/reducer";

test("StateConsumer receive initial 6 comments from provider", () => {
  render(
    <StateContext.Provider value={initialState}>
      <StateContext.Consumer>
        {(value) => <span>Received: {value.comments.length}</span>}
      </StateContext.Consumer>
    </StateContext.Provider>
  );
  expect(screen.getByText(/^Received:/).textContent).toBe("Received: 6");
});

test("StateConsumer receive initial 5 data rating from provider", () => {
  render(
    <StateContext.Provider value={initialState}>
      <StateContext.Consumer>
        {(value) => <span>Received: {value.data.length}</span>}
      </StateContext.Consumer>
    </StateContext.Provider>
  );
  expect(screen.getByText(/^Received:/).textContent).toBe("Received: 5");
});
