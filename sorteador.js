const prompt = require("prompt-sync")();

var listaNomes = [];
var escolha = 0;

function menu(){
    console.log(" --- MENU --- ");
    console.log("1 - Adicionar nome na lista: ");
    console.log("2 - Realizar sorteio: ");
    console.log("3 - Sair ");
}

function decisao(escolha){
    switch(escolha){
        case 1:
            inserir();
            break;
        case 2:
            sortear();
            break;
        default:
            console.log("obrigado!")
            break;
    }
}

function inserir(){
    var nome = prompt("Informe o nome para ser adicionado a lista: ");
    listaNomes.push(nome);
    console.log(listaNomes);
}

function sortear(){
    for (var i = listaNomes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaNomes[i], listaNomes[j]] = [listaNomes[j], listaNomes[i]];
    }
    
    if (listaNomes.length > 0) {
        const nomeSorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
        console.log("Nome sorteado:", nomeSorteado);
    } else {
        console.log("A lista está vazia.");
    }
}

do {
    menu();
    escolha = Number(prompt("Escolha uma das opções abaixo: "));
    decisao(escolha);
} while (escolha !== 3);
