const buttons = document.getElementsByClassName("btn")

function handleExpand(btn) {
    const answer = document.querySelector('.' + btn.alt);
    answer.classList.toggle('show');

    const imageExpand = btn.classList.toggle('plus')
    const baseUrl = "./faq-accordion-main/assets/images/"

    imageExpand ? btn.src = baseUrl + "icon-plus.svg" : btn.src = baseUrl + "icon-minus.svg"
}

for (let btn of buttons) {
    btn.addEventListener("click", () => handleExpand(btn))
}
