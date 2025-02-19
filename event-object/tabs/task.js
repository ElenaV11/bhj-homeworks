const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((element, index) => {
    element.addEventListener("click", () => {
       tabs.forEach(element => element.classList.remove("tab_active"));
       tabContents.forEach(content => content.classList.remove("tab__content_active"));

       element.classList.add("tab_active");
       tabContents[index].classList.add("tab__content_active"); 
     });
});