
window.onload = primosEjer1;
function primosEjer1() {
    document.formulario.textarea.value = "" //Le asignamos un valor vacío al textarea
    for (let i = 1; i <= 100; i++) { 
        let count = 0; //Contador de números divisibles
        for (let j = 1; j <= i; j++) {  //se irá obteniendo el resto de los numeros hasta que j sea igual o menor que i
            if (i % j == 0) { //Si la division tiene resto 0 se incrementara el contador
                count++;
            }
        } //se acaba el bucle y antes de dar la siguiente vuelta
        if(count == 2){ //comprobamos que el contador de numeros divisibles es igual a 2
            document.formulario.textarea.value += i + " | "; //si es primo solo tendrá dos divisores, el 1 y él mismo
        }
    }
}



/*
window.onload=primosEjer1;
function primosEjer1(){
    document.formulario.textarea.onclick= procesar1;
}

function procesar1(){
    let a = document.formulario.textarea.value+=" aqui pongo las concatenaciones";
    let esPrimo= true;
    for (let i = 2; i <= 100; i++) {
        if(i%100 === 0){
            esPrimo = False;
        }
        else{
            esPrimo = True;
            let concatenar = a + i.toString() + " | ";
        }

      }
}
*/

