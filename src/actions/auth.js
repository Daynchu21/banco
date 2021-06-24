import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE,LOGIN_MULTIPLE_CUIT } from "./types";
import { AuthLogin, AuthLogout } from "../services/auth.service";
import { history } from "../helpers/history";



export const login = (username, password) => (dispatch) => {

  return AuthLogin(username, password).then(
    ({ data }) => {
      //console.log(PropTypes.object)
      
      debugger
      if(data.estado === "0")
      {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({
       type: LOGIN_SUCCESS,
       payload: { user: data },
      });
      history.push("/");
      return Promise.resolve();
      }else if (data.estado === "MULTIPLES_CUITS")
      {
        dispatch({
          type: LOGIN_MULTIPLE_CUIT,
          payload: { user: data },
         });
        // history.push({ ...location,"/MultipleCuit"});
        history.push("/MultipleCuit");
         return Promise.resolve();
      }

      // localStorage.setItem("user", JSON.stringify(data));
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: { user: data },
      // });
      // history.push("/");
      // return Promise.resolve();
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
