import React from "react";

import { render, screen } from "@testing-library/react";
import Comments from "../parts/Comments";
import { StateContext } from "../App";
import { initialState } from "../store/reducer";

test("correct numbers of initial comments are rendered", () => {
  const { container } = render(
    <StateContext.Provider value={initialState}>
      <StateContext.Consumer>{(value) => <Comments />}</StateContext.Consumer>
    </StateContext.Provider>
  );
  let elt = container.firstChild.children;
  expect(elt).toHaveLength(6);
});
