window.onload= primosEjer3;
function primosEjer3() {
    document.formulario.Calcular.onclick = Calcula;
}

function Calcula(){
    //esto es referencia a los input, para obtener su valor
    var inicial = document.formulario.numInicial.value;
    var final =  document.formulario.numFinal.value;

    for (inicial; inicial <= final; inicial++) {
        let count = 0;
        for (let j = 1; j <= inicial; j++) {
            if (inicial % j == 0) {
                count++;
            }
        }
        if(count == 2){
            document.formulario.textarea.value += inicial + " | ";
        }
    }
}