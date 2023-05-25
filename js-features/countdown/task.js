const timerElement = document.getElementById("timer");
let timer = timerElement.textContent;

let countDown = setInterval(function() {
	timer--;
	timerElement.textContent = timer;

	
	if (timer <= 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(countDown);
	}
}, 1000);