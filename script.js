function toggleMode() {
  const html = document.documentElement;
  /*if(html.classList.contains('light')){
    html.classList.remove('light');
  }else{
    html.classList.add('light');
  }*/
  html.classList.toggle('light');

  //substituir a imagem
  const img = document.querySelector('#profile img');
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/113479088.jpeg");
  } else {
    img.setAttribute("src", "./assets/113479088.jpeg");
  }
}