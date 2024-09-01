class Curso{
    constructor(nombre, profesor, alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }

    matricular(alumno, curso){
        if(this.alumnos.length<20 && !curso.alumnos.includes(alumno)){
            curso.alumnos.push(alumno);
            alert("Alumno matriculado con exito");
        }
        else{
            alert("No se pueden agregar mas alumnos, el curso esta lleno");
        }
        
    }

    obtenerInfo(){
        return `Curso: ${this.nombre}<br>
        Profesor: ${this.profesor}<br>
        Alumnos: ${this.alumnos}<br></br>`;
    }
}

let alumnos1 = ["Crisbel", "Diego", "Mariano", "Valery", "Rodrigo", "Cofla"]
let alumnos2 = ["Crisbel", "Diego", "Mariano", "Valery", "Rodrigo"]
let alumnos3 = ["Crisbel", "Diego", "Mariano", "Valery", "Rodrigo", "Cofla", "Kevin"]
let alumnos4 = ["Crisbel", "Diego", "Mariano", "Valery", "Rodrigo", "Josue"]

let curso1 = new Curso("Matematicas", "Chaffo", alumnos1);
let curso2 = new Curso("Programacion", "Romero", alumnos2);
let curso3 = new Curso("Biologia", "Angela", alumnos3);
let curso4 = new Curso("Fisica", "Luis", alumnos4);

let opcion = prompt("Que quieres hacer: 1. Matricular a Cofla en un curso, 2. Ver informacion de los cursos, 3. Ver en que cursos esta Cofla");

if(opcion == 1){
    let curso = prompt("En que curso quieres matricular a Cofla?: 1. Matematicas, 2. Programacion, 3. Biologia, 4. Fisica");
    if(curso == 1){
        curso1.matricular("Cofla", curso1);
    }
    else if(curso == 2){
        curso2.matricular("Cofla", curso2);
    }
    else if(curso == 3){
        curso3.matricular("Cofla", curso3);
    }
    else if(curso == 4){
        curso4.matricular("Cofla", curso4);
    }
    else{
        alert("El curso no existe.");
    }

    document.write(curso1.obtenerInfo());
    document.write(curso2.obtenerInfo());
    document.write(curso3.obtenerInfo());
    document.write(curso4.obtenerInfo());

}
else if(opcion == 2){
    document.write(curso1.obtenerInfo());
    document.write(curso2.obtenerInfo());
    document.write(curso3.obtenerInfo());
    document.write(curso4.obtenerInfo());
}
else if(opcion == 3){
    let cursosCofla = [curso1, curso2, curso3, curso4].filter(curso => curso.alumnos.includes("Cofla"));
    cursosCofla.forEach(curso => document.write(curso.nombre + "<br>"));
}
else{
    alert("Opcion invalida");
}