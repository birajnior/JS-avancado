// Acessando os nós do DOM

      // Forma "antiga"...
      // document.getElementById()
      // document.getElementByTagName()
      // document.getElementsByClassName()

      // Forma moderna...
      // document.querySelector('selector')
      // document.querySelectorAll('selector')
      // element.querySelector('selector')
      // element.querySelectorAll('selector')

      // CSS Seletors
      // Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

      // Universal: *
      // Id: #el-id
      // Tag: <el>
      // Class: .el-class
      // Atributos: [attr=value]
      // Grupos (vírgula): el,el
      // Descendentes (espaço): el el
      // Childs (>): el > el

      // console.log("*", document.querySelectorAll("*"))
      // console.log("id", document.querySelector("#person-name"))
      // console.log("tag", document.querySelectorAll("p"))
      // console.log("class", document.querySelectorAll(".text"))
      // console.log("attr", document.querySelectorAll("a[href]"))
      // console.log(
      //   "attr",
      //   document.querySelectorAll("a[href='https://devsamurai.com.br']")
      // )

      // Iterando toda a árvore DOM...
      // for (const el of document.querySelectorAll("*")) {
      //   console.log("el", el)
      // }