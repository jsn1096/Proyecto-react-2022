import axios from "axios"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Perfil = () => {

  const usuario = useContext(UserContext)

  return (
    <div className="perfil-container">
      <h1>Perfil de {usuario.first_name}</h1>
      <div className="data-container">
        <ul>
          <li>id: {usuario.id}</li>
          <li>email: {usuario.email}</li>
          <li>Nombre: {usuario.first_name}</li>
          <li>Apellido: {usuario.last_name}</li>
          <img src={usuario.avatar} alt="avatar" />
        </ul>
      </div>
    </div>
    
  )
}

export default Perfil