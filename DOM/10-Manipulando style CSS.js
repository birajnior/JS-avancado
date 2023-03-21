
// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index

const titleEl = document.querySelector("#title")

const buttonEl = document.querySelector("#change-color")
buttonEl.addEventListener("click", () => {
    titleEl.style = "color: red; font-size: 55px"
    // titleEl.style.color = "red"
    // titleEl.style.fontSize = "55px"
})