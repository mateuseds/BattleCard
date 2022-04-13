const cartas = [
    (carta1 = {
        nome: "Zoro",
        imagem: "http://dentrodachamine.com/wp-content/uploads/2018/12/zorosleeping.jpg",
        atributos: { Ataque: 4, Defesa: 2, Velocidade: 3 }
    }),
    // Velocidade: 3 , Habilidade: 5
    (carta2 = {
        nome: "Dangai Ichigo",
        imagem: "http://dlrpg-hbe.weebly.com/uploads/4/7/6/1/47613475/9189964_orig.jpg",
        atributos: { Ataque: 6, Defesa: 6, Velocidade: 3 }
    }),
    // Velocidade: 3 , Habilidade: 5
    (carta3 = {
        nome: "Zenitsu",
        imagem: "https://nerdhits.com.br/wp-content/uploads/2022/02/ZENITSU-1-1200x900.jpg",
        atributos: { Ataque: 2, Defesa: 2, Velocidade: 4 }
    }),
    //Velocidade: 4 , Habilidade: 2
    (carta4 = {
        nome: "Wano Zoro",
        imagem: "https://criticalhits.com.br/wp-content/uploads/2021/12/zoro.jpg",
        atributos: { Ataque: 9, Defesa: 7, Velocidade: 8 }
    }),
    //Velocidade: 8 , Habilidade: 10
    (carta5 = {
        nome: "Mugetsu Ichigo",
        imagem: "https://animesher.com/orig/0/69/691/6913/animesher.com_getsuga-tensho-japan-bleach-691392.jpg",
        atributos: { Ataque: 10, Defesa: 8, Velocidade: 10 }
    }),
    //Velocidade: 10 , Habilidade: 8
    (carta6 = {
        nome: "Asleep Zenitsu",
        imagem: "https://oxentesensei.com.br/wp-content/uploads/2021/10/CAPA-23-1.jpg",
        atributos: { Ataque: 8, Defesa: 6, Velocidade: 11 }
    })
    // Velocidade: 11 , Habilidade: 10
];

let cartaJogador;
let cartaMaquina;

function sortearCarta() {
    const numeroCartaMaquina = parseInt(Math.random() * 7);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * 7);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 7);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let divResultado = document.getElementById("resultado");

    if (
        cartaJogador.atributos[atributoSelecionado] >
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
        cartaJogador.atributos[atributoSelecionado] <
        cartaMaquina.atributos[atributoSelecionado]
    ) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    console.log(cartaMaquina.nome);
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    let moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaJogador.atributos[atributo] +
            "<br>";
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    let moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
