import * as actionTypes from "./actionTypes";
import axios from "axios";

export const codeStart = () => {
  return {
    type: actionTypes.CODE_START,
  };
};

export const codeSuccess = (resData) => {
  return {
    type: actionTypes.CODE_SUCCESS,
    commands: resData.commands,
  };
};

export const codeFail = (error) => {
  return {
    type: actionTypes.CODE_FAIL,
    error: error,
  };
};

export const updateCodeStart = () => {
  return {
    type: actionTypes.UPDATE_CODE_START,
  };
};

export const updateCodeSuccess = (algorithm, code) => {
  console.log("actions - updateCode");
  return {
    type: actionTypes.UPDATE_CODE_SUCCESS,
    algorithm: algorithm,
    code: code,
  };
};

export const updateCodeFail = (error) => {
  return {
    type: actionTypes.UPDATE_CODE_FAIL,
    error: error,
  };
};

export const postCode = (code, algorithm, array) => {
  return (dispatch) => {
    dispatch(codeStart());
    let postBody = {
      code: code + `${algorithm}([${array}]);`,
    };
    console.log(postBody);
    axios
      .post("http://localhost:5000/api/code", postBody)
      .then((res) => {
        console.log(res);
        dispatch(codeSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(codeFail(err));
      });
  };
};

export const getSort = (algorithm) => {
  return (dispatch) => {
    dispatch(updateCodeStart());
    axios
      .get(`http://localhost:5000/api/code/sorting/${algorithm}`)
      .then((res) => {
        console.log(res);
        dispatch(
          updateCodeSuccess(
            algorithm.replace(/^\w/, (chr) => chr.toLowerCase()),
            res.data.code
          )
        );
      })
      .catch((err) => {
        dispatch(updateCodeFail(err));
      });
  };
};
