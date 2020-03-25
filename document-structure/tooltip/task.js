  
let tooltip = document.createElement('div');
tooltip.classList.add("tooltip");

hasTooltip = Array.from(document.getElementsByClassName("has-tooltip"));

function showTooltip() {
    let tooltipText = this.title;

    if (tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.toggle('tooltip_active');
    } 

    tooltip.innerText = tooltipText;

    let coordinates = this.getBoundingClientRect();
    tooltip.style.left = `${coordinates.x}px`;
    tooltip.style.top = `${coordinates.y + 15}px`;
    // console.log(tooltip);
    // console.log(coordinates.x);
    // console.log(coordinates.y);

    tooltip.classList.toggle('tooltip_active');
    this.appendChild(tooltip);
    event.preventDefault();
}

for (let link of hasTooltip) {
    link.addEventListener('click', showTooltip);
}