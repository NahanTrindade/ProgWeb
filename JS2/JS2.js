function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jokenpo(jogador, computador) {
    if (jogador == 2 || computador == 2) {
        if (jogador < computador) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (jogador > computador) {
            return 1;
        } else {
            return 0;
        }
    }
}

let cont = 0;
let estado = 0;

do {
    console.log("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura");
    let jogada = parseInt(prompt());
    let comp = randomNum();

    if (comp == 1) {
        console.log("O computador jogou Papel\n");
    }
    if (comp == 2) {
        console.log("O computador jogou Pedra\n");
    }
    if (comp == 3) {
        console.log("O computador jogou Tesoura\n");
    }

    estado = jokenpo(jogada, comp);
    if (estado == 1) {
        console.log("Você venceu!");
        cont++;
    } else {
        console.log("Você perdeu! A sua pontuação foi de " + cont);
    }

} while (estado);