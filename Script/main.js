var tabela;


function criarTB(jogo){
    var tabela = document.getElementById("tGames");
    var qtLinhas = tabela.rows.length;
    var linhaNova = document.createElement("tr")

    for(var i in jogo){
        var tdNovo = document.createElement("td");
        tdNovo.innerHTML = jogo[i];
        linhaNova.appendChild(tdNovo);
        linhaNova.setAttribute('id', "linha"+qtLinhas)
        tabela.appendChild(linhaNova);
    }

    var btn = document.querySelector("button");
    btn.parentNode.insertBefore
    btn = document.createTextNode
}

function chamarTB(){
    var jogo = [];
    var tabela = document.getElementById("tGames");
    var qtLinhas = tabela.rows.length;
    var codigo = qtLinhas;

    var titulo = document.getElementById('iNome').value;
    var genero = document.getElementById('iGenero').value;
    var desen = document.getElementById('iDesen').value;
    var data = document.getElementById('iData').value;

    var deletar = document.createElement('button');
    var txt = document.createTextNode("Deletar");
    deletar.appendChild(txt);
    deletar.setAttribute('onclick','deletarDados(this.parentNode.parentNode.rowIndex)');
    deletar.setAttribute('class', 'btnDel');

    var atualizar = document.createElement('button');
    var txt = document.createTextNode("Atualizar");
    atualizar.appendChild(txt);
    atualizar.setAttribute('onclick','atualizaDados(this.parentNode.parentNode.rowIndex)');
    atualizar.setAttribute('class', 'btnAtt');

    jogo.push(codigo);
    jogo.push(titulo);
    jogo.push(genero);
    jogo.push(desen);
    jogo.push(data);
    jogo.push(atualizar.outerHTML);
    jogo.push(deletar.outerHTML);

    if(validar() == true){
        criarTB(jogo);
    }
}

function validar(){
    var titulo = document.getElementById('iNome').value;
    var desen = document.getElementById('iDesen').value;
    var data = document.getElementById('iData').value;

    if (titulo == ""){
        return false;
    }
    else if (desen == ""){
        return false;
    }
    else if (data == ""){
        return false;
    }
    else{
        return true;
    }
}

function limparCampos(){
    document.getElementById('iNome').value="";
    document.getElementById('iGenero').value="acao";
    document.getElementById('iDesen').value="";
    document.getElementById('iData').value="";
}

function deletarDados(linha){
    var tabela = document.getElementById("tGames");
    tabela.rows[linha].parentNode.removeChild(tabela.rows[linha]);
}

function atualizaDados(essaLinha){
    var tabela = document.getElementById("tGames");
    for(var i = 0; i < tabela.rows.length; i++){
        if(validar() == true){
            tabela.rows[essaLinha].cells[1].innerHTML = document.getElementById('iNome').value;
            tabela.rows[essaLinha].cells[2].innerHTML = document.getElementById('iGenero').value;
            tabela.rows[essaLinha].cells[3].innerHTML = document.getElementById('iDesen').value;
            tabela.rows[essaLinha].cells[4].innerHTML = document.getElementById('iData').value;
        }
    }
}
