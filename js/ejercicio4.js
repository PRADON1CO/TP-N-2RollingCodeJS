let numero;
let numTotal = 0;

do{
    numero = parseInt(prompt('Ingrese un valor numerico: '));

    if(!isNaN(numero)){
       numTotal += numero; 
    }else{
        alert('No es numero, Intente nuevamente');
    }

}while(confirm('¿Desea ingresar otro numero?'));

alert('La suma de los numeros inmgresados es: ' + numTotal);
