import { ADD_COMMENT } from "./actions.constants";

import { comments } from "../utils/datas";

export const initialState = {
  comments,
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state };
    default:
      throw new Error();
  }
}

export default reducer;
