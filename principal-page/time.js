/* SALUDO SEGUN LA HORA */

let title = document.getElementById("title");

let today = new Date().getHours();

let timer = setInterval(() => {
    if (today >= 0 && today < 12) {
        title.innerText = "Bienvenido, ¡buenos días!";
    }else if (today >= 12 && today < 18) {
        title.innerText = "Bienvenido, ¡buenas tardes!";
    }else if (today >= 18 && today < 24) {
        title.innerText = "Bienvenido, ¡buenas noches!";
    }
}, 100);