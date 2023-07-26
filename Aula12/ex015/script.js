function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.lenght == 0 || fano.value > ano){
        alert('[Erro]Digite um numero valido e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 1 && idade < 5) {
                img.setAttribute('src', 'bebemenino.png')
            }
            if (idade >= 5 && idade < 18) {
                img.setAttribute('src', 'menino.png')
            }
            if (idade >= 18 && idade < 65) {
                img.setAttribute('src', 'homem.png')
            }
            if (idade > 65) {
                img.setAttribute('src', 'idoso.png')
            }









        }else{
            genero = 'Mulher'
            if (idade >= 1 && idade < 5) {
                img.setAttribute('src', 'bebemenina.png')
            }
            if (idade >= 5 && idade < 18) {
                img.setAttribute('src', 'menina.png')
            }
            if (idade >= 18 && idade < 65) {
                img.setAttribute('src', 'mulher.png')
            }
            if (idade > 65) {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}