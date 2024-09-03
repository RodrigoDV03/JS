alumnos = [{
    nombre: "Rodrigo Dávila",
    email: "rodrigodavila@gmail.com",
    materia: "Física 3"
},{
    nombre: "Juan Pérez",
    email: "juanperez@gmail.com",
    materia: "Cálculo 2"
},{
    nombre: "Ana Espinoza",
    email: "anaespinoza@gmail.com",
    materia: "Álgebra 1"
},{
    nombre: "María García",
    email: "mariagarcia@gmail.com",
    materia: "Química 2"
},{
    nombre: "Pedro Rivera",
    email: "pedrorivera@gmail.com",
    materia: "Biología"
}];

const boton = document.querySelector(".confirm__button");
const container = document.querySelector(".grid__container");
let htmlCode = "";

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];

    htmlCode += `
        <div class="grid__item">${nombre}</div>
            <div class="grid__item">${email}</div>
            <div class="grid__item">${materia}</div>
            <div class="grid__item semana">
                <select class="semana_elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
        </div>`;
}

container.innerHTML = htmlCode;

boton.addEventListener("click", () => {
    let confirmar = confirm("¿Estás seguro de que deseas confirmar los datos?");
    if (confirmar) {
        document.querySelector(".confirm__button").style.display = "none";
        let elementos = document.querySelectorAll(".semana");
        let chosen_week = document.querySelectorAll(".semana_elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = chosen_week[elemento].value;
        }
    }
    
});