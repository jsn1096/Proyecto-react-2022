import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Pagina404 from './components/404'
import CriptoPage from './components/cripto/CriptoPage'
import Cuadricula from './components/Cuadricula'
import { UserContextProvider } from './context/UserContext'
import Home from './Home'
import "./main.css"
import Perfil from './components/users/Perfil'
import Login from './components/users/Login'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil />} />
        </Route>
        <Route path='/criptomonedas' element={<App />}>
          <Route index element={<Cuadricula />}/>
          <Route path=':id' element={<CriptoPage />}/>
        </Route>
          <Route path='*' element={<Pagina404 />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>

)
