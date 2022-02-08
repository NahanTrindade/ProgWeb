function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jokenpo(jogador, computador) {
    if (jogador == 2 || computador == 2) {
        if (jogador < computador) {
            console.log("voce venceu");
            return 1;
        } else {
            console.log("voce perdeu");
            return 0;
        }
    }else {
        if (jogador > computador) {
            console.log("voce venceu");
            return 1;
        } else {
            console.log("voce perdeu");
            return 0;
        }
    }
}

  
}




