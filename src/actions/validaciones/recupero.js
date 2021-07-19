import { RECUPERO_USUARIO, SET_MESSAGE,METODOS_VALIDOS,METODOS_VALIDOS_INVOCADO,RECUPERO_SUCCESS,SUCCESSPASS } from "../types"
import { ChangePass, retriveUser, validarTOken, olvidoBloqueo, ValidadoresUsuarios,ValidadoresInvoca } from "./../../services/changePass";

export const recuperoClaveExpirada = (passOld, passNew) => (dispatch) => {

    return ChangePass(passOld,passNew).then(
        ({ data }) => {
            if (data.estado === "0") {
                dispatch({
                    type: SUCCESSPASS,
                    payload: { user: data },
                }); 
            } else {
                dispatch({
                    type: 'CLAVE_INVALIDA'
                });
            }
            return Promise.reject();
        }
    );
}

export const retrieveUser = (dataUser) => (dispatch) => {
    return retriveUser(dataUser.dni).then(
        ({ data }) => {
            if (data.estado === "0") {
                dispatch({
                    type: RECUPERO_USUARIO,
                    payload: { user: data.datos },
                });
            } else {
                dispatch({
                    type: SET_MESSAGE,
                    payload: data,
                })
            }
        }
    ).catch(e => console.log(e.message));
}



export const olvidoBloqueoUser = (dniUser, User, captcha) => (dispatch) => {

    return   olvidoBloqueo(dniUser, User,captcha).then(
        ({ data }) => {
            if (data.estado === "0") {
                     ValidadoresUsuarios(dniUser).then(
                            ({ data }) => {
                     if (data.estado === "0") {
                                        dispatch({
                                            type: METODOS_VALIDOS,
                                            payload: { user: data.validadores },
                                        });
                                    }
                                })
        }}
            ).catch(e => 
                dispatch({
                    type: SET_MESSAGE,
                    payload: e.message,
                })
                );
    
}


export const validadorLlamado = (validador)=> (dispatch) => {
    ValidadoresInvoca(validador).then(
        ({ data }) => {
                    console.log(data)
                        if (data.estado === "0") {
                            dispatch({
                                type: METODOS_VALIDOS_INVOCADO,
                                payload: { respuestaValidador: "0" },
                            });
                        } else {
                            dispatch({
                                type: SET_MESSAGE,
                                payload: data,
                            })
                        }
                    }
    )
}


export const validarToken = (tokenUser)=> (dispatch) => {
    validarTOken(tokenUser).then(
        ({ data }) => {
            console.log(data)
                        if (data.estado === "0") {
                            dispatch({
                                type: RECUPERO_SUCCESS,
                            });
                        } else {
                            dispatch({
                                type: SET_MESSAGE,
                                payload: data,
                            })
                        }
                    }
    )
}

export const recuperoUserSuccess = () => (dispatch) => {
    dispatch({
        type: RECUPERO_SUCCESS,
    });
}