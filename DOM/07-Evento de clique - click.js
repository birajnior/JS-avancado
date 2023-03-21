// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

const button = document.querySelector("button")
button.addEventListener("click", () => {
  console.log("Clicou no botão")
})

const hyperlink = document.querySelector("a")
hyperlink.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("Clicou no hyperlink")
})