window.onload = Contador;

function Contador(){
    document.formulario.comprobar.onclick = Contar;
}

function Contar(){
    document.formulario.mensaje.value += "";
    let cadena = document.formulario.cadena.value.toLowerCase().replace(/ /g, "");
    let vocalSubcadena = document.formulario.vocalSub.value.toLowerCase();
    let contVoc = 0;
    let contSubCad = 0;
    for (let index = 0; index < cadena.length; index++) {
        if (vocalSubcadena.length == 1) {
            if (vocalSubcadena === cadena.charAt(index)) { 
                contVoc ++;
            }
        }
        else{
            if (cadena.substring(index, index + vocalSubcadena.length) == vocalSubcadena) { 
                contSubCad++;
            }
        }
    }
    if (contVoc != 0) {
        document.formulario.mensaje.value += contVoc;
    }
    else if(contSubCad != 0){
        document.formulario.mensaje.value += contSubCad;
    }
    else{
        document.formulario.mensaje.value += "Ninguna coincidencia"; 
    }

}