
window.onload = Contador;

function Contador(){
    document.formulario.comprobar.onclick = Contar;
}

function Contar(){
    let cadena = document.formulario.cadena.value.toLowerCase().replace(/ /g, "");
    let vocales = "aeiou";
    let consonantes = "bcdfghjklmnñpqrstvwxyz";
    let contVoc = 0;
    let contCon = 0;
    for (let index = 0; index < cadena.length; index++) {
        if (vocales.indexOf(cadena.charAt(index)) != -1) { 
            contVoc ++;
        }
        if (consonantes.indexOf(cadena.charAt(index)) != -1) { 
            contCon ++;
        }
    }
    document.formulario.vocales.value += contVoc;
    document.formulario.consonantes.value += contCon;
}