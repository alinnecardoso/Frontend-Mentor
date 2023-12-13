// declara uma variável chamada acc e atribui a ela todos os elementos HTML na página que têm a classe “accordion”. document.getElementsByClassName é uma função que retorna uma lista de todos os elementos com a classe especificada.
var acc = document.getElementsByClassName("accordion");

// declara uma variável i que será usada como contador em um loop for
var i;

// Este é o início de um loop for que percorre cada elemento na lista acc. O loop começa com i = 0 e continua enquanto i for menor que o número de elementos em acc
for (i = 0; i < acc.length; i++) {

  // Dentro do loop, esta linha adiciona um ouvinte de evento a cada elemento acc[i]. O ouvinte de evento é acionado quando o elemento é clicado. Quando o elemento é clicado, a função anônima fornecida é executada.
  acc[i].addEventListener("click", function() {

    // Dentro da função anônima, esta linha usa o método toggle para adicionar ou remover a classe “active” do elemento que foi clicado (referido aqui como this).
    this.classList.toggle("active");

    // Esta linha declara uma variável chamada panel e atribui a ela o próximo elemento irmão do elemento clicado. Em outras palavras, é o elemento HTML que vem imediatamente após o elemento clicado no código HTML.
    var panel = this.nextElementSibling;

    // Este é um bloco condicional if/else que verifica se o elemento panel está sendo exibido (display === "block"). Se estiver sendo exibido, ele muda o estilo de exibição para “none”, efetivamente ocultando o elemento. Se não estiver sendo exibido (else), ele muda o estilo de exibição para “block”, efetivamente mostrando o elemento.
    if (panel.style.display === "block") {

      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}