import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

  const [usuario, setUsuario] = useState({})
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/2`)
      .then(res => setUsuario(res.data.data))
      .catch(e => console.log(e))
  }, [])

  return (
    <UserContext.Provider value={usuario}>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }