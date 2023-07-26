
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let conta = document.getElementById('contando') 



    function criar(){
        conta.innerHTML = 'Contando:'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        if(pas <= 0){
            alert('[Número de passos inválido, iniciando como 1]')
            pas = 1
        }

        if(inicio.value.length == 0 || fim.value.length == 0){
            window.alert('erro')
        }else if(ini > fi){
            while(fi <= ini) {
                conta.innerHTML += `${ini} 👉`
                ini -= pas
            }
        }else{
        while(ini <= fi) {
            conta.innerHTML += `${ini} 👉`
            ini += pas
        }
        
    }
    conta.innerHTML += `🏳️`
    }
    





    
    


    

