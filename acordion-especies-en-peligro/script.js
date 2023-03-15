const contenedores = document.getElementsByClassName('contenedor');

console.log(contenedores);

for (i = 0; i < contenedores.length; i++) {
  contenedores[i].addEventListener('click', function () {
    this.classList.toggle('activo');
  })
};
