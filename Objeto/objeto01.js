amigo = {nome: 'Anderson',
  sexo: 'M',
  peso: 69,
engordar(p){
  console.log('Engordou')
  this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)