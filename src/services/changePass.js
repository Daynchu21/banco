import axios from "axios";
import ENV from "../env";

export const ChangePass = (passOld,PassNew) => {
    // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/cambiar-clave", {
    return axios.post(ENV.BASE_URL + "/ob/api/cambiar-clave", {
      clave: PassNew ,
      claveAnterior:passOld
    },{ withCredentials: true });
  };

export const retriveUser = (dniUser) => {
  // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/recuperar-usuario", {
  return axios.post(ENV.BASE_URL + "/ob/api/recuperar-usuario", {
    numeroDocumento:dniUser
  })
}


// export const validarCaptcha = (captchaUser) =>{
// return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/validar-captcha",{
//   captcha:captchaUser
// })
// }

export const olvidoBloqueo = (dniUser,user,captchaUser) => {
  // return axios.post("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/pseudo-login",{
  return axios.post(ENV.BASE_URL + "/ob/api/pseudo-login",{
    numeroDocumento:dniUser,
    usuario:user,
    captcha:captchaUser
  },{ withCredentials: true })
}

export const ValidadoresUsuarios = (dniUser) => {
  // return axios.post ("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/validadores",{
  return axios.post (ENV.BASE_URL + "/ob/api/validadores",{
    numeroDocumento:dniUser
  },{ withCredentials: true })
}

export const ValidadoresInvoca = (valida) => {
  // return axios.post ("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/enviar-token",{
  return axios.post (ENV.BASE_URL + "/ob/api/enviar-token",{
    validador:valida
  },{ withCredentials: true })
}


export const validarTOken = (tokenUser) => {
  // return axios.post ("http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/validar-token",{
  return axios.post (ENV.BASE_URL + "/ob/api/validar-token",{
    token:tokenUser
  },{ withCredentials: true })
}
