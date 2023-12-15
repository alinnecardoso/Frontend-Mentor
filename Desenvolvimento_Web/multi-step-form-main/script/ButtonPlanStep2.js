function isChecked(OnOff) {
    var inputElement = document.getElementById(OnOff);
    if (inputElement && inputElement.type === "checkbox") {
        return inputElement.checked;
    } else {
        return false;
    }
}

function mudaClasse() {
    var labelTrue = document.getElementById("yearly");
    var labelNull = document.getElementById("monthly")

    var button1 = document.querySelector("#button1");
    var button2 = document.querySelector("#button2");
    var button3 = document.querySelector("#button3");

    var opcao1 = document.querySelector("#opcao1");
    var opcao2 = document.querySelector("#opcao2");
    var opcao3 = document.querySelector("#opcao3");

    if (isChecked('OnOff') == true) {
        labelTrue.classList.toggle("font-ubunto-600-escuro");

        labelNull.classList.remove("font-ubunto-600-escuro")
        labelNull.classList.add("font-ubunto-700-subtitulo")

        button1.textContent = "$90/yr"
        opcao1.value = "90"

        button2.textContent = "$120/yr"
        opcao2.value = "120"

        button3.textContent = "$150/yr"
        opcao3.value = "150"
    }

    if (isChecked('OnOff') == false) {
        labelNull.classList.toggle("font-ubunto-600-escuro")

        labelTrue.classList.remove("font-ubunto-600-escuro")
        labelTrue.classList.add("font-ubunto-700-subtitulo")

        button1.textContent = "$9/mo"
        opcao1.value = "9"

        button2.textContent = "$12/mo"
        opcao2.value = "12"
        
        button3.textContent = "$15/mo"
        opcao3.value = "15"
    }
}

function getValorSelecionado() {
    var opcoes = document.getElementsByName('opcao');
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            return opcoes[i].value;
        }
    }
    return null;  // Nenhuma opção foi selecionada
}

function exibirValorSelecionado() {
    var valor = getValorSelecionado();
    if (valor !== null) {
        alert('O valor selecionado é: ' + valor);
    } else {
        alert('Nenhuma opção foi selecionada.');
    }
}