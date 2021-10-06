window.onload = ValidacionFecha;
function ValidacionFecha() {
    document.formulario.comprobar.onclick = ValidarFecha;
}
function ValidarFecha() {
    let fecha = document.formulario.fecha.value;
    let RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if ((fecha.match(RegExPattern)) && (fecha!='')) {
        document.formulario.mensaje.value += "fecha valida";
    } else {
        document.formulario.mensaje.value += "fecha no valida";
    }
}
