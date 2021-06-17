import { SET_MESSAGE, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

import { register } from "../services/auth.service";

export const createNewUser = (data) => (dispatch) => {
  return register(data).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { message: response.data.message, type: "success" },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = { message: error.response.data.message, type: "error" };

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
