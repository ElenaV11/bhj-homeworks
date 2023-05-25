const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");
let timer = timer.textContent;
let countDown = setInterval(function() {
	timer--;
	timerElement.textContent = timer;

	if (timer <= 0) {
		clearInterval(countDown);
		alert("Вы победили в конкурсе!");
	}
}, 1000);