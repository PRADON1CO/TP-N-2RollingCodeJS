let nombres = [];
let edades = [];

for( let i = 0; i < 3; i++){
    let nombre = prompt('Ingrese Nombre: ');
    let edad = parseInt(prompt('Ingrese Su Edad: '));

    if (!isNaN(edad)){
        edades.push(edad);
        nombres.push(nombre);
    }else{
        alert('los valores ingresados son incorrectos, intente nuevamente');
    }
}

let mayor = 0;

for(let i = 0; i < 3; i++){
    if (edades[i] > edades[mayor]){
        mayor = i;
    }
}

document.write('El nombre de la persona con mayor edad es: ' + nombres[mayor] + ' con ' + edades[mayor] + 'años');