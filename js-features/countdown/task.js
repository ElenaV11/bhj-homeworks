const timerElement = document.getElementById("timer");

let countDown = setInterval(function() {
	let timer = document.getElementById("timer").textContent;
	timer--;
	document.getElementById("timer") = timer;

	if (timer <= 0) {
		clearInterval(countDown);
		alert("Вы победили в конкурсе!");
	}
}, 1000);