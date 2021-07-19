import axios from "axios";
import authHeader from "./auth-header";
import ENV from "../env";
const API_URL = process.env.REACT_APP_PUBLIC_URL;

export const register = (data) => {
  return axios.post(API_URL + "auth/signup", data, { headers: authHeader() })
};

export const AuthLogin = (documento,username, password) => {
  // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login", {
  return axios.post(ENV.BASE_URL + "/ob/api/login", {
    numeroDocumento:documento,
    usuario: username,
    clave: password
  });
};

export const AuthLoginMultiple = (dni,username, password,cuitSel) => {
  // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login", {
  return axios.post(ENV.BASE_URL + "ob/api/login", {
    numeroDocumento:dni,
    usuario: username,
    clave: password,
    cuit:cuitSel
  });
}

export const CreatePass = (username, password) => {
  // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login", {
  return axios.post(ENV.BASE_URL + "/ob/api/login", {
    usuario: username,
    clave: password
  });
};

// export const AuthLogout = () => {
//   localStorage.removeItem("user");
// };


export const AuthLogout = () => {
  localStorage.removeItem("user");
  // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/logout")
  return axios.post(ENV.BASE_URL + "/ob/api/logout")
};