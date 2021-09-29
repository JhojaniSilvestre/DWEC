window.onload = primosEjer2;
function primosEjer2() {

    var countPrimos=1;
    var i= 1;

    while(i <= 1000 && countPrimos <= 100){
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if(count == 2){
            countPrimos++;
            document.formulario.textarea.value += i + " | ";
        }
        i++;
    }
    
}