const cartas = [
    (carta1 = {
        nome: "Zoro",
        imagem: "http://dentrodachamine.com/wp-content/uploads/2018/12/zorosleeping.jpg",
        atributos: { Ataque: 4, Vigor: 2, Habilidade: 2, Velocidade: 3 }
    }),
    (carta2 = {
        nome: "Dangai Ichigo",
        imagem: "http://dlrpg-hbe.weebly.com/uploads/4/7/6/1/47613475/9189964_orig.jpg",
        atributos: { Ataque: 6, Vigor: 4, Habilidade: 6, Velocidade: 3 }
    }),
    (carta3 = {
        nome: "Zenitsu",
        imagem: "https://nerdhits.com.br/wp-content/uploads/2022/02/ZENITSU-1-1200x900.jpg",
        atributos: { Ataque: 2, Vigor: 1, Habilidade: 2, Velocidade: 4 }
    }),
    (carta4 = {
        nome: "Wano Zoro",
        imagem: "https://criticalhits.com.br/wp-content/uploads/2021/12/zoro.jpg",
        atributos: { Ataque: 9, Vigor: 10, Habilidade: 7, Velocidade: 8 }
    }),
    (carta5 = {
        nome: "Mugetsu Ichigo",
        imagem: "https://animesher.com/orig/0/69/691/6913/animesher.com_getsuga-tensho-japan-bleach-691392.jpg",
        atributos: { Ataque: 10, Vigor: 9, Habilidade: 8, Velocidade: 10 }
    }),
    (carta6 = {
        nome: "Asleep Zenitsu",
        imagem: "https://oxentesensei.com.br/wp-content/uploads/2021/10/CAPA-23-1.jpg",
        atributos: { Ataque: 8, Vigor: 11, Habilidade: 6, Velocidade: 11 }
    })
];

const buttonSortear = document.getElementById("button-sortear");
const buttonJogar = document.getElementById("button-jogar");

let cartaJogador;
let cartaMaquina;


function sortearCarta() {
    const numeroCartaMaquina = parseInt(Math.random() * 7, 10);
    let numeroCartaJogador = parseInt(Math.random() * 7, 10);

    cartaMaquina = cartas[numeroCartaMaquina];

    while (numeroCartaJogador === numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 7, 10);
    }

    cartaJogador = cartas[numeroCartaJogador];

    buttonSortear.disabled = true;
    buttonJogar.disabled = false;

    const divCartaJogador = document.getElementById("carta-jogador");
    exibirCarta(divCartaJogador, cartaJogador);
}


function obtemAtributoSelecionado() {
    const radioAtributos = document.getElementsByName("atributo");

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked === true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    const atributoSelecionado = obtemAtributoSelecionado();
    const divResultado = document.getElementById("resultado");
    let resultado = "Empatou";

    if (
        cartaJogador.atributos[atributoSelecionado] >
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        resultado = "Venceu";
    } else if (
        cartaJogador.atributos[atributoSelecionado] <
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        resultado = "Perdeu";
    }

    divResultado.innerHTML = `<p class='resultado-final'>${resultado}</p>`;

    buttonJogar.disabled = true;

    const divCartaMaquina = document.getElementById("carta-maquina")
    exibirCarta(divCartaMaquina, cartaMaquina);
}

function exibirCarta(carta, jogador) {
    let atributosJogador = "";

    carta.style.backgroundImage = `url(${jogador.imagem})`;

    for (let atributo in jogador.atributos) {
        atributosJogador += `<p>${atributo} ${jogador.atributos[atributo]}</p>`;
    }

    carta.innerHTML = `
        <img src="file:///C:/Users/Avenue%20Code/Desktop/learning/game/assets/card.png">
        <p class='carta-subtitle'>${jogador.nome}</p>
        <div class='carta-status'${atributosJogador}</div>
    `;
}

buttonSortear.addEventListener("click", sortearCarta);
buttonJogar.addEventListener("click", jogar);