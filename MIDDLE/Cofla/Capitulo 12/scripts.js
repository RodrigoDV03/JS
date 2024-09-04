const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Arquitectura de Software",
        nota: 14
    },{
        nombre: "Experiencia de Usuario y Usabilidad",
        nota: 16
    },{
        nombre: "Gestión de Proyectos de Software",
        nota: 18
    },{
        nombre: "Inteligencia Artificial",
        nota: 17
    },{
        nombre: "Métodos Formales para Pruebas",
        nota: 17
    }
]

const getSubject = (id) =>{
    return new Promise ((resolve, reject) =>{
        materia = materias[id];
        if(materia==undefined){
            reject("La materia no existe");
        }else{
            setTimeout(()=>{resolve(materia)},Math.random()*250);
        }
    });
}

const getSubjects = async () =>{
    let materia = [];
    for (let i=0; i<materias.length; i++){
        materia[i] = await getSubject(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="materia__nombre">${materia[i].nombre}</div>
            <div class="materia__nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

getSubjects();