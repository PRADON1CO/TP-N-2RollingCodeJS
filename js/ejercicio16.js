let cadena;
let inversa = '';

do{
    cadena = prompt('Ingrese una cadena de texto: ');

    for( let i = cadena.length - 1; i >= 0; i--){
        inversa += cadena[i];
    }

    alert('La inversa es: ' + inversa);
    inversa = '';
}while(prompt('Desea ingresar otro texto?'));