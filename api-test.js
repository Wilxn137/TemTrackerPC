const claveApi = 'f7b37f3fa52e4a0686063014262109';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

async function probar() {
  const response = await fetch(apiClimaActual);
  let data = await response.json();
  
  console.log(data.location.localtime);
  console.log(data.current);
}

probar();
