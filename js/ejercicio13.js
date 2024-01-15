let oracion;
let oracionMayus;

do{
    oracion = prompt ('Ingrese el texto a modificar: ');
    oracionMayus = oracion.toUpperCase();

    alert('El texto pasado a mayusculas es: ' + oracionMayus);
}while(confirm('¿Desea ingresar otro texto?'));

