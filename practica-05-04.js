/*4. Crea el documento HTML practica-05-04.html, que va a contener cuatro cajas
de texto, precedidas de los literales “Decimal”, “Binario”, “Octal” y
“Hexadecimal”, las tres últimas cajas de texto van a ser de solo lectura;
también vamos a tener un botón con el literal “Convertir”. Cuando se pulse el
botón “Convertir” vamos a comprobar que en la caja de texto “Decimal”
tenemos un número y le vamos a convertir a binario, octal y hexadecimal;
mostrando los valores en sus respectivas cajas de texto.
*/

/*funcion index of e includes|| es mejor partit del cao true y encontrar los falses*/

window.onload= Conversor;
function Conversor() {
    document.formulario.convertir.onclick = Convierte;
}

function Convierte(){
    document.formulario.binario.value="";
    document.formulario.octal.value="";
    document.formulario.hexadecimal.value="";
    const valorDecimal = parseInt(document.formulario.decimal.value);
    const resulBinario = valorDecimal.toString(2); //El toString con base 2 convierte el numBinarioero en cadena en formato binario
    const resulOctal = valorDecimal.toString(8);
    const resulHexa = valorDecimal.toString(16);
    document.formulario.binario.value += resulBinario;
    document.formulario.octal.value += resulOctal;
    document.formulario.hexadecimal.value += resulHexa;  
}

/*
function Convierte(){
    document.formulario.octal.value="";
    document.formulario.hexadecimal.value="";
    const numBinario = parseInt(document.formulario.decimal.value);
    const resulBinario = numBinario.toString(2); //El toString con base 2 convierte el numBinarioero en cadena en formato binario
    const numOctal = parseInt(document.formulario.decimal.value);
    const resulOctal = numBinario.toString(16);
    const numHexa = parseInt(document.formulario.decimal.value);
    const resulHexa = numBinario.toString(8);
    document.formulario.binario.value += resul;  
}
*/
