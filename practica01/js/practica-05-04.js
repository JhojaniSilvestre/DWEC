
window.onload= Conversor;
function Conversor() {
    document.formulario.convertir.onclick = Convierte;
}

function Convierte(){
    document.formulario.binario.value="";
    document.formulario.octal.value="";
    document.formulario.hexadecimal.value="";
    let valorDecimal = parseInt(document.formulario.decimal.value); //al no especificar la base parseInt(cadena [, base]), se determina que es decimal
    let resulBinario = valorDecimal.toString(2); //El toString con base 2 convierte el numBinarioero en cadena en formato binario
    let resulOctal = valorDecimal.toString(8);
    let resulHexa = valorDecimal.toString(16);
    document.formulario.binario.value += resulBinario;
    document.formulario.octal.value += resulOctal;
    document.formulario.hexadecimal.value += resulHexa;  
}

