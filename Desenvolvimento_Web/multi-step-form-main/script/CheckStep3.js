function isChecked(OnOff) {
    var inputElement = document.getElementById(OnOff);
    if (inputElement && inputElement.type === "checkbox") {
        return inputElement.checked;
    } else {
        return false;
    }
}


function somaCheck() {

    var valor1 = document.querySelector("#valor1");
    var valor2 = document.querySelector("#valor2");
    var valor3 = document.querySelector("#valor3");

    var checkbox1 = document.querySelector("#checkbox1");
    var checkbox2 = document.querySelector("#checkbox2");
    var checkbox3 = document.querySelector("#checkbox3");
    
    var soma = 0;
    var qtdCheck = document.querySelectorAll("[name='opcaoStep3]'");
    alert(qtdCheck.values)
    
    if (isChecked('OnOff') === true) {

        checkbox1.textContent = "$10/yr"
        valor1.value = "10"

        checkbox2.textContent = "$20/yr"
        valor2.value = "20"

        checkbox3.textContent = "$20/yr"
        valor3.value = "20"

        for (var i = 0; i < qtdCheck.length; i++) {
            if (qtdCheck[i].checked) {
                soma += Number(qtdCheck[i].value);
            }
        }
        alert(soma);

    }

    if (isChecked('OnOff') === false) {
        
        checkbox1.textContent = "$1/mo"
        valor1.value = "1"

        checkbox2.textContent = "$2/mo"
        valor2.value = "2"

        checkbox3.textContent = "$2/mo"
        valor3.value = "2";

        for (var i = 0; i < qtdCheck.length; i++) {
            if (qtdCheck[i].checked) {
                soma += Number(qtdCheck[i].value);
            }
        }
        alert(soma);

        
    }
}

