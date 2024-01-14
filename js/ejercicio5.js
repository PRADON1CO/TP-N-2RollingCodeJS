let dni;

do{
    dni = parseInt(prompt('Ingrese su DNI: '));

    const resto = dni % 23;
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999 ){
        if( resto == 0){
            alert('T');
        }else if( resto == 1){
            alert('R');
        }else if( resto == 2){
            alert('W');
        }else if( resto == 3){
            alert('A');
        }else if( resto == 4){
            alert('G');
        }else if( resto == 5){
            alert('M');
        }else if( resto == 6){
            alert('Y');
        }else if( resto == 7){
            alert('F');
        }else if( resto == 8){
            alert('P');
        }else if( resto == 9){
            alert('D');
        }else if( resto == 10){
            alert('X');
        }else if( resto == 11){
            alert('B');
        }else if( resto == 12){
            alert('N');
        }else if( resto == 13){
            alert('J');
        }else if( resto == 14){
            alert('Z');
        }else if( resto == 15){
            alert('S');
        }else if( resto == 16){
            alert('Q');
        }else if( resto == 17){
            alert('V');
        }else if( resto == 18){
            alert('H');
        }else if( resto == 19){
            alert('L');
        }else if( resto == 20){
            alert('C');
        }else if( resto == 21){
            alert('K');
        }else if( resto == 22){
            alert('E');
        }
    }else{
        alert('El valor ingresado es incorrecto, Intente nuevamente.');
    }

}while(confirm('¿Desea ingresar otro numero de documento?'));