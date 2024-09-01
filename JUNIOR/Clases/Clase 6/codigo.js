//let parrafo = "Texto de prueba"

//parrafo = document.getElementById("parrafo <br>")

//document.write(parrafo)

//parrafo1 = document.getElementsByTagName("p")

//document.write(parrafo1)

//parrafo2 = document.querySelector(".parrafo")

//document.write(parrafo2)

//Definir, obtener y eliminar atributos


//Definir atributos
//const rangoEdad = document.querySelector("#rangoEdad")

//rangoEdad.setAttribute("type", "text")


//Obtener atributos
//document.write(rangoEdad.getAttribute("type"))


//Eliminar atributos
//rangoEdad.removeAttribute("type")


//EDITAR EL CONTENIDO DE UN ELEMENTO
const titulo = document.querySelector(".titulo")
//titulo.setAttribute("contenteditable", "false")

//HIDDEN: OCULTAR ELEMENTOS
//titulo.setAttribute("hidden", "false")

//TABINDEX: ESTABLECER EL ORDEN DE TABULACIÓN
//titulo.setAttribute("tabindex", "1")

//TITLE: ESTABLECER UN TÍTULO
//titulo.setAttribute("title", "Este es el título")



//ATRIBUTOS DE INPUTS
const input = document.querySelector(".input-normal")

//input.type = "number" //Establece el tipo de input a número

//input.accept = "image/gif" //Acepta archivos de tipo gif

input.minLenght = 5 //Establece el mínimo de caracteres

//document.write(input)

const texto2 = document.querySelector(".texto-test")

texto2.style.color = "red" //Establece el color del texto

texto2.style.backgroundColor = "yellow" //Establece el color de fondo


//CREACION DE ELEMENTOS

const contenedor = document.querySelector(".contenedor");

//createElement solo reconoce objetos en mayusculas
for(i=0; i<20;i++){
    const item = document.createElement("LI");
    const itemText = item.createTextNode("Este es un item de la lista");
    fragmento.appendChild(itemText);
}

//Un elemento no puede agregarse 2 veces, ya que cada uno es un objeto unico

contenedor.appendChild(fragmento);


const fragmento = document.createDocumentFragment();

console.log(fragmento)