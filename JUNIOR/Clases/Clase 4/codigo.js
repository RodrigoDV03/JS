let cadena = "cadena de prueba";
let cadena2 = "cadena";

//METODOS DE CADENAS
//Concat: junta 2 o mas cadenas y retorna una nueva

let resultConcat = cadena.concat(" concatenada");

document.write(resultConcat);

//StartsWith: determina si una cadena comienza con los caracteres de otra cadena

let resultSw = cadena.startsWith(cadena2);

document.write(resultSw);

//EndsWith: determina si una cadena termina con los caracteres de otra cadena

let resultEw = cadena.endsWith(cadena2);

document.write(resultEw);

//Includes: determina si una cadena puede ser encontrada dentro de otra cadena

let resultInc = cadena.includes(cadena2);

document.write(resultInc);

//IndexOf: devuelve el indice de la primera aparicion de un valor especificado en una cadena

let resultIo = cadena.indexOf(cadena2);

document.write(resultIo);

//LastIndexOf: devuelve el indice de la ultima aparicion de un valor especificado en una cadena

let resultLio = cadena.lastIndexOf(cadena2);

document.write(resultLio);

//Split : divide una cadena en un array de subcadenas

let resultSplit = cadena.split(" ");

document.write(resultSplit);

//Substr: extrae los caracteres de una cadena, comienza en la posicion especificada y se extiende por la cantidad de caracteres especificados

let cadenaSubstr = "ABCDEF";
let resultSubstr = cadenaSubstr.substring(0, 3);

document.write(resultSubstr);

//ToLowerCase: convierte una cadena a minusculas

let cadenaLower = "ABCDEF";
let resultLower = cadenaLower.toLowerCase();

document.write(resultLower);

//ToUpperCase: convierte una cadena a mayusculas

let cadenaUpper = "abcdef";
let resultUpper = cadenaUpper.toUpperCase();

document.write(resultUpper);

//Trim: elimina los espacios en blanco al principio y al final de una cadena

let cadenaTrim = "   ABCDEF   ";
let resultTrim = cadenaTrim.trim();

document.write(resultTrim);

//METODOS DE ARRAYS

let nombres = ["Juan", "Pedro", "Maria", "Ana"];

//pop: elimina el ultimo elemento de un array y lo retorna

let resultPop = nombres.pop();

document.write(resultPop);
document.write(nombres);

//shift: elimina el primer elemento de un array y lo retorna

let resultShift = nombres.shift();

document.write(resultShift);
document.write(nombres);

//push: agrega uno o mas elementos al final de un array y retorna la nueva longitud del array

let resultPush = nombres.push("Luis", "Carlos");

document.write(resultPush);
document.write(nombres);

//reverse: invierte el orden de los elementos de un array

let resultReverse = nombres.reverse();

document.write(resultReverse);
document.write(nombres);

//unsift: agrega uno o mas elementos al principio de un array y retorna la nueva longitud del array

let resultUnshift = nombres.unshift("Luis", "Carlos");

document.write(resultUnshift);
document.write(nombres);

//sort: ordena los elementos de un array

let cadenaNumeros = [5,7,12,4,3,9,1,2,8,6,10,11];

let resultSort = cadenaNumeros.sort();

document.write(resultSort);
document.write(cadenaNumeros);

//splice: agrega o elimina elementos de un array

//Elimina un elemento a partir de la posicion 2 y agrega "Luis" y "Carlos" en su lugar
let resultSplice = nombres.splice(2, 1, "Luis", "Carlos");

//join: une todos los elementos de un array en una cadena

let resultJoin = nombres.join(" - ");

document.write(resultJoin);

//slice: selecciona una parte de un array y retorna un nuevo array

let resultSlice = nombres.slice(2, 4);

document.write(resultSlice);
document.write(nombres);

//filter: crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada


let resultFilter = nombres.filter(nombre => document.write(nombre + "<br>"));

let resultFilter2 = nombres.filter((nombre) => nombre.length > 4);

//forEach: ejecuta la funcion indicada una vez por cada elemento del array

let resultForEach = nombres.forEach(nombre => document.write(nombre + "<br>"));



//OBJETO MATRH

//max: retorna el numero mas grande de una lista de argumentos

let resultMax = Math.max(5, 7, 12, 4, 3, 9, 1, 2, 8, 6, 10, 11);

document.write(resultMax);

//min: retorna el numero mas pequeño de una lista de argumentos

let resultMin = Math.min(5, 7, 12, 4, 3, 9, 1, 2, 8, 6, 10, 11);

document.write(resultMin);

//random: retorna un numero aleatorio entre 0 y 1

let resultRandom = Math.random();

//round: redondea un numero a su entero mas cercano

let resultRound = Math.round(5.7);

document.write(resultRound);

//floor: redondea un numero hacia abajo a su entero mas cercano

let resultFloor = Math.floor(5.7);

document.write(resultFloor);




















