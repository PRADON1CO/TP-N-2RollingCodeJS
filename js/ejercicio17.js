let oracion = prompt('Ingrese una cadena de texto');
let posicionVocal = -1;

for (let i = 0; i < oracion.length; i++){
    let letra = oracion.charAt(i).toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].includes(letra)){
        posicionVocal = i;
        break;
    }
}

if (posicionVocal !== -1){
    let vocal = oracion.charAt(posicionVocal);
    alert('La primera volcal ingresada es ( ' + vocal  + ' ) esta ubicado en la posición ' + (posicionVocal +1));
}else{
    alert('No hay ninguna vocal en esta cadena de texto');
}