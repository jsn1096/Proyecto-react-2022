import "./App.css"

const Crypto = ({ id, rank, nombre, precio }) => {
  return (
    <tr key={id}>
      <td>{rank}</td>
      <td>{nombre}</td>
      <td>{precio}</td>
    </tr>
  )
}

export default Crypto