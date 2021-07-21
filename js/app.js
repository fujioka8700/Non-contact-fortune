const tiger = document.getElementById("tiger");
const sensor = document.getElementById("sensor");
const anime = document.getElementById("anime");
const result = document.getElementById("result");
const reload = document.getElementById("reload");

const fortune = ['大吉', '中吉', '小吉', '吉', '凶'];

const fortuneNum = Math.floor(Math.random() * 5);
// const fortuneNum = 4; // 凶
let count = Math.floor(Math.random() * 2) + 2;
const tigerNum = Math.floor(Math.random() * 2) + 1;
let touchEvent = false;

// Debug
// resultDisp(0); // result画面表示
// console.log(fortuneNum); // 運勢
// console.log(count); // おみくじを振る回数

function fortuneCharacter(fortuneNum) {
    let backResult = 'back_result.png';
    if (fortuneNum === 4) {
        backResult = 'back_result-bad.png';
    }
    result.innerHTML = `
    <img src="../image/${backResult}" alt="">
    <div id="tiger_pos">
        <img src="../image/tiger0${tigerNum}.png" alt="">
    </div>
    <div id="fortune_str">
        ${fortune[fortuneNum]}
    </div>
    `
}

function resultDisp(count) {
    if (count <= 0) {
        tiger.style.display = 'none';
        result.style.display = 'block';
        fortuneCharacter(fortuneNum);
    }
}

function omikujiCountDown() {
    anime.classList.add('animate__shakeY');

    setTimeout(function () {
        anime.classList.remove('animate__shakeY');
        count--;
        console.log(count);
        resultDisp(count);
    }, 800);
}

// PC
sensor.addEventListener("mouseover", function (event) {
    if (!touchEvent) {
        omikujiCountDown();
    }
}, false);

// SP
function startTouch(ev) {
    omikujiCountDown();

    touchEvent = true;
}
sensor.ontouchstart = startTouch;

reload.onclick = function () {
    window.location.reload();
}