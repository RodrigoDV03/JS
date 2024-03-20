class Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
    }

    prender(){
        alert("El celular esta prendido")
    }

    reiniciar(){
        alert("El celular se esta reiniciando")
    }

    apagar(){
        alert("El celular esta apagado")
    }

    tomarFoto(){
        alert("Foto tomada en una resolucion de: " + this.resolucionCamara)
    }

    grabarVideo(){
        alert("Video grabado en una resolucion de: " + this.resolucionCamara)
    }

    mostrarInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño de pantalla: <b>${this.resolucionPantalla}</b></br>
        Resolucion de camara: <b>${this.resolucionCamara}</b></br>
        Memoria RAM: <b>${this.ram}</b></br>
        `
        
    }
}

celular1 = new Celular("Rojo", "150g", "5.5", "HD", "2GB");
celular2 = new Celular("Azul", "155g", "5.5", "Full HD", "4GB");
celular3 = new Celular("Negro", "160g", "6.0", "Full HD", "8GB")

document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>
    `
);
