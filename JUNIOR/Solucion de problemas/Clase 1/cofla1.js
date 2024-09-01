// Monto de dinero de cada uno
// Roberto = 1.5;
// Ana = 1.7;
// Cofla = 3;

// Precios de los helados
const palitoAgua = 0.6;
const palitoCrema= 1;
const bombonHeladix = 1.6;
const bombonHeladovich = 1.7;
const bombonHelardo = 1.8;
const poteConfites = 2.9;
const poteCuarto = 2.9;

let Roberto = prompt("¿Cuanto dinero tienes, Roberto?");
let Ana = prompt("¿Cuanto dinero tienes, Ana?");
let Cofla = prompt("¿Cuanto dinero tienes, Cofla?");

//Helado mas caro que puede comprar Roberto

if (Roberto >= palitoAgua && Roberto < palitoCrema){
    alert("Roberto puede comprar un palito de agua");
}
else if (Roberto >= palitoCrema && Roberto < bombonHeladix){
    alert("Roberto puede comprar un palito de crema");
}
else if (Roberto >= bombonHeladix && Roberto < bombonHeladovich){
    alert("Roberto puede comprar un bombon Heladix");
}
else if (Roberto >= bombonHeladovich && Roberto < bombonHelardo){
    alert("Roberto puede comprar un bombon Heladovich");
}
else if (Roberto >= bombonHelardo && Roberto < poteConfites){
    alert("Roberto puede comprar un bombon Helardo");
}
else if (Roberto >= poteConfites){
    alert("Roberto puede comprar un pote de confites o un pote de cuarto");
}
else {
    alert("Roberto no puede comprar ningun helado");
}

//Helado mas caro que puede comprar Ana

if (Ana >= palitoAgua && Ana < palitoCrema){
    alert("Ana puede comprar un palito de agua");
}
else if (Ana >= palitoCrema && Ana < bombonHeladix){
    alert("Ana puede comprar un palito de crema");
}
else if (Ana >= bombonHeladix && Ana < bombonHeladovich){
    alert("Ana puede comprar un bombon Heladix");
}
else if (Ana >= bombonHeladovich && Ana < bombonHelardo){
    alert("Ana puede comprar un bombon Heladovich");
}
else if (Ana >= bombonHelardo && Ana < poteConfites){
    alert("Ana puede comprar un bombon Helardo");
}
else if (Ana >= poteConfites){
    alert("Ana puede comprar un pote de confites o un pote de cuarto");
}
else {
    alert("Ana no puede comprar ningun helado");
}


//Helado mas caro que puede comprar Cofla

if (Cofla >= palitoAgua && Cofla < palitoCrema){
    alert("Cofla puede comprar un palito de agua");
    alert("Y el vuelto es: " + (Cofla - palitoAgua));
}
else if (Cofla >= palitoCrema && Cofla < bombonHeladix){
    alert("Cofla puede comprar un palito de crema");
    alert("Y el vuelto es: " + (Cofla - palitoCrema));
}
else if (Cofla >= bombonHeladix && Cofla < bombonHeladovich){
    alert("Cofla puede comprar un bombon Heladix");
    alert("Y el vuelto es: " + (Cofla - bombonHeladix));
}
else if (Cofla >= bombonHeladovich && Cofla < bombonHelardo){
    alert("Cofla puede comprar un bombon Heladovich");
    alert("Y el vuelto es: " + (Cofla - bombonHeladovich));
}
else if (Cofla >= bombonHelardo && Cofla < poteConfites){
    alert("Cofla puede comprar un bombon Helardo");
    alert("Y el vuelto es: " + (Cofla - bombonHelardo));
}
else if (Cofla >= poteConfites){
    alert("Cofla puede comprar un pote de confites o un pote de cuarto");
    alert("Y el vuelto es: " + (Cofla - poteConfites));
}
else {
    alert("Cofla no puede comprar ningun helado");
}

