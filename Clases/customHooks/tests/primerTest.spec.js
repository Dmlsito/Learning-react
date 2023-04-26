// @ts-check
import { test, expect } from '@playwright/test';
//El primer test que podemos hacer es uno que nos asegure que por lo menos 
// le mostramos algo al usuario, es decir en este caso que aparezca el fact del gato

const LOCALHOST_URL = 'http://localhost:5173/'
const PREFIX_CAT_IMAGE = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  //Aqui le indicamos a que ruta tiene que ir 
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph') // Le estamos indicando que guarde en nuestra
  // constante text el paragrafo que encuentre, en este caso como solo tenemos un paragrafo pues nos funcionaria
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent).not.toBeNull() // esperamos que el textContent no sea nulo
  await expect(imageSrc?.startsWith(PREFIX_CAT_IMAGE)).toBeTruthy() // esperamos que la imagen tenga que empezar con ese prefijo

});

// TO DO
// COMO HACER UN TEST PARA COMPROBAR QUE AL CLICKAR EN EL BOTON DE GETFACT SE CAMBIE LA IMAGEN Y EL FACT


