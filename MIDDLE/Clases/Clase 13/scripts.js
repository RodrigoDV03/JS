// objetos json

// const objeto = {
//     "nombre": "Juan",
//     "apellido": "Perez"
// }

// console.log(objeto);
// console.log(typeof objeto);

// //serializado

// objetoDes = JSON.stringify(objeto);

// console.log(objetoDes);
// console.log( typeof objetoDes);

// //con parse

// objetoParse = JSON.parse(objetoDes);

// console.log(objetoParse);
// console.log(typeof objetoParse);

//OBJETO XMLHTTPREQUEST

// const request  = new XMLHttpRequest();

//Se necesita que el readyState sea 3 o 4 para que la respuesta este lista

// request.addEventListener("readystatechange", () => {
//     if(request.readyState == 4 && request.status == 200){
//         console.log(request.response);
//     }
// });

// request.open("GET","info.txt");
// request.send();

//Con Load (nueva forma de hacerlo)

//GET

// request.addEventListener("load", () => {
//     let respuesta
//     if(request.status == 200 || request.status == 201){
//         respuesta = request.response;
//     } else{
//         respuesta = "Lo siento, no se ha encontrado el recurso";
//     }
//     console.log(JSON.parse(respuesta));
// });

// request.open("GET","info.txt");
// request.send();

//POST

// request.open("POST","https://reqres.in/api/users");

// request.setRequestHeader("Content-Type","application/json;charset=UTF-8");

// request.send(JSON.stringify({
//     "nombre":"Rodrigo",
//     "trabajo":"Developer"
// }));

//FETCH


// fetch("https://reqres.in/api/users",{
//     method: "POST",
//     body: '{"nombre":"Rodrigo","trabajo":"Developer"}',
//     headers: {"Content-Type":"application/json"},

// }).then(res=>res.json()).then(res => console.log(res));

// const imagen = document.querySelector(".image");

// fetch("rodrigo.png").then(res=>res.blob()).then(img => imagen.src = URL.createObjectURL(img));


//AXIOS

// axios.get("info.txt").then(res => console.log(res));
// axios.post("https://reqres.in/api/users",{
//     "nombre":"Rodrigo",
//     "trabajo":"Developer"
// }).then(res => console.log(res));

//FETCH Y AXIOS CON AWAIT Y ASYNC

const getName = async ()=> {
    let peticion = await fetch("info.txt");
    let resultado = await peticion.json();
    let HTMLCode = `Nombre: ${resultado.Nombre} <br> Edad: ${resultado.Edad}<br>`;
    document.querySelector(".resultado").innerHTML = HTMLCode;
    console.log(resultado);
}

document.querySelector(".button__name").addEventListener("click",getName);