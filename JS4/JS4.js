class IntegerSet {
    constructor(maxValor) {
        this.tamanho = maxValor;


        let v = [];
        for (let i = 0; i < this.tamanho; i++) {
            v.push(false);
        }
        this.vetor = v;

    }

    inserir(valor) {
        this.vetor[valor] = true;
    }

    excluir(valor) {
        this.vetor[valor] = false;
    }

    getVetor() {
        return this.vetor;
    }

    getTamanho() {
        return this.tamanho;
    }

    uniao(conj2) {
        let tam;
        let uniao = [];
        let vet1 = this.getVetor(), vet2 = conj2.getVetor()

        if (this.getTamanho() > conj2.getTamanho()) {
            tam = conj2.getTamanho();
        } else {
            tam = this.getTamanho();
        }

        for (let i = 0; i < tam; i++) {
            if (vet1[i] == true || vet2[i] == true) {
                uniao.push(true);
            } else {
                uniao.push(false);
            }
        }
        return uniao;
    }

    intersecao(conj2) {
        let tam;
        let inter = [];
        let vet1 = this.getVetor(), vet2 = conj2.getVetor()

        if (this.getTamanho() > conj2.getTamanho()) {
            tam = conj2.getTamanho();
        } else {
            tam = this.getTamanho();
        }

        for (let i = 0; i < tam; i++) {
            if (vet1[i] == true && vet2[i] == true) {
                inter.push(true);
            } else {
                inter.push(false);
            }
        }
        return inter;
    }

    diferenca(conj2) {
        let tam;
        let dif = [];
        let vet1 = this.getVetor(), vet2 = conj2.getVetor()

        if (this.getTamanho() > conj2.getTamanho()) {
            tam = conj2.getTamanho();
        } else {
            tam = this.getTamanho();
        }

        for (let i = 0; i < tam; i++) {
            if (vet1[i] == true && vet2[i] == false) {
                dif.push(true);
            } else {
                dif.push(false);
            }
        }
        return dif;
    }
}

let max;
console.log("Valor maximo do conjunto 1:")
max = parseInt(prompt());
let c1 =  new IntegerSet(max);
console.log("Valor maximo do conjunto 2:")
max = parseInt(prompt());
let c2 = new IntegerSet(max);
let acao = 0, val = 0;

do{
    console.log("O que deseja fazer?:\n1 - Inserir elemento no Conjunto 1\n2 - Excluir elemento do Conjunto 1\n3 - Inserir elemento no Conjunto 2\n4 - Excluir elemento do Conjunto 2\n0 - Nenhuma alternativa"); 
    acao = parseInt(prompt());

    switch (acao) {
        case 1:
            console.log("Qual valor quer inserir?");
            val = parseInt(prompt());
            c1.inserir(val);
            console.log("Operação realizada com sucesso");
            break;
        case 2:
            console.log("Qual valor quer excluir?");
            val = parseInt(prompt());
            c1.excluir(val);
            console.log("Operação realizada com sucesso");
            break;
        case 3:
            console.log("Qual valor quer inserir?");
            val = parseInt(prompt());
            c2.inserir(val);
            console.log("Operação realizada com sucesso");
            break;
        case 4:
            console.log("Qual valor quer excluir?");
            val = parseInt(prompt());
            c2.excluir(val);
            console.log("Operação realizada com sucesso");
            break;
    }
}while(acao); 


