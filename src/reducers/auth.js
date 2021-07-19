import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_MULTIPLE_CUIT,
    LOGIN_FAIL,
    LOGIN_CLAVE_EXPIRADA,
    SUCCESSPASS,
    LOGOUT,
  } from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  const validaciones = JSON.parse(localStorage.getItem("validaciones"));
  
  const initialState = user
    ? { isLoggedIn: true, user,validaciones }
    : { isLoggedIn: false, user: null,validaciones:null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
        case LOGIN_MULTIPLE_CUIT:
          {
            return {
              ...state,
              isLoggedIn:false,
              user:payload.user
            }
          }
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
        case LOGIN_CLAVE_EXPIRADA:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
            validaciones:payload.passOld
          };
          case SUCCESSPASS:
            return {
              ...state,
              isLoggedIn: false,
              user: payload.user,
              // validaciones:null
            };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          validaciones:null
        };
      default:
        return state;
    }
  }
  