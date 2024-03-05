function exibirMundo() {
    console.log('Olá Mundo');
}
/////////////////////////////////////

function exibirNome(nome) {
    console.log(`Ola, ${nome}!`);
}

exibirNome('Luis')

/////////////////////////////////////

function numeroEmDobro(numero) {
    return numero * 2;
}

let resultado = numeroEmDobro(7);
console.log(resultado);

////////////////////////////////////


function numeroNaMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3
}

let media = numeroNaMedia(7,10,12);
console.log(media);

/////////////////////////////////////

function numeroMarior(A,B) {
    return A > B? A : B
}

let Maior = numeroMarior(70,32);
console.log(Maior);

///////////////////////////////////

function mutiploNumero(N1) {
    return N1 * N1;
}

let resposta = mutiploNumero(10); // corrigindo o nome da variável
console.log(resposta);


/*  Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo */
