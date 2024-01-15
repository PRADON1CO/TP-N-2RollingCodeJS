let NumAleatorio;

do{
    NumAleatorio = Math.round(Math.random() * 98) + 1;
    
    alert(NumAleatorio);

}while(confirm('¿Desea generar otro numero alatorio?'));