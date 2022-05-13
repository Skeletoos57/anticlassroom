// Getting ID's

let passwordInput = document.getElementById("passwordInput");
let logInBtn = document.getElementById("logInBtn");
let ad = document.getElementById("ad");

// Adding event listeners

logInBtn.addEventListener('click', () => {
    if (passwordInput.value == "Aguante7moB"){
        window.location.href = "principal-page/menu.html";
    }else{
        ad.innerText = "Contraseña incorrecta";
    }
});