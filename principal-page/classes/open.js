let arrowDown = document.getElementById("arrowDown");
let arrowUp = document.getElementById("arrowUp");

let class025 = document.getElementById("open02-5");
let class035 = document.getElementById("open03-5");
let class045 = document.getElementById("open04-5");
let class055 = document.getElementById("open05-5");
let class065 = document.getElementById("open06-5");
let class095 = document.getElementById("open09-5");
let class105 = document.getElementById("open10-5");
let class115 = document.getElementById("open11-5");
let class135 = document.getElementById("open13-5");

// Adding event listeners

class025.addEventListener('click', function() {
    window.location.href = "02-5/02-5.html";
});

class035.addEventListener('click', function() {
    window.location.href = "03-5/03-5.html";
});

class045.addEventListener('click', function() {
    window.location.href = "04-5/04-5.html";
});

class055.addEventListener('click', function() {
    window.location.href = "05-5/05-5.html";
});

class065.addEventListener('click', function() {
    window.location.href = "06-5/06-5.html";
});

class095.addEventListener('click', function() {
    window.location.href = "09-5/09-5.html";
});

class105.addEventListener('click', function() {
    window.location.href = "10-5/10-5.html";
});

class115.addEventListener('click', function() {
    window.location.href = "11-5/11-5.html";
});

class135.addEventListener('click', function() {
    window.location.href = "13-5/13-5.html";
});

///////////////////////////////////////////////////

arrowDown.addEventListener('click', function() {
    window.location.href = "#down";
});

arrowUp.addEventListener('click', function() {
    window.location.href = "#principalImage";
});