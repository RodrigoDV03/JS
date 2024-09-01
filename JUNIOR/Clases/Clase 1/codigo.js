/*Variables*/
recipiente = "papel";

alert(recipiente);

/*Tipos de datos*/
/*String, cadena de texto */
string = "Hola";

/*Number, numero */
number = 10;

/*Boolean, verdadero o falso */
boolean = true;

/*Tipos de datos especiales*/
/*Undefined, existe pero no tiene valor */
/*const, dato constante (una vez definidas, no pueden ser cambiadas). Se debe inicializar cuando se declara*/
const pi = 3.1416;

/*let, dato que puede ser cambiado */
let edad = 20;
edad = 21;

/*var, dato que puede ser cambiado */
var apellido = "Davila";
apellido = "Vasquez";

/*Hoisting*/
let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

/*null, dato que no tiene valor (le asignamos valor vacio)*/

let numero = null;

/*nan, Not a Number, dato que no es un numero */

let numero4 = "hola" * 3;
console.log(numero4);

/*Prompts, una funcion*/

let nom = prompt("Ingresa tu nombre");
console.log("Hola " + nom);

/*Operadores*/
/*Aritmeticos*/
let suma = 10 + 20;
let resta = 20 - 10;
let multiplicacion = 10 * 20;
let division = 20 / 10;
let modulo = 20 % 10;

/*De asignacion*/
let a = 10;
a += 10; /*a = a + 10 */

let b = 20;
b -= 2; /*b = b - 2 */

let c = 10;
c *= 3; /*c = c * 3 */

let d = 20;
d /= 2; /*d = d / 2 */

let e = 20;
e %= 6; /*e = e % 6 (Indica el resto)*/

/*Concatenar*/
let nombre = "Rodrigo";
let apellido = "Davila";
let nombreCompleto = nombre + " " + apellido;

let nro1 = 10;
let nro2 = 20;
frase = nro1.concat(nro2);

document.write(frase);

nombre = "Rodrigo";
frase2 = `soy ${nombre} y estoy caminando`;

/*Operadores de comparacion*/

let num1 = 10;
let num2 = 20;

document.write(num1 == num2); /*Igualdad*/
document.write(num1 != num2); /*Desigualdad*/
document.write(num1 > num2); /*Mayor que*/
document.write(num1 < num2); /*Menor que*/
document.write(num1 >= num2); /*Mayor o igual que*/
document.write(num1 <= num2); /*Menor o igual que*/

// COMANDO PARA COMENTAR LINEAS: CTRL + }

/*Operadores logicos*/

let num3 = 10;
let num4 = 20;

document.write(num3 == 10 && num4 == 20); /* AND -> Si las 2 condiciones se cumplen, el valor es True */
document.write(num3 == 10 || num4 == 20); /* OR -> Si alguna de las 2 condiciones se cumple, el valor es True */
document.write(!(num3 == 10)); /* NOT -> Si la condicion no se cumple, el valor es True. Realiza un cambio de valor */

/*Condicionales*/

 let anios = 18;

    if(anios >= 18){
        document.write("Eres mayor de edad");
    }

    else if (anios == 17){
        document.write("Eres menor de edad");
    }
    
    else{
        document.write("Eres un bebe");
    }
