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




