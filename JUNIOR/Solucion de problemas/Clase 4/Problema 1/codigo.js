class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        return a / b;
    }
    potencia(a, b) {
        return a ** b;
    }
    raizCuadradada(a) {
        return Math.sqrt(a);
    }
    raizCubica(a) {
        return Math.cbrt(a);
    }

}

const Calculadora = new Calculadora();


alert("Que operacion quieres realizar?")
let operacion = prompt("1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividir, 5: Potencia, 6: Raiz cuadrada, 7: Raiz cubica");

if (operacion == 1){
    let num1 = parseInt(prompt("Primer numero: "));
    let num2 = parseInt(prompt("Segundo numero: "));
    alert(Calculadora.sumar(num1,num2));
}
else if (operacion == 2){
    let num1 = parseInt(prompt("Primer numero: "));
    let num2 = parseInt(prompt("Segundo numero: "));
    alert(Calculadora.restar(num1,num2));
}
else if (operacion == 3){
    let num1 = parseInt(prompt("Primer numero: "));
    let num2 = parseInt(prompt("Segundo numero: "));
    alert(Calculadora.multiplicar(num1,num2));
}
else if (operacion == 4){
    let num1 = parseInt(prompt("Primer numero: "));
    let num2 = parseInt(prompt("Segundo numero: "));
    alert(Calculadora.dividir(num1,num2));
}
else if (operacion == 5){
    let num1 = parseInt(prompt("Base: "));
    let num2 = parseInt(prompt("Exponente: "));
    alert(Calculadora.potencia(num1,num2));
}
else if (operacion == 6){
    let num1 = parseInt(prompt("Numero: "));
    alert(Calculadora.raizCuadradada(num1));
}
else if (operacion == 7){
    let num1 = parseInt(prompt("Numero: "));
    alert(Calculadora.raizCubica(num1));
}
else{
    alert("Operacion no valida");
}
