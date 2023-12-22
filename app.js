let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exbirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exbirMensagemInicial(){
exbirTextoNaTela("h1","Jogo do numero Secreto");
exbirTextoNaTela("p","Escolha um numero entre 1 e 10");

}
exbirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exbirTextoNaTela("h1","Acertou!");
        exbirTextoNaTela("p", "Você descobiu um numero secreto com 5 tentativas");

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas =`Você descobiu um numero secreto com ${tentativas} ${palavraTentativa}`;
        exbirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } 
    else{
        if(chute > numeroSecreto){
            exbirTextoNaTela("p", "O numero é menor");
        }else{
            exbirTextoNaTela("p", "O numero é maior");
        }
        tentativas++;
        limparCampo();
    }; 
};

function gerarNumeroAleatorio(){
let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = []; 
};

if ( listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
} else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
}
};

function limparCampo(){
  chute = document.querySelector("input");
  chute.value="";  
};
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exbirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
};