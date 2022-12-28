import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const usePetition = (endpoint) => {

  const API_URL =  import.meta.env.VITE_API_URL

  const [data, setData] = useState()
  const [cargando, setCargando] = useState()

  useEffect(() => {
    setCargando()
    axios.get(`${API_URL}${endpoint}`)
      .then(res => {
        setData(res.data.data) 
        !setCargando()})
      
      .catch(() => {
        console.error('la petición falló')
        !setCargando()})
  }, [])

  return [data, cargando]
}

export default usePetition