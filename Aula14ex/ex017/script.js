const num1 = document.getElementById("n1");
const bloco = document.getElementById("bloco");

function multiplicar() {

  if (num1.value.length == 0) {
    window.alert("Erro, digite um numero válido");
  } else {

    let n1 = Number(num1.value);
    bloco.innerHTML = ''

    for (i = 0; i <= 10; i++) {
      let opt = document.createElement("option");
      opt.text = `${n1} X ${i} = ${n1 * i}`;
      opt.value = `tab ${i}`
      bloco.appendChild(opt);
    }
    /*
    while (i <= 10) {
      let opt = document.createElement("option");
      opt.text = `${n1} X ${i} = ${n1 * i}`;
      bloco.appendChild(opt);
      i++;
    }
     */
  }
}
