import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE,LOGIN_MULTIPLE_CUIT,LOGIN_CLAVE_EXPIRADA } from "./types";
import { AuthLogin, AuthLogout,AuthLoginMultiple } from "../services/auth.service";
import { history } from "../helpers/history";


export const login = (numeroDocumento,username, password) => (dispatch) => {

  return AuthLogin(numeroDocumento,username, password).then(
    ({ data }) => {
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
        var Ndatos ={
          documento:numeroDocumento,
          respuesta:data,
          usuario:username,
          contaseña:password
        }
        dispatch({
          type: LOGIN_MULTIPLE_CUIT,
          payload: { user: Ndatos },
         });
         return Promise.resolve();
      }else if (data.estado === "CLAVE_EXPIRADA"){ 
      
        dispatch({
          type: LOGIN_CLAVE_EXPIRADA,
          payload: { passOld: password },
         });
      
    }
      else{
          dispatch({
            type: LOGIN_FAIL,
          });
          
        dispatch({
          type: SET_MESSAGE,
          payload: data,
        });

        return Promise.reject();

      }

      // localStorage.setItem("user", JSON.stringify(data));
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: { user: data },
      // });
      // history.push("/");
      // return Promise.resolve();
    }
    // ,
    // (error) => {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

    //   dispatch({
    //     type: LOGIN_FAIL,
    //   });

    //   dispatch({
    //     type: SET_MESSAGE,
    //     payload: message,
    //   });

    //   return Promise.reject();
    // }
  );
};



export const loginMultiple = (numeroDocumento,username, password,cuit) => (dispatch) =>{

  // var datos ={
  //   documento:numeroDocumento,
  //   usuario:username,
  //   pass:password,
  //   cuitSel:cuit}
  // localStorage.setItem("user", JSON.stringify(datos))
  //     dispatch({
  //      type: LOGIN_SUCCESS,
  //      payload: { user: datos },
  //     });
  return AuthLoginMultiple(numeroDocumento,username, password,cuit).then(
    ({ data }) => {
      if(data.estado === "0")
      {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({
       type: LOGIN_SUCCESS,
       payload: { user: data },
      });
    }else{
      console.log("error")
    }
    
    })
}


export const logout = () => (dispatch) => {
  AuthLogout();
  dispatch({
    type: LOGOUT,
  });
};
