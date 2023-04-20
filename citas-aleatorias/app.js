// Seleccionar los elementos HTML.
let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

// Para generar indices aleatorios.
function generarEnteroAleatorio(minimo, maximo) {
  minimo = Math.ceil(minimo);
  maximo = Math.floor(maximo);
  // Incluye el minimo pero no el maximo.
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

// Seleccionar una cita aleatoria.
function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
  autorElem.textContent = citas[indiceAleatorio].autor;
}

// Para seleccionar una cita de forma aleatoria
// cuando se inicia la aplicacion.
let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
cambiarCita();

// Para cambiar la cita al hacer click en el boton.
botonElem.addEventListener('click', cambiarCita);
