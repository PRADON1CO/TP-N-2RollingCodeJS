const numero = parseInt(prompt('Ingrese un número no mayor a 50; '));

if(!isNaN(numero) && numero >0 && numero <=50){
    for (let i = numero; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write("<br>");
    }
}
