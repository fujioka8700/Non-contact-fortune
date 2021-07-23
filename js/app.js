const tiger = document.getElementById("tiger");
const sensor = document.getElementById("sensor");
const anime = document.getElementById("anime");
const result = document.getElementById("result");
const resultWrap = document.getElementsByClassName("result-wrap");
const reload = document.getElementById("reload");

const fortune = ['大吉', '中吉', '小吉', '吉', '凶'];
const fortuneNum = Math.floor(Math.random() * 5);
const tigerNum = Math.floor(Math.random() * 2) + 1;

let count = Math.floor(Math.random() * 2) + 2;
let touchEvent = false;

function resultInnerHtml(backResult, fortuneNum) {
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

function fortuneCharacter(fortuneNum) {
    let backResult = 'back_result.png';
    if (fortuneNum === 4) {
        backResult = 'back_result-bad.png';
    }
    resultInnerHtml(backResult, fortuneNum);
}

function resultDisp(count) {
    if (count <= 0) {
        tiger.style.display = 'none';
        result.style.display = 'block';
        resultWrap[0].style.display = 'block';
        fortuneCharacter(fortuneNum);
    }
}

function omikujiCountDown() {
    anime.classList.add('animate__shakeY');

    setTimeout(function () {
        anime.classList.remove('animate__shakeY');
        count--;
        resultDisp(count);
    }, 800);
}

// PCと、スマホの挙動変更
// PC
sensor.addEventListener("mouseover", function (event) {
    if (!touchEvent) {
        omikujiCountDown();
    }
}, false);

// SP
function startTouch() {
    omikujiCountDown();

    touchEvent = true;
}
sensor.ontouchstart = startTouch;

reload.onclick = function () {
    window.location.reload();
}