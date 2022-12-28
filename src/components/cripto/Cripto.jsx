import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {

  function porcentaje(numero) {
    return (parseFloat(numero).toFixed(3))
  }

  return (
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Precio: </span>{porcentaje(priceUsd)}</p>
        <p><span className="label">Código: </span>{symbol}</p>
        <p>
          <span className="label">Variación 24h: </span>
          <span className={changePercent24Hr < 0 ? "negativo" : "positivo"}>
            {porcentaje(changePercent24Hr)}%
          </span>
        </p>
        <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
      </div>
    </div>
  )
}

export default Cripto
