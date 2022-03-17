function verificar() {
  data = new Date();
  ano = data.getFullYear();
  fano = document.getElementById("txtano");
  res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verfique os dados e tente novamente");
  } else {
    fsex = document.getElementsByName("radsex");
    idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    img = document.createElement('img')
    img.setAttribute('id', 'foto')
    genero = "";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >=0 && idade < 10){
        //criança
        img.setAttribute('src', 'homemcriança.png')
      }
      else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'homemjovem.png')
      }
      else if(idade < 50){
        //adulto
        img.setAttribute('src', 'homemadulto.png')
      }
      else {
        //idoso
        img.setAttribute('src', 'homemidoso.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >=0 && idade < 10){
        //criança
        img.setAttribute('src', 'mulhercriança.png')
      }
      else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'mulherjovem.png')
      }
      else if(idade < 50){
        //adulta
        img.setAttribute('src', 'mulheradulta.png')
      }
      else {
        //idosa
        img.setAttribute('src', 'mulheridosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
