for (let i = 0; i < 10; i++) {

    let tabela;

    tabela = document.createElement("table");
    document.body.appendChild(tabela);

    for (let j = 0; j <= 10; j++) {
        let linha, conteudo;
        linha = document.createElement("tr");
        tabela.appendChild(linha);

        if (j != 0) {
            conteudo = document.createElement("td");
            conteudo.innerHTML = (i + 1) + 'x' + j;
            linha.appendChild(conteudo);
            conteudo = document.createElement("td");
            conteudo.innerHTML = j;
            linha.appendChild(conteudo);
        } else {
            conteudo = document.createElement("th");
            conteudo.innerHTML = 'Produtos de ' + (i + 1);
            conteudo.setAttribute('colspan', '2');
            linha.appendChild(conteudo);
        }
    }
}