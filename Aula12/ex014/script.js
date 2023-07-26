function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h`
    if(hora <= 18 && hora >= 12)
    {
        img.src = 'tarde.jpeg'
        document.body.style.background = 'linear-gradient(to bottom right, #1b4867, #92a4b2)'
    }else if(hora > 18){
        img.src = 'noite.jpeg'
        document.body.style.background = 'linear-gradient(to bottom right, #4b2d45, #303263)'
    }else{
        img.src = 'manha.jpeg'
        document.body.style.background = 'linear-gradient(to bottom right, #c6a282, #67370f)'
        
    }

}
    