window.onload = Principal;

function Principal() {
    document.primero.provincia.readOnly = true;
    document.primero.imgprovincia.src = "imagenes/cordoba.jpg";
    document.primero.img_aficion.src = "imagenes/musica.jpg";

    document.primero.nif.value += "";
    document.primero.nombre.value += "";
    document.primero.apellidos.value += "";
    document.primero.domicilio.value += "";
    document.primero.localidad.value += "";
    document.primero.cp.value += "";
    document.primero.provincia.value += "";

    document.primero.nif.onfocus = EntrarCaja;
    document.primero.nif.onblur = SalirCaja;
    document.primero.nombre.onfocus = EntrarCaja;
    document.primero.nombre.onblur = SalirCaja;
    document.primero.apellidos.onfocus = EntrarCaja;
    document.primero.apellidos.onblur = SalirCaja;
    document.primero.domicilio.onfocus = EntrarCaja;
    document.primero.domicilio.onblur = SalirCaja;
    document.primero.localidad.onfocus = EntrarCaja;
    document.primero.localidad.onblur = SalirCaja;
    document.primero.cp.onfocus = EntrarCaja;
    document.primero.cp.onblur = SalirCaja;
    document.primero.provincia.onfocus = EntrarCaja;
    document.primero.provincia.onblur = SalirCaja;
    document.primero.cp.onblur = ValidarCP;
    document.onkeyup = FondoImgForm;
    document.primero.provin.checked = ProvinImg;

}

function ProvinImg(evento){
    let eventos = evento || window.event;
    var provin;
    for (let index = 0; index < eventos.target.length; index++) {
        if (eventos.target[index].checked) {
            provin = eventos.target[index].value.trim();
        }
    }

    if(provin == "Cordoba"){
        document.primero.imgprovincia.src = "imagenes/cordoba.jpg";
    }
    else if(provin == "León"){
        document.primero.imgprovincia.src = "imagenes/leon.jpg";
    }
    else if(provin == "Segovia"){
        document.primero.imgprovincia.src = "imagenes/segovia.jpg";
    }
    else if(provin == "Sevilla"){
        document.primero.imgprovincia.src = "imagenes/sevilla.jpg";
    }
}

function EntrarCaja(evento) {
    let eventos = evento || window.event;
    eventos.target.style.backgroundColor = "red";
}

function SalirCaja(evento) {
    let eventos = evento || window.event;
    eventos.target.style.backgroundColor = "white";
}

function FondoImgForm(evento){
    let eventos=evento || window.event;
    let imagenes = ["imagenes/ParisTorreEiffel.jpg", "imagenes/VeneciaPlazaSanMarcos.jpg",
    "imagenes/lisboatorrebelem.jpg","imagenes/atenaacropoli.jpg", "imagenes/romafontanaditrevi.jpg"]
    if(eventos.keyCode == 114 && eventos.ctrlKey){ //si se cumple todo esto
        let imgRandom = imagenes[Math.floor(Math.random() * imagenes.length)];
        document.primero.style.backgroundImage = 'url('+imgRandom+')';
    }
}

function ValidarCP(evento) {
    let eventos = evento || window.event;
    eventos.target.style.backgroundColor = "white";
    let cp = eventos.target.value;
    let posicion= 0;
	let esnumero=true;
    if (cp == "" || cp.length < 4 || cp.length > 5 ) {
        esnumero=false;
    }
    else{
        while (esnumero && posicion < cp.length){
            if (cp.charAt(posicion)<"0" || cp.charAt(posicion) > "9") {
                esnumero=false;
            }
            posicion+=1;
        }
    }

    let provincias = ["Araba/Álava", "Albacete","Alicante/Alacant","Almería","Ávila",
    "Badajoz", "Baleares","Barcelona","Burgos","Cáceres","Cádiz", "Castellón/Castelló","Ciudad Real","Córdoba","A Coruña",
    "Cuenca", "Gerona","Granada","Guadalajara","Guipúzcoa","Huelva", "Huesca","Jaén","León","Lérida",
    "La Rioja", "Lugo","Madrid","Málaga","Murcia","Navarra", "Orense","Asturias","Palencia","Las Palmas",
    "Pontevedra", "Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla", "Soria","Tarragona","Teruel","Toledo",
    "Valencia/València", "Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta", "Melilla"];

    if (esnumero) {
        let cpInt = parseInt(cp, 10);
        if (cpInt >= 1000 || cpInt <= 52999) {
            for (let index = 0; index < provincias.length; index++) {
                let numProv = index+1;
                if (cp.length == 4) {
                    if (cp.charAt(0) == numProv.toString()) {
                        document.primero.provincia.value += provincias[index];
                    }
                }
                else{
                    if (cp.charAt(0) == 0) {
                        if (cp.charAt(1) == numProv.toString()) {
                            document.primero.provincia.value += provincias[index];
                        }
                    }
                    else{
                        if (cp.substring(0,2) == numProv.toString()) {
                            document.primero.provincia.value += provincias[index];
                        }
                    }
                }
            }
        }
    }
}

/*
function SoloNumeros(evento) {
    let eventos = evento || window.event;
    let enviar = true;
    let caracter = String.fromCharCode(eventos.charCode).toLowerCase();
    if (caracter < "0" || caracter > "9") {
        enviar = false;
    }
    return enviar;
}
*/
