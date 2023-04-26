// Es mala practia pasar el setState fuera, cuando estamos extrayendo logica //

// ES MUY IMPORTANTE NO SEPARAR LA PARTE DE REACT, ES DECIR SI LA LOGICA NO NECESITA NADA DE REACT
// ES MEJOR SEPARAR Y HACER CADA COSA A PARTE
const  CAT_URL_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const data = await fetch(CAT_URL_FACT)
  .then(res => res.json())
  const { fact } = data
  return fact
}
