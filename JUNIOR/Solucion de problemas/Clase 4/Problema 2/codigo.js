class Curso{
    constructor(nombre, profesor, alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }

    obtenerInfo(){
        return `Curso: ${this.nombre}<br>
        Profesor: ${this.profesor}<br>
        Alumnos: ${this.alumnos}<br></br>`;
    }
}

let alumnos1 = ["Crisbel", "Diego", "Mariano", "Valery", "Rodrigo", "Cofla"]
let alumnos2 = ["Crisbel", "Diego", "Mariano", "Valery", "Rodrigo"]

let curso1 = new Curso("Matematicas", "Chaffo", alumnos1);
let curso2 = new Curso("Programacion", "Romero", alumnos2);
let curso3 = new Curso("Biologia", "Angela", alumnos1);
let curso4 = new Curso("Fisica", "Luis", alumnos2);

document.write(curso1.obtenerInfo() + "<br>");
document.write(curso2.obtenerInfo() + "<br>");
document.write(curso3.obtenerInfo() + "<br>");
document.write(curso4.obtenerInfo() + "<br>");

document.write("Cursos en los que se encuentra Cofla: <br>");
let cursosCofla = [curso1, curso2, curso3, curso4].filter(curso => curso.alumnos.includes("Cofla"));
cursosCofla.forEach(curso => document.write(curso.nombre + "<br>"));
