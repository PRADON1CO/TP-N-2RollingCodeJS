let nota;

do{
    nota = parseInt(prompt('Ingresar nota obtenida: '));
    
    if(nota >= 0 && nota <= 10){
        if(nota >= 0 && nota <= 2){
            alert('estado academico obtenido: MUY DEFICIENTE');
        }else if (nota == 3 || nota == 4){
            alert('Estado academico obtenido: ISUFUCIENTE');
        }else if(nota == 5 || nota == 6){
            alert('Estado academico obtenido: SUFICIENTE');
        }else if(nota == 7){
            alert('Estado academico obtenido: BIEN');
        }else if(nota == 8 || nota == 9){
            alert('Estado academico obtenido: NOTABLE');
        }else if(nota == 10){
            alert('Estado académico obtenido: SOBRESALIENTE');
        }
    }else{
        alert('La nota ingresada no es valida, intenta nuevamente');
    }

}while(confirm('Desea ingresar otra nota?')); 