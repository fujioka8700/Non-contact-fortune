const sensor = document.getElementById("sensor");
const anime = document.getElementById("anime");

sensor.addEventListener("mouseover", function (event) {
    anime.classList.add('animate__shakeY');

    setTimeout(function () {
        anime.classList.remove('animate__shakeY');
    }, 800);
}, false);