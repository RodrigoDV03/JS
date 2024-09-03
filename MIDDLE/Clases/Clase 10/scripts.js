//sentencia switch

// expression = 3;

// switch (expression){
//     case 1:
//         alert("Caso 1");
//         break;
//     case 2:
//         alert("Caso 2");
//         break;
//     case 3:
//         alert("Caso 3");
//         break;
//     default:
//         alert("Caso por defecto");
// }

//try y cacth
//no se comtenplan los errores de sintaxis

// try{
//     saasasa7
// }

// catch(error){
//     console.log("Ha ocurrido un error");
//     console.log(typeof error);
// }

//finally

const prueba = () =>{
    try{
        return 1;
    }catch{
        return 2;
    }finally{
        return 3;
    }
}

console.log(prueba());