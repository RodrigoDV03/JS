//Arrays

let frutas = ["manzana", "platano", "pera", "fresa"];
document.write(frutas);
document.write(frutas[0]);
document.write(frutas[1]);
document.write(frutas[2]);
document.write(frutas[3]);

//Arrays asociativos

let pc = {
    nombre: "RodroPC",
    procesador: "AMD Ryzen 5 3600",
    ram: "16GB",
    espacio: "1TB"
};

document.write(pc["nombre"]);
document.write(pc["procesador"]);
document.write(pc["ram"]);
document.write(pc["espacio"]);

//Bucles e iteraciones
//While
let numero = 0;

while (numero < 20){
    numero++;
    document.write(numero);
}

//Do while
do {
    numero++;
    document.write(numero);
} while (numero < 10);

//break
while (numero < 10){
    numero++;
    document.write(numero);
    if (numero == 5){
        break;
    }
}

//for

for(let i = 0; i < 10; i++){
    document.write(i);
};

for(let i = 0; i < 20; i++){
    if (i == 5){
        continue;
    }
    document.write(i);
};

//for in (devuelve el indice del array)
let animales = ["gato", "perro", "tigre"];
for (animal in animales){
    document.write(animal);
}

//for of (devuelve el valor del array)

for (animal of animales){
    document.write(animal);
}

//Label
array1 = ["maria", "ana", "luisa"];
array2 = ["jose", "franco", array1];

for(array in array2){
    if (array == 2){
        for (array in array1){
            document.write(array);
        }
    } else {
        document.write(array2[array]);
    }
}

//Funciones
function saludar(){
    alert("Hola");
}

saludar();

function suma(a, b){
    let suma= a + b;
    return suma;
}

let resultado = suma(1, 2);
alert(resultado);