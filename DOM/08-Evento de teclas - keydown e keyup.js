// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

const inputEl = document.querySelector("input[type=text]")

inputEl.addEventListener("keydown", (event) => {
  console.log("event", `${event.key} - ${event.keyCode}`)

  if (event.keyCode === 13) {
    alert(`Tecla ENTER pressionada - ${inputEl.value}`) // evento de enviar o texto
  }
})