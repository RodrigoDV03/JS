//EVENTOS

//handleEvent es un método que se llama cuando se dispara un evento

const button = document.querySelector(".boton");
// button.addEventListener("click", () => {
//     alert("Hola");
// });


//Objeto Event 
// button.addEventListener("click", (e) => {
//     console.log(e);
// });

//Especificidad de eventos

// const firstContainer = document.querySelector(".container-1");
// const secondContainer = document.querySelector(".container-2");
// const buttonContainer = document.querySelector(".boton-container");

// firstContainer.addEventListener("click", (e) => {
//     alert("Container 1");
// });

// secondContainer.addEventListener("click", (e) => {
//     alert("Container 2");
// });

// buttonContainer.addEventListener("click", (e) => {
//     alert("Boton Container");
//     e.stopPropagation();
// });

//TIMERS

// const Temporizador = setTimeout(() => {
//     document.write("Hola");
// },2000);

// setInterval(() => {
//     document.write("Hola");
// },2000);