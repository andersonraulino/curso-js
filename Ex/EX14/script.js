function carregar() {
  msg = window.document.getElementById('msg')
  img = window.document.getElementById('imagem')
  data = new Date()
  hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e28a6e'
  } 
    else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#c4dae4'
  }
   else {
    //Boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#6f588a'
  }
}