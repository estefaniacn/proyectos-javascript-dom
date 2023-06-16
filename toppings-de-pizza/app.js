/*
> Seleccionar Elementos con JavaScript.
*/

// Seleccionar elemento por id.

// Contenedor
const contenedor = document.getElementById('contenedor');
console.log(contenedor);
console.log(contenedor.innerHTML);
console.log(typeof contenedor.innerHTML);

// Titulo Principal
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerText);
console.log(typeof titulo.innerText);
console.log(titulo.tagName);
console.log(typeof titulo.tagName);

// Seleccionar elementos por clase.
const toppings = document.getElementsByClassName('topping');

// Todos los elementos.
console.log(toppings);

// Elementos individuales.
console.log(toppings[0]);
console.log(toppings[1]);
console.log(toppings[2]);
console.log(toppings[3]);

// Atributos de un elemento.
const aceitunas = toppings[0];

console.log(aceitunas.tagName);

// Texto
console.log(aceitunas.innerText);
console.log(aceitunas.textContent);

// Elementos
console.log(aceitunas.childElementCount);
console.log(aceitunas.children);

// Nodos
console.log(aceitunas.hasChildNodes());
console.log(aceitunas.childNodes);

// Clases
console.log(aceitunas.classList);
console.log(typeof aceitunas.classList);
console.log(aceitunas.className);
console.log(typeof aceitunas.className);

// Seleccionar elementos por etiqueta HTML.

const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

const titulo = document.getElementById('titulo');
console.log(titulo);

console.log(document.body);

// Seleccionar solo el primer elemento que cumpla el criterio
// de un selector CSS.

const aceitunas = document.querySelector('#albahaca');
console.log(aceitunas);

const topping = document.querySelector('.topping');
console.log(topping);

const primerToppingNaranja = document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);

const primerToppingNaranja = document.querySelector('ul li.fondo-naranja');
console.log(primerToppingNaranja);

const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);

// Seleccionar todos los elementos con un selector CSS.
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja);
console.log(typeof toppingsNaranja);
console.log(toppingsNaranja.length);
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja[1]);
console.log(typeof toppingsNaranja); // Object


/*
> Asignar Estilo con JavaScript.
*/

const primerTopping = document.querySelector('.topping');
console.log(primerTopping);

// Asigna un estilo in-line (ver etiqueta HTML).
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';


/*
> Obtener Texto.
*/

const listaDeToppings = document.getElementById('lista-toppings');

// Analizar las diferencias.
console.log(listaDeToppings.innerText);
console.log(listaDeToppings.textContent);
console.log(listaDeToppings.innerHTML);


/*
> Crear, Agregar y Eliminar un elemento.
*/

// Crear un elemento.
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra';
console.log(toppingNuevo);
console.log(typeof toppingNuevo);

// Agregar al DOM.
listaDeToppings.append(toppingNuevo);

// Eliminar el elemento del DOM.
toppingNuevo.remove();


/*
> Modificar atributos y clases.
*/

console.log(primerTopping.classList);
primerTopping.classList.add('mi-clase');
console.log(primerTopping.classList.contains('mi-clase'));
primerTopping.classList.remove('mi-clase');
console.log(primerTopping.classList.contains('mi-clase'));
