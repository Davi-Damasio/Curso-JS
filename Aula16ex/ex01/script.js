const num = document.getElementById('numero')
const lista = document.getElementById("lista")
const bloco = document.getElementById("bloco")
const arranum = []


function somaLista(){
  if (isNumero(num.value) && !inLista(num.value, arranum)) {
    arranum.push(Number(num.value))
    var texto = document.createElement("option")
    texto.innerHTML += `Valor ${num.value} adicionado`
    lista.appendChild(texto)
    bloco.innerHTML = ""
  } else {
    alert("Número já consta ou o valor digitado foi nulo")
  }
  num.value = ''
  num.focus()

}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
      return true
    } else {
      return false
    }
  }
  
  function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
      return true
    } else {
      return false
    }
  }
  

function maior(l) {
  l.sort()
  let primeiro = l[l.length - 1]
  return primeiro
}

function menor(l) {
  l.sort()
  let primeiro = l[0]
  return primeiro
}

function somaTudo(l) {
  let i = 0
  let soma = 0
  while (i < l.length) {
    soma += l[i]
    i++;
  }
  return soma
}

function media(l) {
  let soma = 0
  for (i = 0; i < l.length; i++) {
    soma += l[i]
  }
  return soma / l.length
}

function finisher() {
  if (arranum == 0) {
    alert("Não tem nada na caixa")
  } else {
    bloco.innerHTML +=
      `Ao todo foram adicionados ${arranum.length} numeros` + "<br>"
      bloco.innerHTML +=
      `O maior valor informado foi ${maior(arranum)}` + "<br>"
      bloco.innerHTML +=
      `O menor valor informado foi ${menor(arranum)}` + "<br>"
      bloco.innerHTML +=
      `Somando todos os valores temos ${somaTudo(arranum)}` + "<br>"
      bloco.innerHTML += `A média dos valores digitados é ${media(arranum)}`

  }
}
