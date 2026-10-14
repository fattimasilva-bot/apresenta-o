const perguntas = [
    {
        pergunta: "1. A IA começa a substituir pessoas no mercado de trabalho. O que você faria?",
        alternativas: [
            {
                texto: "A) Incentivar cursos e a capacitação profissional.",
                pontos: 2
            },
            {
                texto: "B) Deixar a tecnologia avançar sem regras.",
                pontos: 0
            },
            {
                texto: "C) Proibir toda inteligência artificial.",
                pontos: 1
            }
        ]
    },
    {
        pergunta: "2. Uma empresa utiliza dados pessoais para treinar sua IA. Qual é sua decisão?",
        alternativas: [
            {
                texto: "A) Permitir o uso de todos os dados.",
                pontos: 0
            },
            {
                texto: "B) Exigir consentimento e proteção dos dados.",
                pontos: 2
            },
            {
                texto: "C) Ignorar o assunto.",
                pontos: 1
            }
        ]
    },
    {
        pergunta: "3. Uma IA espalha uma notícia falsa na internet. O que fazer?",
        alternativas: [
            {
                texto: "A) Compartilhar a notícia imediatamente.",
                pontos: 0
            },
            {
                texto: "B) Verificar as fontes antes de compartilhar.",
                pontos: 2
            },
            {
                texto: "C) Acreditar sem questionar.",
                pontos: 1
            }
        ]
    },
    {
        pergunta: "4. Como deve ser a inteligência artificial do futuro?",
        alternativas: [
            {
                texto: "A) Sem limites ou fiscalização.",
                pontos: 0
            },
            {
                texto: "B) Segura, ética e supervisionada por pessoas.",
                pontos: 2
            },
            {
                texto: "C) Presente em tudo, sem avaliar os riscos.",
                pontos: 1
            }
        ]
    }
];

let atual = 0;
let pontos = 0;

const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const resultado = document.getElementById("resultado");

function iniciarJogo() {
    atual = 0;
    pontos = 0;

    inicio.classList.add("escondido");
    resultado.classList.add("escondido");
    jogo.classList.remove("escondido");

    mostrarPergunta();
}

function mostrarPergunta() {
    const dados = perguntas[atual];

    document.getElementById("pergunta").textContent =
        dados.pergunta;

    document.getElementById("contador").textContent =
        `Pergunta ${atual + 1} de ${perguntas.length}`;

    document.getElementById("preenchimento").style.width =
        `${(atual / perguntas.length) * 100}%`;

    const area = document.getElementById("alternativas");
    area.innerHTML = "";

    dados.alternativas.forEach(opcao => {
        const botao = document.createElement("button");

        botao.className = "alternativa";
        botao.textContent = opcao.texto;

        botao.addEventListener("click", () => {
            pontos += opcao.pontos;
            atual++;

            if (atual < perguntas.length) {
                mostrarPergunta();
            } else {
                mostrarResultado();
            }
        });

        area.appendChild(botao);
    });
}

function mostrarResultado() {
    jogo.classList.add("escondido");
    resultado.classList.remove("escondido");

    document.getElementById("preenchimento").style.width = "100%";

    let mensagem;

    if (pontos >= 7) {
        mensagem = "Excelente! Você prioriza uma IA ética e responsável, pensando no bem-estar da sociedade.";
    } else if (pontos >= 4) {
        mensagem = "Boa missão! Você reconhece as possibilidades da IA, mas ainda existem riscos que merecem atenção.";
    } else {
        mensagem = "O futuro precisa de reflexão! É importante considerar os impactos sociais e os riscos da inteligência artificial.";
    }

    document.getElementById("texto-resultado").textContent = mensagem;

    document.getElementById("pontuacao").textContent =
        `Sua pontuação: ${pontos} de 8 pontos`;
}
