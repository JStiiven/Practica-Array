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