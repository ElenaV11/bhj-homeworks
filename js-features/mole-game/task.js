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
        document.getElementById("dead").textContent = deadCount;
			if (deadCount === 10) {
				alert("Вы выиграли!");
				newGame();
			}
       } else {
          lostCount++;
          document.getElementById("lost").textContent = lostCount;
          if (lostCount === 5) {
            alert('Вы проиграли!');
            newGame();
          }
        }
      };
    });
  
    function newGame() {
      deadCount = 0;
      lostCount = 0;
      document.getElementById('dead').textContent = deadCount;
      document.getElementById('lost').textContent = lostCount;
    }
        
