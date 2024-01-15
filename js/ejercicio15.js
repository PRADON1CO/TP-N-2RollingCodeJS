let oracion = prompt('Ingrese una oración: ');
oracion = oracion.toLowerCase();
contador = 0;

for (let i = 0; i < oracion.length; i++) {
    const caracter = oracion[i];
    if (['a', 'e', 'i', 'o', 'u'].includes(caracter)) {
        contador++;
    }
}

alert('El número de vocales en el texto es: ' + contador);