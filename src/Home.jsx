import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
    <h1 className="title">Hola, bienvenidos a EDmarket</h1>
      <p className="subtitle">Conoce las criptomonedas más usadas</p>
      <Link className="link" to='/criptomonedas'>Ver criptomonedas</Link>
    </div>
  )
}

export default Home
