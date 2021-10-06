window.onload = ValidacionEmail;
/*email.lastindexof*/
/*posicion @ -1*/
function ValidacionEmail(){
    document.formulario.comprobar.onclick = ValidarEmail;
}

function ValidarEmail(){
    let email = document.formulario.email.value.toLowerCase();
    let emailValido = true;
    let adicionales="ñáéíóúü";
    //empieza por una letra
    if ((email.charAt(0) < "a" || email.charAt(0)>"z") &&
     !adicionales.includes(email.charAt(0))) { 
        emailValido = false; //funciona
    }
    else{
        let posicion= 1;
        let otros="-_.";
        var arroba = "@";
        while (emailValido && posicion < email.length -1){
			if ((email.charAt(posicion) < "a" || email.charAt(posicion)>"z") && 
				!adicionales.includes(email.charAt(posicion)) && 
				(email.charAt(posicion)<"0" || email.charAt(posicion) > "9") &&
				!otros.includes(email.charAt(posicion))){

                emailValido=false;
            }
            
            else if(email.indexOf(arroba) == -1 ){
                emailValido=false;
            }

            /*
            else if(arroba.indexOf(email.charAt(posicion)) == -1 ){
                emailValido=false;
            }

            else if(!arroba.includes(email.charAt(posicion)) && otros.includes(email.charAt(email.indexOf(arroba) -1))){
                emailValido=false;
            }

            else if((arroba == -1) && otros.includes(email.charAt(arroba -1))){
                emailValido=false;
            }jdskfsgk@sjkdf
            */
			posicion+=1;
        }
    }
    if(emailValido){
        document.formulario.mensaje.value += "mensaje valido ";
    }
    else{
        document.formulario.mensaje.value += "mensaje no valido ";
    }    
}