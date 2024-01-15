let cadena;
let cadenaGuiones = '';

while (true){
    cadena = prompt('Ingrese una cadena de texto');

    for(let i = 0; i < cadena.length; i++){
        cadenaGuiones += cadena[i] + '-';
    }
    cadenaGuiones = cadenaGuiones.slice(0, -1);

    alert('El resultado de la cadena ingresada es: ' + cadenaGuiones);

    let confirmar = confirm('¿Deseas ingresar otra cadena?');
  
    if(!confirmar){
      break;
    }
  }

