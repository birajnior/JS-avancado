// Alterando um objeto do DOM
      // Ref.: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

      const titleEl = document.querySelector("#person-name")
      console.log("titleEl value:", titleEl.innerHTML)

      titleEl.innerHTML = "Ubiratan Júnior"
      titleEl.style.color = "red"