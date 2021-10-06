window.onload = Validacion;

function Validacion(){
    document.formulario.comprobar.onclick = Validar;
}

function Validar(){
    let nombre = document.formulario.nombre.value.toLowerCase();
    let adicionales="ñáéíóúü";
    let nombreValido = true;

    if (nombre.length < 3 || nombre.length > 27) { 
        nombreValido = false;
    }
    else if ((nombre.charAt(0) < "a" || nombre.charAt(0)>"z") && 
    !adicionales.includes(nombre.charAt(0))) {
        nombreValido = false;
    }
    else if ((nombre.charAt(nombre.length -1) < "a" || nombre.charAt(nombre.length -1)>"z") && 
    !adicionales.includes(nombre.charAt(nombre.length -1))){
        nombreValido = false;
    }
	else {
            let posicion=1;
            let otros="-ºª ";
            while (nombreValido && posicion < nombre.length -1){
                if ((nombre.charAt(posicion) < "a" || nombre.charAt(posicion)>"z") && 
                    !adicionales.includes(nombre.charAt(posicion)) &&
                    !otros.includes(nombre.charAt(posicion)))
                        nombreValido=false;
                posicion+=1;
            }
    }
    if(nombreValido){
        document.formulario.mensaje.value += "Nombre valido";
    }
    else{
        document.formulario.mensaje.value += "Nombre no valido";
    }
}
