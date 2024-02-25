//criando variavel titulo com comando 'document.querySelector' para manipular o "h1" do documento HTML.
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

//criando uma variavel paragrafo com comando 'document.querySelector' para manipular o "p" do documento HTML.
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';




// essa função faz tudo que foi feito no codigo acima comentado com o codigo otimizado
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

let numeroSecreto = gerarNumeroAleatorio();


//função gera um numero aleatorio e usar a palavra reservada return para conseguirmos mantela armazenada na variavel
function gerarNumeroAleatorio() {
    return parseInt(math.random() * 10 + 1)
}


function verificarChute() {
    console.log(numeroSecreto);
}

