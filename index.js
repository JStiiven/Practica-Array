// INTRODUCCIÓN A LOS ARRAYS
// Se debe crear un array vacío
let arrayVacio = [];
console.log(arrayVacio);

// Se debe crear un array con elementos
let arrayElementos = ["a", "e", "i", "o", "u"];
console.log(arrayElementos);

// Se debe crear un array con elementos diferentes (tipos de datos)
let arrayElementosDiferentes = [1, "a", hora, 5, "e"];
console.log(arrayElementosDiferentes);

// Se debe crear un array utilizando el contructor Array();
let arrayConstructor = new Array(1, 2, 3, 4, 5);
console.log(arrayConstructor);
let arrayConstructor2 = new Array(10);
console.log(arrayConstructor2);

// Se debe crear un array con una secuencia numerica usando el metodo Array.from()
let arraySecuenciaNumerica = Array.from([1, 2, 3], (x) => x + x)
console.log(arraySecuenciaNumerica);

// Se debe crear un array mediante la repetición de un valor utilizando array.fill()
let arrayRepeticion = ['banana', 'manzana', 'naranja'];
arrayRepeticion.fill('fresa')
console.log(arrayRepeticion);

// Se debe crear un array a partir de una cadena de texto usando el metodo String.split()
let arrayString = "Este es mi taller evaluativo";
let str = arrayString.split(' ')
console.log(str);
let str2 = arrayString.split('')
console.log(str2);
let str3 = arrayString.split()
console.log(str3);

// Se debe crear un array combinando dos arrays existentes utilizando el operador spread(...)
let numerosArray = [1, 2, 3, 4, 5];
console.log(numerosArray);
let arrayCopia = [...numerosArray];
console.log(arrayCopia);

// Se debe crear un array con valores unicos utilizando el metodo Set() y el operador spread(...)
let arrayUnico = ['d','b','c','a','d'];
let arrayDublicado = [...new Set(arrayUnico)]
console.log(arrayDublicado);

// Se debe crear un array con una función que genere valores dinamicamente
let longitud = 3;
let arrayGenerador = Array.from({ length: longitud }, () => Math.floor(Math.random() * 100));
console.log(arrayGenerador);

// MÉTODOS BÁSICOS DE ARRAYS
// Se debe crear un array para obtener a longitud

let arrayLongitud = [30, 12, 2004]
console.log(arrayLongitud.length);

// Agregar elementos al final del array usando push();
let frutas = ['banano', 'manzana', 'pera']
console.log(frutas);
let arrayPush =  frutas.push('fresa');
console.log(frutas);

// Eliminar el ultimo elemento del array usando pop()
let numeros = [16, 3, 2006];
console.log(numeros);
let eliminarArray = numeros.pop()
console.log(numeros);

// Agregar elementos al principio del array usando unshift()
let animales = ['tigre', 'gato', 'perro', 'ave']
console.log(animales);
let agregarArrayInicio = animales.unshift('raton')
console.log(animales);

// Eliminar el primer elemento del array usando shift()
let fechaGraduacion = [30, 12, 2025]
console.log(fechaGraduacion);
let eliminarElementoInicio = fechaGraduacion.shift(fechaGraduacion)
console.log(fechaGraduacion);