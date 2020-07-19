import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loading: false,
  error: null,
  commands: [],
  algorithm: "createFunction",
  code: `//Do not modify the function name.\nconst createFunction = (arr) => {
    //Your code here
    return arr;\n};`,
  completedGet: true,
};

const codeStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const codeSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    commands: action.commands,
  });
};

const codeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const updateCodeStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    completedGet: false,
  });
};

const updateCodeSuccess = (state, action) => {
  return updateObject(state, {
    algorithm: action.algorithm,
    code: action.code,
    loading: false,
    completedGet: true,
  });
};

const updateCodeFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
    code: "//ERROR! Please Try Again.",
    completedGet: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CODE_START:
      return codeStart(state, action);
    case actionTypes.CODE_SUCCESS:
      return codeSuccess(state, action);
    case actionTypes.CODE_FAIL:
      return codeFail(state, action);
    case actionTypes.UPDATE_CODE_START:
      return updateCodeStart(state, action);
    case actionTypes.UPDATE_CODE_SUCCESS:
      return updateCodeSuccess(state, action);
    case actionTypes.UPDATE_CODE_FAIL:
      return updateCodeFail(state, action);
    default:
      return state;
  }
};

export default reducer;
