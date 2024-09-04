// //callbacks

// // function prueba(callback){
// //     callback("hola");
// // }

// // prueba (nombre => console.log(nombre));

class Users {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const usersData = [
    ["Lucas", "@lucasito"],
    ["Mariano", "@marianito"],
    ["Julieta", "@julietita"],
    ["Pablo", "@pablito"]
];

const users = [];

for (let i = 0; i < usersData.length; i++) {
    users[i] = new Users(usersData[i][0], usersData[i][1]);
}

// const getUsers = (id, cb) => {
//     if (users[id] === undefined) {
//         cb("No se encontró el usuario");
//     } else {
//         cb(null, users[id]);
//     }
// }

// const getInstagram = (id, cb) => {
//     if (users[id] === undefined) {
//         cb("No se encontró el instagram");
//     } else {
//         cb(null, users[id].instagram);
//     }
// }

// getUsers(1, (err, usuario) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(usuario.nombre);
//         getInstagram(1, (err, instagram) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(instagram);
//             }
//         });
//     }
// });


//Promesas

// let nombre = "Lucas";

// const promesa = new Promise((resolve, reject) => {
//     if (nombre !== "Lucas") {
//         reject("El nombre no es Lucas");
//     } else {
//         resolve(nombre);
//     }
// });

// promesa.then((resultado) => {
//     console.log(resultado);
// }).catch((e) => {
//     console.log(e);
// });

//Implementando promesas en el ejercicio anterior

// const getUsers = (id) => {
//     return new Promise ((res, rej) => {
//         if (users[id] === undefined) {
//             rej("No se encontró el usuario");
//         } else {
//             res(users[id]);
//         }
//     })
// }

// const getInstagram = (id) => {
//     return new Promise((res, rej) => {
//         if (users[id] === undefined) {
//             rej("No se encontró el instagram");
//         } else {
//             res(users[id].instagram);
//         }
//     });
// }

// let id = 2;

// getUsers(id).then((user) => {
//     console.log(user.nombre);
//     return getInstagram(id);
// }).then((instagram) => {
//     console.log(instagram)
//     }).catch((e) => {
//         console.log(e);
//     });

//await y async

const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
}

const getInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(objeto)}, 3000);
    })
}

const showResult = async () => {
    resultado = await getInfo();
    console.log(resultado);
};

showResult();