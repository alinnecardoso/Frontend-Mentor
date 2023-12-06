

function enviarValor(){
    let email = document.querySelector("input[name='email']").value;
    let name = document.querySelector("input[name='name']").value;
    let address = document.querySelector("input[name='address']").value;
    let message = document.querySelector("input[name='message']").value;

    console.log(`
    Email: ${email}
    Nome: ${name}
    Endereço: ${address}
    Mensagem: ${message}`)

    window.alert(`
    Email: ${email}
    Nome: ${name}
    Endereço: ${address}
    Mensagem: ${message}`)
}