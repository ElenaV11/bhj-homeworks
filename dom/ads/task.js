const cases = document.querySelectorAll(".rotator__case");
const Arr = [];
cases.forEach((node) => {
    Arr.push(node);
  });

function rotate() {
	for (let i = 0; i < Arr.length; i++) {
		if (Arr[i].classList.contains("rotator__case_active")) {
			Arr[i].classList.remove("rotator__case_active");
    
            const nextEl = (i + 1) % Arr.length;
            Arr[nextEl].classList.add("rotator__case_active"); 
		
		}
	}
}
setInterval(rotate, 1000);
