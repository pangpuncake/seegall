import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  array: [],
};

const setArray = (state, action) => {
  return updateObject(state, {
    array: action.array,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ARRAY:
      return setArray(state, action);
    default:
      return state;
  }
};

export default reducer;
