//http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login

//     http://localhost:8080/ob/api/login
//     JSON 
//     {​​​​​​​
//     "usuario": "Febrero04",
//     "clave": "40000004"
// }​​​​​​​



import React,{useState} from 'react'
const axios = require('axios');
const Swal = require('sweetalert2')


export default function Login() {

    const [DatosUsuario,SetDatosUsuarios] = useState({
        Usuario: '',
        Pass: ''
    })
   const [Enviado,SetEnviado] = useState(false)

   const handleChange =(e) =>{
    SetDatosUsuarios({
        ...DatosUsuario,
        [e.target.name] : e.target.value
    })
    }

  const  handleSubmit= (e) => {
    e.preventDefault()
    SetEnviado(true)
    console.log(process.env )
    if (!DatosUsuario.Pass && !DatosUsuario.Usuario)
    {
        console.log("por favor complete los datos")
    }else
    {
       axios.post('http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login', {
        usuario: DatosUsuario.Usuario,
        clave: DatosUsuario.Pass
          })
          .then(function (response) {
              if((response.data).hasOwnProperty('datos'))
              {
                Swal.fire('Login Exitoso', response.data.datos.cuit, 'success')
              }else
              {
                Swal.fire('', "Los datos ingresados no son válidos", 'error')
              }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

}



return(
    <div style={{ background: "#fbfbfb",borderradius: "8px",boxshadow: "1px 2px 8px rgba(0, 0, 0, 0.65)",height: "410px",margin: "6rem auto 8.1rem auto",width: "329px"}}>
        <div style={{padding: "12px 55px"}}>
         <div className="col-md-6 col-md-offset-3">
                <h2 style={{paddingLeft: "20%"}}>Login</h2>
                <form name="form" onSubmit={handleSubmit} style={{ display: "flex",flexDirection: "column"}}>
                    <div className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                        <label htmlFor="username" style={{paddingtop:"13px"}}>Usuario</label>
                        <input type="text" className="form-control" name="Usuario"  onChange={handleChange} />
                        {Enviado && !DatosUsuario.Usuario &&
                            <div className="help-block" style={{color:"red"}}>Ingrese Usuario</div>
                        }
                    </div>
                    <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} style={{"padding-top": "20px", "padding-bottom": "20px"}}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" name="Pass"  onChange={handleChange} />
                        { Enviado && !DatosUsuario.Pass &&
                            <div className="help-block" style={{color:"red"}}>Ingrese Contraseña</div>
                        }
                    </div>
                    <div className="form-group" style={{"padding-left": "50px"}}>
                        <button className="btn btn-primary" >Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
) 
    
}