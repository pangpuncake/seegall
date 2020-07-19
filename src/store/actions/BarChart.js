import * as actionTypes from "./actionTypes";

export const setArray = (array) => {
  return {
    type: actionTypes.SET_ARRAY,
    array: array,
  };
};
