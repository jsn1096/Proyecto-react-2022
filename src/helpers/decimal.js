 export const dec3 = (numero) => {
  const result = parseFloat(numero).toFixed(3)
  return result === 'NaN' ? '-' : result
}