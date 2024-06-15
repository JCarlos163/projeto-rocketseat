function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const image = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Carlos Souza com bone branco e camisa preta, olhando para o celular, com fundo azul e corrente prata."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de Carlos Souza com bone e camisa vermelha, olhando para baixo, com fundo azul e corrente prata."
    )
  }
}
