const cow = document.getElementById("cow");
const sensor = document.getElementById("sensor");
const anime = document.getElementById("anime");
const result = document.getElementById("result");
const reload = document.getElementById("reload");

const fortune = ['大吉', '中吉', '小吉', '吉', '凶'];

const fortuneNum = Math.floor(Math.random() * 5);
let count = Math.floor(Math.random() * 2) + 2;

function fortuneCharacter() {
    result.textContent = fortune[fortuneNum];
}

function resultDisp(count) {
    if (count <= 0) {
        cow.style.display = 'none';
        result.style.display = 'block';
        fortuneCharacter();
    }
}

sensor.addEventListener("mouseover", function (event) {
    anime.classList.add('animate__shakeY');

    setTimeout(function () {
        anime.classList.remove('animate__shakeY');
        count--;
        console.log(count);
        resultDisp(count);
    }, 800);
}, false);

console.log(fortuneNum);
console.log(count);

reload.onclick = function() {
    window.location.reload();
}