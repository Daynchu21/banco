import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import retrieve from "./validaciones/recupero"
// import { uiReducer } from "./uiReducer";

export default combineReducers({
  auth,
  message,
  retrieve 
});
