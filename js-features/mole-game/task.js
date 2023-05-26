const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;
const holes = document.querySelectorAll(".hole");
const Arr = [];
holes.forEach((node) => {
    Arr.push(node);
  });
  
Arr.forEach((item) => {
    item.onclick = () => {  
      if (item.classList.contains("hole_has-mole")){
        deadCount++;
       } else {
       lostCount++;
			}
      if (deadCount >= 10) {
        alert('Победа!');
        dead = 0;
        lost = 0;
    }

      if (lostCount >= 5) {
        alert('Вы проиграли!');
        dead = 0;
        lost = 0;
    }

    deadCount.textContent = dead;
    lostCount.textContent = lost;
};
})
