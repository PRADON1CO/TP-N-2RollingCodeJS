let oracion = [];

while (true){
  let oracionNueva = prompt('Introduce una cadena de texto:');

  if(oracionNueva === null) {
    break;
  }

  oracion.push(oracionNueva);

  let confirmar = confirm('¿Deseas ingresar otra cadena?');

  if(!confirmar){
    break;
  }
}

if (oracion.length > 0) {
  let union = oracion.join(' - ');
  alert("Cadenas concatenadas: " + union);
} else {
  alert("No se ingresaron cadenas.");
}