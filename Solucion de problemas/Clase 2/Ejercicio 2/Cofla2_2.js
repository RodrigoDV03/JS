
let total = prompt("Ingrese la cantidad de alumnos: ");
let alumnosTotales = [];

for (let i = 0; i < total; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Presentes: ${alumnosTotales[alumno][1]}<br>
    ______Ausencias: ${30 - alumnosTotales[alumno][1]}`;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado += "<b>Reprobado por inasistencias</b>";
    }
    document.write(resultado + "<br><br>");
}