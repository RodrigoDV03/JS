const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const curso = document.getElementById("subject");
const boton = document.getElementById("button");

const resultado = document.querySelector(".result");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add(".red");
    } else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add(".green");
    }
});

const validarCampos = () => {
    let error = [];
    if(nombre.value.length <5 || nombre.value.length >40){
        error[0] = true;
        error[1] = "El nombre es inválido";
        return error;
    }else if (correo.value.length <5 ||
        correo.value.length >40 ||
        correo.value.indexOf("@") == -1 ||
        correo.value.indexOf(".") == -1){
            error[0] = true;
            error[1] = "Ingrese un correo válido";
            return error;
        } else if (curso.value.length <5 || curso.value.length >40){
            error[0] = true;
            error[1] = "El curso es inválido";
            return error;
        }

    error[0] = false;
    return error;
}