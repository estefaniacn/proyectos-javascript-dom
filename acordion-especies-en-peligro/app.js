// Seleccionar lista de contenedores.
const contenedores = document.getElementsByClassName('contenedor');

// Asignar un event listener a cada contenedor de la lista
// de especies en peligro de extincion.
for (i = 0; i < contenedores.length; i++) {
  contenedores[i].addEventListener('click', function () {
    this.classList.toggle('activo');
  });
};
