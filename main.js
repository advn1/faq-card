window.onload = () => {
    const buttons = document.getElementsByClassName("btn")
    const texts = document.getElementsByClassName("q-text")

    const baseUrl = "./faq-accordion-main/assets/images/"
    let btnExpand = null;

    function toggleBtn(element, isText = true) {
        if (isText) {
            btnExpand = element.parentNode.querySelector("img")
        } else {
            btnExpand = element
        }

        const imageExpand = btnExpand.classList.toggle('plus')

        imageExpand ? btnExpand.src = baseUrl + "icon-plus.svg" : btnExpand.src = baseUrl + "icon-minus.svg"
        const answer_text = document.querySelector("." + btnExpand.ariaLabel)
        answer_text.classList.toggle('show')
    }

    for (let btn of buttons) {
        btn.addEventListener("click", () => toggleBtn(btn, isText = false))
    }

    for (let text of texts) {
        text.addEventListener("click", () => toggleBtn(text))
    }
}

