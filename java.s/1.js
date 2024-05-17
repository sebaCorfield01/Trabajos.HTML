//definir la funcion cuenta
function cuenta(numero){
    for(let i = 0; i<=numero; i++) {
        console.log(i);
    }

}
 

function main() {
    //pedir al usuario que ingrese un numero
    let numero = parseInt(prompt("ingrese un numero ")); 
    if(isNaN(numero)){
        console.log("ingrese un numero valido ");

    }
    else{
        //llamar a la funcion cuenta con el numero ingresado 
        cuenta(numero);
    }
       
}

main();
 




