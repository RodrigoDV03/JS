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

class CelularAltaGama extends Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram, camaraExtra){
        super(color, peso, resolucionPantalla, resolucionCamara, ram);
        this.camaraExtra = camaraExtra;
    }

    grabarVideoLento(){
        alert("Estas grabando en camara lenta")
    }

    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial")
    }

    infoAltaGama(){
        return this.mostrarInfo() + `Camara extra: <b>${this.camaraExtra}</b></br>`
    }
}

celularAG1 = new CelularAltaGama("Blanco", "140g", "12.0", "Full HD 4K", "32GB", "Full HD 4K");
celularAG2 = new CelularAltaGama("Plata", "150g", "13.0", "Full HD 4K", "64GB", "Full HD 4K");

document.write(`
    ${celularAG1.infoAltaGama()} <br>
    ${celularAG2.infoAltaGama()} <br>
    `
);
