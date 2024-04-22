function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }*/

  /* ou da para simplificar deste jeito */
  html.classList.toggle("light")

  // pagar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver em light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
