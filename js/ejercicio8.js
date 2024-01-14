const numero = parseInt(prompt('Ingrese un número no mayor a 50: '));

if(!isNaN(numero) && numero >0 && numero <=50){
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write("<br>");
    }
}else{
    alert("El ingreso debe ser un número entero entre 1 y 50.");
}
