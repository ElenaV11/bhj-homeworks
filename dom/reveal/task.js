const arrReveal = Array.from(document.querySelectorAll(".reveal"));
for (let i = 0; i < arrReveal.length; i++) {
    const element = arrReveal[i];
    window.addEventListener("scroll", function() {
        const {top, bottom} = element.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) { 
            element.classList.remove("reveal_active");
        } else {
            element.classList.add("reveal_active");
        }
    });
}