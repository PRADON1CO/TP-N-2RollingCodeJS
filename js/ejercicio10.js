const filas = parseInt(prompt('Ingrese la cantidad de filas: '));
const columnas = parseInt(prompt('Ingrese la cantidad de columnas: '));

let tabla = '<table>';
let contador = filas * columnas;

if(isNaN(filas) || isNaN(columnas)){
    alert('Valor ingresado no es valido, intente nuevamente: ');
}else{
    for( let i= 0; i < filas; i++){
        tabla += '<tr>'
        for( let j = 0; j < columnas; j++){
            tabla += '<td>' + contador + '</td>';
            contador--;
        }
        tabla += '</tr>';
    }
    tabla += '</table>';
    
    document.write(tabla);
}

