import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
// import { uiReducer } from "./uiReducer";

export default combineReducers({
  auth,
  message,
});
