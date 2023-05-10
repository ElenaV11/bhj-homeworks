const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");

let countDown = setInterval(function() {
	timer--;
	timerElement.textContent = formatTime(timer);

	if (timer <= 0) {
		clearInterval(countDown);
		alert("Вы победили в конкурсе!");
	}
}, 1000);