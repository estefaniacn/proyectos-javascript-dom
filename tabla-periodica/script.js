const listaDeElementos = document.getElementById('lista-elementos');
const infoElemento = document.getElementById('info-elemento');
const numeroAtomicoElem = document.getElementById('numero-atomico');
const nombreElemento = document.getElementById('nombre');
const simboloElem = document.getElementById('simbolo');

let datos = {
  'Hidrógeno': {
    'simbolo': 'H',
    'numeroAtomico': 1,
    'grupo': 'no metal'
  },
  'Helio': {
    'simbolo': 'He',
    'numeroAtomico': 2,
    'grupo': 'gas noble'
  },
  'Litio': {
    'simbolo': 'Li',
    'numeroAtomico': 3,
    'grupo': 'metal alcalino'
  },
  'Berilio': {
    'simbolo': 'Be',
    'numeroAtomico': 4,
    'grupo': 'metal alcalinoterreo'
  },
  'Boro': {
    'simbolo': 'B',
    'numeroAtomico': 5,
    'grupo': 'no metal'
  },
  'Carbono': {
    'simbolo': 'C',
    'numeroAtomico': 6,
    'grupo': 'no metal'
  },
  'Nitrógeno': {
    'simbolo': 'N',
    'numeroAtomico': 7,
    'grupo': 'no metal'
  },
  'Oxígeno': {
    'simbolo': 'O',
    'numeroAtomico': 8,
    'grupo': 'metaloide'
  },
  'Flúor': {
    'simbolo': 'F',
    'numeroAtomico': 9,
    'grupo': 'halogeno'
  },
  'Neón': {
    'simbolo': 'Ne',
    'numeroAtomico': 10,
    'grupo': 'gas noble'
  },
  'Sodio': {
    'simbolo': 'Na',
    'numeroAtomico': 11,
    'grupo': 'metal alcalino'
  },
  'Magnesio': {
    'simbolo': 'Mg',
    'numeroAtomico': 12,
    'grupo': 'metal alcalinoterreo'
  },
  'Aluminio': {
    'simbolo': 'Al',
    'numeroAtomico': 13,
    'grupo': 'metal'
  },
  'Silicio': {
    'simbolo': 'Si',
    'numeroAtomico': 14,
    'grupo': 'metaloide'
  },
  'Fósforo': {
    'simbolo': 'P',
    'numeroAtomico': 15,
    'grupo': 'no metal'
  },
  'Azufre': {
    'simbolo': 'S',
    'numeroAtomico': 16,
    'grupo': 'no metal'
  },
  'Cloro': {
    'simbolo': 'Cl',
    'numeroAtomico': 17,
    'grupo': 'halogeno'
  },
  'Argón': {
    'simbolo': 'Ar',
    'numeroAtomico': 18,
    'grupo': 'gas noble'
  }
};

let colores = {
  'metaloide': '#12c540',
  'no metal': '#349cc7',
  'gas noble': '#9e6cff',
  'metal': '#e54b4b',
  'metal alcalinoterreo': '#fdca16',
  'metal alcalino': '#f46501',
  'halogeno': '#e62dbd'
};

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
