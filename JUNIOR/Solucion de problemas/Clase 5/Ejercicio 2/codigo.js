//30 min por dia para las cosas de la casa
//100 min por dia para trabajos
//100 min por dia para estudira
//240 min por dia para trabajo
//10 min por dia para descansar

let trabajo = "240 minutosd de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de tabajos practicos";
let homeworks = "30 minutos de tareas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (var i = 0; i<14; i++) {

    if(i==0){
        console.group("Semana 1")
    }

    console.groupCollapsed("DIA " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homeworks);
    console.groupEnd();

    if(i==6){
        console.groupEnd();
        console.group("Semana 2")
    }
}
