let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es de ${alto} y el ancho es de ${ancho}. ¿Desea comprar?`);

if(comprar){
    alert("Compra realizada");
} else{
    alert("Compra cancelada");
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `<p>href: ${href}</p>`
html += `<p>pathname: ${pathname}</p>`
html += `<p>hostname: ${hostname}</p>`
html += `<p>protocol: ${protocol}</p>`

document.write(html);