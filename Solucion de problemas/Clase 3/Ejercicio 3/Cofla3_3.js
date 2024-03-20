class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrirApp(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }

    cerrarApp(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }

    instalarApp(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }

    desinstalarApp(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

App1 = new App(100000, 5, "50mb");
App2 = new App(100, 4, "100mb");
App3 = new App(1000, 3, "200mb");
App4 = new App(10000, 2, "300mb");
App5 = new App(1000000, 1, "400mb");
App6 = new App(10000000, 5, "500mb");
App7 = new App(100000000, 4, "600mb");

document.write(`
    ${App1.appInfo()}<br>
    ${App2.appInfo()}<br>
    ${App3.appInfo()}<br>
    ${App4.appInfo()}<br>
    ${App5.appInfo()}<br>
    ${App6.appInfo()}<br>
    ${App7.appInfo()}<br>
`)