import { dec3 } from "../../../helpers/decimal"

const CriptoInfo = ({ cripto }) => {

   //let dec3 = numero => parseFloat(numero).toFixed(3)

  return (
    <div className="info">
      <div className="main-info">
        <span>Ranking: {cripto.rank}</span>
        <h1>{cripto.name}</h1>
        <span className="symbol">{cripto.symbol}</span>
      </div>
      <div className="details">
        <ul>
          <li className="details">
            <span className="label">Precio:</span>
            <span>{dec3(cripto.priceUsd) }</span>
          </li>
          <li className="details">
            <span className="label">MaxSupply:</span>
            <span>{dec3(cripto.maxSupply)}</span>
          </li>
          <li className="details">
            <span className="label">Market Cap (usd):</span>
            <span>{dec3(cripto.marketCapUsd)}</span>
          </li>
          <li className="details">
            <span className="label">Volumen (usd 24 hrs):</span>
            <span>{dec3(cripto.volumeUsd24Hr)}</span>
          </li>
          <li className="details">
            <span className="label">Variacion 24 hrs:</span>
            <span>{dec3(cripto.changePercent24Hr)}</span>
          </li>
          <li className="details">
            <span className="label">vwap 24 hrs:</span>
            <span>{dec3(cripto.vwap24Hr)}</span>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default CriptoInfo