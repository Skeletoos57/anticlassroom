// ID's

let logout = document.getElementById('logOutBtn');
let logo = document.getElementById('principalImage');

// Events

logout.addEventListener('click', function () {
    window.location.href = "../../index.html";
});

logo.addEventListener('click', function() {
    window.location.href = "../menu.html";
})