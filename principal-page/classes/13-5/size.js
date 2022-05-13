
let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

let extend = document.getElementById("extend");
let normalize = document.getElementById("normalize");
let reduce = document.getElementById("reduce");

// Add Event Listeners

extend.addEventListener('click', function() {
    img.style.width = "1500px";
    img.style.height = "1600px";
    img2.style.width = "1500px";
    img2.style.height = "1600px";
    img3.style.width = "1500px";
    img3.style.height = "1600px";
    img4.style.width = "1500px";
    img4.style.height = "1600px";
    img5.style.width = "1500px";
    img5.style.height = "1600px";    
});

normalize.addEventListener('click', function() {
    img.style.width = "1000px";
    img.style.height = "1100px";
    img2.style.width = "1000px";
    img2.style.height = "1100px";
    img3.style.width = "1000px";
    img3.style.height = "1100px";
    img4.style.width = "1000px";
    img4.style.height = "1100px";
    img5.style.width = "1000px";
    img5.style.height = "1100px";
})

reduce.addEventListener('click', function() {
    img.style.width = "500px";
    img.style.height = "600px";
    img2.style.width = "500px";
    img2.style.height = "600px";
    img3.style.width = "500px";
    img3.style.height = "600px";
    img4.style.width = "500px";
    img4.style.height = "600px";
    img5.style.width = "500px";
    img5.style.height = "600px";
})

