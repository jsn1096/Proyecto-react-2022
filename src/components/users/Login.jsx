import { useState } from "react"
import axios from "axios"
import { useNavigate, Navigate } from "react-router-dom"
import './Login.css'

const Login = () => {

  const navigation = useNavigate()

  const [cargando, setCargando] = useState(false)

  const [error, setError] = useState()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const submit = (e) => {
    //sirve para evitar que se envie el formulario al hacer click en submit
    e.preventDefault()
    setCargando(true)
    setError(null)
    axios.post(`https://reqres.in/api/login`, user)
    .then(data => {
      setCargando(false)
      localStorage.setItem('tokenEDmarket', data.data.token)
      navigation('/')
    })
    .catch(e => {
      setCargando(false)
      console.table(e)
      setError(e.response.data.error)
    })
  }

  if (localStorage.getItem('tokenEDmarket')) return <Navigate to="/" />

  return (
    <div className="login-container">
      <h1>Iniciar sesion</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo electronico</label>
          <input required onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value
            })
          }} type="email" name="email"/>
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input required onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value
            })
          }} type="password" name="password" />
        </div>
        <div className="submit">
          <input type="submit" value={cargando ? 'Cargando...' : 'Ingresar'} />
        </div>
      </form>
      {
        error && <span className="error">Error: {error}</span>
      }
    </div>

  )
}

export default Login