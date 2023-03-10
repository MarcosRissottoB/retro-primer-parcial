import { useState } from "react"
import './App.css';
import { Card } from './componentes/card';

function App() {
  // const [user, setUser] = useState({
  //   usuario: '',
  //   password: '',
  // });

  const [mensajeDeError, setMensajeDeError] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
// form que tenga 2 input de tipo texto
// usuario
// password

// escuchar el evento y guardarlo en el estado
const handlerChangeUsuario = (e) => {
  setUsuario(e.target.value)
}

const handlerChangePassword = (e) => {
  setPassword(e.target.value)
}

// Obtengo la informacion del estado cuando hago submit
const handlerSubmit = (e) => {
  e.preventDefault();
  if (usuario.length > 2 && password.length > 3) {
    console.log("handlerSubmit", usuario, password);
  } else {
    setMensajeDeError(true)
  }
}

// la tengo que enviar a x compenente, primero el app y luego al card


  return (
    <div className="App">
      <h1>Retro primer parcial</h1>


      <form onSubmit={handlerSubmit}>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          value={usuario}
          onChange={handlerChangeUsuario}/>
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handlerChangePassword}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      
      {/* Error */}
      {/* Si hay error, muestro mensaje */}
      {/* Si no hay error, muestro card */}

      {(mensajeDeError) ? 
        <p>"Ocurrio un error: verifica los datos ingresados!!!"</p> 
        : <Card
          usuario={usuario}
          password={password}
        />
      }  
      
      {/* <div>
        <h2>Card</h2>
        <span>{usuario}</span>
        <span>{password}</span>
      </div> */}
    </div>
  )
}

export default App
