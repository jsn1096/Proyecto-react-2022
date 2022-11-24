import { useEffect, useState } from "react"
import axios from "axios"
import Crypto from "./Crypto"
import "./App.css"

function Cripto() {

  const API_URL =  import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((res) => setCriptos(res.data.data))
      .catch(() => {console.error('la petición falló')})
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Posición</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        { 
          criptos.map( ({ id, rank, name, priceUsd}) => 
            <Crypto id={id} rank={rank} nombre={name} precio={priceUsd}/> )
        }
      </tbody>
    </table>
    </>
  )
}

export default Cripto
