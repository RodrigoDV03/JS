function Sumar(a,b){
    return a+b;
}

function Restar(a,b){
    return a-b;
}

function Multiplicar(a,b){
    return a*b;
}

function Dividir(a,b){
    return a/b;
}

alert("Que operacion quieres realizar?")
let operacion = prompt("1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividir");

if (operacion == 1){
    let num1 = parseInt(prompt("Primer numero"));
    let num2 = parseInt(prompt("Segundo numero"));
    alert(Sumar(num1,num2));
}
else if (operacion == 2){
    let num1 = parseInt(prompt("Primer numero"));
    let num2 = parseInt(prompt("Segundo numero"));
    alert(Restar(num1,num2));
}
else if (operacion == 3){
    let num1 = parseInt(prompt("Primer numero"));
    let num2 = parseInt(prompt("Segundo numero"));
    alert(Multiplicar(num1,num2));
}
else if (operacion == 4){
    let num1 = parseInt(prompt("Primer numero"));
    let num2 = parseInt(prompt("Segundo numero"));
    alert(Dividir(num1,num2));
}
else{
    alert("Operacion no valida");
}
