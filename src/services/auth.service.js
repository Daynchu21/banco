import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_PUBLIC_URL;

export const register = (data) => {
  return axios.post(API_URL + "auth/signup", data, { headers: authHeader() })
};

export const AuthLogin = (username, password) => {
  return axios.post(API_URL + "auth/signin", {
    email: username,
    password,
  });
};

export const AuthLogout = () => {
  localStorage.removeItem("user");
};
