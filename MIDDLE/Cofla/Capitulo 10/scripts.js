const sendButton = document.querySelector('.button');

sendButton.addEventListener('click', () => {
    let resultado, mensaje;
    try {
        // Obteniendo y parseando la nota del input
        let prevRes = parseInt(document.querySelector(".nota__alumno").value);
        if (isNaN(prevRes)) {
            throw "Error";
        }
        // Verificando la nota y definiendo el mensaje
        resultado = verificarNota(prevRes);
        mensaje = definirMensaje(prevRes);
        
    } catch (e) {
        resultado = ["Acceso denegado", ""];
        mensaje = "Ingrese la nota correctamente";
    }
    abrirModal(resultado[0], mensaje);
});

const abrirModal = (resultado, mensaje) => {
    document.querySelector(".resultado").innerHTML = resultado;
    document.querySelector(".mensaje").innerHTML = mensaje;
    let modal = document.querySelector(".modal__wrapper");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
};

const definirMensaje = (prevRes) => {
    let mensaje;
    switch(prevRes){
        case 1: mensaje = "Tu nota es 1";
        break;
        case 2: mensaje = "Tu nota es 2";
        break;
        case 3: mensaje = "Tu nota es 3";
        break;
        case 4: mensaje = "Tu nota es 4";
        break;
        case 5: mensaje = "Tu nota es 5";
        break;
        case 6: mensaje = "Tu nota es 6";
        break;
        case 7: mensaje = "Tu nota es 7";
        break;
        case 8: mensaje = "Tu nota es 8";
        break;
        case 9: mensaje = "Tu nota es 9";
        break;
        case 10: mensaje = "Tu nota es 10";
        break;
        default: mensaje = "Nota fuera de rango";
    }
    return mensaje;
};

const verificarNota = (prevRes) => {
    // Declarando variables correctamente
    let nota1 = 8;
    let nota2 = 6;
    let prom = (nota1 + nota2 + prevRes) / 3;

    if (prom >= 7) {
        return ["<span class='green'>APROBADO</span>", prom];
    }
    return ["<span class='red'>DESAPROBADO</span>", prom];
};
