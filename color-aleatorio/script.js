// Seleccionar los elementos del DOM.
const boton = document.getElementById('boton-color');
const color = document.getElementById('color');

// Event Listener.
boton.addEventListener('click', function() {
  let colorAleatorio = generarColorHexAleatorio();
  document.body.style.backgroundColor = colorAleatorio;
  color.textContent = colorAleatorio;
});

// Generar un color hexadecimal aleatorio.
function generarColorHexAleatorio() {
  let digitos = '0123456789ABCDEF'; // 16 opciones.
  let color = '#'; // El color inicia con #.

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    color += digitos[indiceAleatorio];
  }
  
  return color;
}
