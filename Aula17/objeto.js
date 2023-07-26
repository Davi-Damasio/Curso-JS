let amigo = {
    nome: 'Marcelo',
    sexo: 'M',
    peso: 75,
    engordar(p=0){
console.log('engordou')
this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesava ${amigo.peso}`)