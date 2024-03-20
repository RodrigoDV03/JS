let entradaGratis = false;

function validarInvitado (time){
    let edad = prompt("Ingrese su edad: ");
    if(edad >= 18){
        if(time>=2 && time<=6  && entradaGratis == false){
            alert("Eres la primera persona desde las 2 AM, puedes pasar gratis");
            entradaGratis = true;
        }
        else{
            alert("Debes pagar la entrada");
        }
    }
    else{
        alert("Eres menor de edad, no puedes entrar a la fiesta");
    }
}

validarInvitado(11);
validarInvitado(12);
validarInvitado(2);
validarInvitado(3);
validarInvitado(4);
