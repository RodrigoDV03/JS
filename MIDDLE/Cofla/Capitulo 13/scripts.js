const getInfo = async () => {
    let aprobados = document.querySelector(".num__aprobados");
    let desaprobados = document.querySelector(".num__desaprobados");
    try{
        resultado = await axios("info.txt");
        resultado = resultado.data;
        aprobados.innerHTML = resultado.aprobados;
        desaprobados.innerHTML = resultado.desaprobados;
    }catch(error){
        aprobados.innerHTML = "Error";
        desaprobados.innerHTML = "Error";
        console.error(error);
    }
}

document.querySelector(".button__info").addEventListener("click", getInfo);