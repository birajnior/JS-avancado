// Hierarquia do DOM
      // Document --> Nodes --> Elements --> Attributes

      console.log(document); // certo
      console.log(document.body); // certo
      console.log(document.body.h1); // errado

      // Acessando os nós do DOM

      document.getElementById();
      const titleEl = document.getElementById("person-name");
      console.log("titleEl", titleEl);

      document.getElementByTagName();
      // const titleEl = document.getElementsByTagName("h1")
      console.log("titleEl", titleEl);

      document.getElementsByClassName();
      const textEl = document.getElementsByClassName("text");
      console.log("textEl", textEl);

      // Iterando...
      for (const el of textEl) {
        console.log("el", el);
      }