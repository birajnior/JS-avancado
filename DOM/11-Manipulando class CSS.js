// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index

const titleEl = document.querySelector("#title")

const buttonEl = document.querySelector("#change-class")
buttonEl.addEventListener("click", () => {
    // if (titleEl.classList.contains("highlight")) {
    //   titleEl.classList.remove("highlight")
    // } else {
    //   titleEl.classList.add("highlight")
    // }

    titleEl.classList.toggle("highlight")
})