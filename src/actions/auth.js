import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";
import { AuthLogin, AuthLogout } from "../services/auth.service";
import { history } from "../helpers/history";



export const login = (username, password) => (dispatch) => {
  return AuthLogin(username, password).then(
    ({ data }) => {
      console.log(data)
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      history.push("/");
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthLogout();
  dispatch({
    type: LOGOUT,
  });
};
