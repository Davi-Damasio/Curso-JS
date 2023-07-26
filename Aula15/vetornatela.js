let valores = [1,5,6,7,8,9,5,3,1,3,3]


/*
valores.sort()
for (let pos = 0; pos < valores.length; pos++) {

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}*/
valores.sort()
for (let pos in valores) {
 console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
