// Seleccionar elementos.
const listaDeElementos = document.getElementById('lista-elementos');
const infoElemento = document.getElementById('info-elemento');
const numeroAtomicoElem = document.getElementById('numero-atomico');
const nombreElemento = document.getElementById('nombre');
const simboloElem = document.getElementById('simbolo');

// Colores para cada grupo de elementos.
let colores = {
  'metaloide': '#12c540',
  'no metal': '#349cc7',
  'gas noble': '#9e6cff',
  'metal': '#e54b4b',
  'metal alcalinoterreo': '#fdca16',
  'metal alcalino': '#f46501',
  'halogeno': '#e62dbd'
};

// Agregar elementos a partir de los datos 
// automaticamente.
function agregarElementos(datos) {
  for (let i = 0; i < Object.keys(datos).length; i++) {
    const elementoNuevo = document.createElement("li");
    const nombre = Object.keys(datos)[i];
    elementoNuevo.textContent = nombre;
    elementoNuevo.classList.add('elemento');
    elementoNuevo.style.backgroundColor = colores[datos[nombre].grupo];
    listaDeElementos.appendChild(elementoNuevo);
  }
}

agregarElementos(datos);

let elementos = document.getElementsByClassName('elemento');

// Mostrar un elemento al momento de abrir la pagina web.
function mostrarElementoInicial() {
  const nombre = elementos[0].textContent;
  numeroAtomicoElem.textContent = datos[nombre].numeroAtomico;
  simboloElem.textContent = datos[nombre].simbolo;
  infoElemento.style.backgroundColor = colores[datos[nombre].grupo];
  nombreElemento.textContent = nombre;
}

function asignarEventListeners() {
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
      // Actualizar la informacion del elemento.
      const nombre = elementos[i].textContent;
      // Numero atomico.
      numeroAtomicoElem.textContent = datos[nombre].numeroAtomico;
      // Simbolo.
      simboloElem.textContent = datos[nombre].simbolo;
      // Nombre.
      nombreElemento.textContent = nombre;
      // Color de fondo.
      infoElemento.style.backgroundColor = colores[datos[nombre].grupo];
    });
  }
}

mostrarElementoInicial();
asignarEventListeners();
