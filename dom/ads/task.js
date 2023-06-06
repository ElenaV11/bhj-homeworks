const cases = document.querySelectorAll(".rotator__case");

function rotate() {
	for (let i = 0; i < cases.length; i++) {
		if (cases[i].classList.contains("rotator__case_active")) {
			cases[i].classList.remove("rotator__case_active");
    
            const nextEl = (i + 1) % cases.length;
            cases[nextEl].classList.add("rotator__case_active"); 
		 break;
		}
	}
}
setInterval(rotate, 1000);
