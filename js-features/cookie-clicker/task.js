const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
let clickNumber = 0;
cookie.onclick = function () {
    clickNumber++;
    cookie.width === 200 ? (cookie.width = 150, cookie.height = 150) : (cookie.width = 200, cookie.height = 200);
    clickCounter.textContent = clickNumber
}

