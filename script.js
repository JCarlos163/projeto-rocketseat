function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const image = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute('src', './assets/avatar-light.png')
    image.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de lente escura e jaqueta preta, sem barba e fundo degrade de azul e rosa."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute('src', './assets/avatar.png')
    image.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos com lente transparente e jaqueta preta, sem barba e fundo degrade de azul e rosa."
    )
  }


}