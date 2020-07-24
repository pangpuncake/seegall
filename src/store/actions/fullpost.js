import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fullPostStart = () => {
  return {
    type: actionTypes.FULL_POST_START,
  };
};

export const fullPostSuccess = (id, loadedPost) => {
  return {
    type: actionTypes.FULL_POST_SUCCESS,
    loadedPost: loadedPost,
    id: id,
  };
};

export const fullPostFail = (error) => {
  return {
    type: actionTypes.FULL_POST_FAIL,
    error: error,
  };
};

export const fetchFullPost = (id) => {
  return (dispatch) => {
    dispatch(fullPostStart());
    axios
      .get("https://seegall-d5efa.firebaseio.com/posts/" + id + ".json")
      .then((response) => {
        // console.log("response here! below");
        // console.log(response.data);
        dispatch(fullPostSuccess(id, response.data));
      })
      .catch((error) => {
        // console.log(error);
        dispatch(fullPostFail(error.response.data.error));
      });
  };
};

export const responseStart = () => {
  return {
    type: actionTypes.FULL_POST_START,
  };
};

export const responseSuccess = () => {
  return {
    type: actionTypes.FULL_POST_SUCCESS,
  };
};

export const responseFail = (error) => {
  return {
    type: actionTypes.FULL_POST_FAIL,
    error: error,
  };
};

export const uploadResponse = (id, email, value) => {
  return (dispatch) => {
    dispatch(responseStart());
    const responseData = {
      response: value,
      email: email,
    };
    axios
      .post(
        "https://seegall-d5efa.firebaseio.com/posts/" + id + "/responses.json",
        responseData
      )
      .then((response) => {
        // console.log(response.data);
        dispatch(responseSuccess());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(responseFail(error.response.data.error));
      });
  };
};

export const deleteResponseStart = () => {
  return {
    type: actionTypes.DELETE_RESPONSE_START,
  };
};

export const deleteResponseSuccess = () => {
  return {
    type: actionTypes.DELETE_RESPONSE_SUCCESS,
  };
};

export const deleteResponseFail = (error) => {
  return {
    type: actionTypes.DELETE_RESPONSE_FAIL,
    error: error,
  };
};

export const deleteResponse = (id, responseID) => {
  return (dispatch) => {
    dispatch(deleteResponseStart());
    axios
      .delete(
        "https://seegall-d5efa.firebaseio.com/posts/" +
          id +
          "/responses/" +
          responseID +
          "/.json"
      )
      .then((response) => {
        // console.log(response);
        dispatch(deleteResponseSuccess());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(deleteResponseFail(error.response.data.error));
      });
  };
};

export const deletePostStart = () => {
  return {
    type: actionTypes.DELETE_POST_START,
  };
};

export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    loadedPost: null,
    id: null,
  };
};

export const deletePostFail = (error) => {
  return {
    type: actionTypes.DELETE_POST_FAIL,
    error: error,
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch(deletePostStart());
    axios
      .delete("https://seegall-d5efa.firebaseio.com/posts/" + id + "/.json")
      .then((response) => {
        // console.log(response);
        dispatch(deletePostSuccess());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(deletePostFail(error.response.data.error));
      });
  };
};
