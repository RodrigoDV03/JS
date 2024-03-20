//POO

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    //Metodos
    verInfo(){
        document.write(this.info + "<br>");
    }
}

//Herencia

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }

    static ladrar(){
        alert("Guau Guau");
    }

    set modificarRaza(newRaza){
        this.raza = newRaza;
    }

    get obtenerRaza(){
        return this.raza;
    }
}
//Definir los objetos con const
const perro = new Perro("perro", 5, "marron", "Doberman");
const gato = new Animal("gato", 2, "negro")

perro.modificarRaza = "Pitbull";
document.write(perro.obtenerRaza);
gato.verInfo();

//document.write(perro.info + "<br>");
//document.write(gato.info + "<br>");

//Abstraccion
