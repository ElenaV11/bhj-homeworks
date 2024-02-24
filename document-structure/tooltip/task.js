const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
console.log(tooltip);


hasTooltip.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.contains(document.querySelector('.tooltip_active'))) {
            tooltip.classList.remove('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active');
            tooltip.innerText = e.title;
            e.appendChild(tooltip);

            let { bottom, left } = element.getBoundingClientRect();
            tooltip.style.top = bottom + 'px';
            tooltip.style.left = left + 'px';
        }
    });
});