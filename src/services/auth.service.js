import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_PUBLIC_URL;

export const register = (data) => {
  return axios.post(API_URL + "auth/signup", data, { headers: authHeader() })
};

export const AuthLogin = (username, password) => {
  return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login", {
    usuario: username,
    clave: password
  });
};

export const AuthLoginMultiple = (username, password,cuitSel) => {
  return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login", {
    usuario: username,
    clave: password,
    cuit:cuitSel
  });
}

export const AuthLogout = () => {
  localStorage.removeItem("user");
};
