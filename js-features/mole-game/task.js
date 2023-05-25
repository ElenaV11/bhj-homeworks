const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;
const holes = document.querySelectorAll(".hole");
const Arr = [];
holes.forEach((node) => {
    Arr.push(node);
  });
  
  
  for (let i = 1; i <= Arr.length; i++)
  
  
  Arr.onclick = function () {
   if (Arr(i).classList.contains("hole_has-mole")) {
      deadCount++;
      document.getElementById("dead").textContent = deadCount;
		if (deadCount === 10) {
				alert("Вы выиграли!");
      } else {
      lostCount++;
      document.getElementById("lost").textContent = lostCount;
		if (lostCount === 5) {
				alert("Вы проиграли!");
   };
  };
}
  }
