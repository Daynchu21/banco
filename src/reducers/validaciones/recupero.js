  import {
    RECUPERO_USUARIO,
    METODOS_VALIDOS,
    RECUPERO_SUCCESS,
    METODOS_VALIDOS_INVOCADO
  } from "../../actions/types"
  
  const user = JSON.parse(localStorage.getItem("user"));
  const validador = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user,validador }
    : { isLoggedIn: false, user: null, validador: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case METODOS_VALIDOS:
        return {
          ...state,
          isLoggedIn: false,
          validador:payload.user
          // user: payload.user,
        };
      case METODOS_VALIDOS_INVOCADO:
        return {
          ...state,
          isLoggedIn: false,
          // validador:payload.respuestaValidador,
          user:payload.respuestaValidador
        };
        case RECUPERO_USUARIO:
        return {
          ...state,
          isLoggedIn: false,
          user: payload.user,
        };
        case RECUPERO_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
            validador:null
          };
      default:
        return state;
    }
  }
  