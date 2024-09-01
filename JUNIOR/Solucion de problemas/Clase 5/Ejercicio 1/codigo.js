const materias = {
    bbdd: [90, 8.6,3, "bbdd"],
    gestion: [80, 7.5,2, "gestion"],
    ux: [79,7,3, "ux"],
    metodos: [67, 7.8,2, "metodos"],
    programacion: [95, 9,3, "programacion"]
}

const aprobo = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);
        if(asistencias >= 90) {
            console.log("%cAsistencia en orden", "color: green")
        }
        else {
            console.log("%cFalta de asistencias", "color: red")
        }

        if(promedio >= 7){
            console.log("%cPromedio aprobado", "color: green")
        }
        else {
            console.log("%cPromedio desaprobado", "color: red")
        }

        if(trabajos >= 3){
            console.log("%cTrabajos al dia", "color: green")
        }
        else {
            console.log("%cFaltan trabajos", "color: red")
        }
    }
}

aprobo();