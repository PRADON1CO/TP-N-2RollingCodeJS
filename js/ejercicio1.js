let edad ;

do{
    edad = parseInt(prompt('Ingrese su edad: '));

    if (!isNaN(edad)){
      if (edad >= 18 && edad <= 71) {
        alert("Puede adquirir un permiso para conducir");
      } else if (edad < 18) {
        alert("Sos menor de edad, no puedes tener un permiso para conducir");
      } else {
        alert("No puede manejar ");
      }
    }else{
      alert ("El numero ingresado no es valivo")
    }
    
}while(confirm('Desea ingresa otra edad?'));