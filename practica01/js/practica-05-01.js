window.onload = primosEjer1;
function primosEjer1() {
    document.formulario.textarea.value = "" 
    for (let i = 1; i <= 100; i++) { 
        let count = 0; 
        for (let j = 1; j <= i; j++) {  
            if (i % j == 0) { 
                count++;
            }
        } 
        if(count == 2){ 
            document.formulario.textarea.value += i + " | "; 
        }
    }
}
