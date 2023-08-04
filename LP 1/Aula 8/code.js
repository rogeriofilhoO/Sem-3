let elementos = [];

function adicionarElemento() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nascimento = document.getElementById("data").value;
    let endereco = document.getElementById("ed").value;
    let email = document.getElementById("email").value;

    //Salvar objetos com as suas propriedades
    let elemento = {
        nome: nome,
        sobrenome: sobrenome,
        nascimento: nascimento,
        endereco: endereco,
        email: email
    }

    elementos.push(elemento);

    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("ed").value = "";
    document.getElementById("email").value = "";
    atualizarTabela();
}

function atualizarTabela() {
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = " ";// começa com a tabela vazia

    for (let i = 0; i < elementos.length; i++) {
        let itemLista = document.createElement("li"); // cria uma li no html
        itemLista.innerHTML = elementos[i].nome + " " + elementos[i].sobrenome
        + " " + elementos[i].nascimento + " " + elementos[i].endereco
        + " " + elementos[i].email;
        tabela.appendChild(itemLista); //atribuir elemento da lista
    }
}

function removerElemento() {
    let indice = prompt("Digite o indice do elemento");
    elementos.splice(indice, 1);
    atualizarTabela();
}

function editarElemento() {
    let indice = prompt("Digite o indice do elemento a ser editado:");
    let novonome = prompt("Digite o novo nome:");
    let novosobre = prompt("Digite o novo sobrenome:");
    let novodata = prompt("Digite uma nova data:");
    let novoed = prompt("Digite o novo endereço:");
    let novoemail = prompt("Digite o novo email:");

    elementos[indice].nome = novonome;
    elementos[indice].sobrenome = novosobre;
    elementos[indice].nascimento = novodata;
    elementos[indice].endereco = novoed;
    elementos[indice].email = novoemail;

    atualizarTabela();
}