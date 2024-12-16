const prompt = require("prompt-sync")();
//Para instalar o prompt-sync, vai em terminal e escreva npm install prompt-sync

function menu(){
    console.log("Bem Vindo! Escolha uma das opções abaixo: ");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Sair");
}

function operacao(opcoaEscolhida){
    switch (opcoaEscolhida) {
        case 1:
            somar();
            break;
        case 2:
            subtrair();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;   
        default:
            console.log("Obrigado!!")
            break;
    }
}
function somar(){
    var n1 = parseInt(prompt("Informeo o primeiro valor: "));
    var n2 = parseInt(prompt("Informeo o segundo valor: "));
    resultado = n1 + n2;
    console.log("O resultado da soma é : " + resultado);
}

function subtrair(){
    var n1 = parseInt(prompt("Informeo o primeiro valor: "));
    var n2 = parseInt(prompt("Informeo o segundo valor: "));
    resultado = n1 - n2;
    console.log("O resultado da subtração é : " + resultado);
}

function multiplicacao(){
    var n1 = parseInt(prompt("Informeo o primeiro valor: "));
    var n2 = parseInt(prompt("Informeo o segundo valor: "));
    resultado = n1 * n2;
    console.log("O resultado da multiplicação é : " + resultado);
}

function divisao(){
    var n1 = parseInt(prompt("Informeo o primeiro valor: "));
    var n2 = parseInt(prompt("Informeo o segundo valor: "));
    resultado = n1 / n2;
    console.log("O resultado da divisão é : " + resultado);
}

var opcoaEscolhida = 0;

do {
    menu();
    opcoaEscolhida = parseInt(prompt(" Informeo o numero da opção: " ));
    operacao(opcoaEscolhida);

} while ( opcoaEscolhida !== 5);