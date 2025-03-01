// main.js - Script oficial do METAL NATION 🤘

// Quando a página carrega, a gente já solta uma mensagem no console
console.log("🔥 Bem-vindo ao Metal Nation - O Reino do Metal! 🔥");

// Criamos uma função para dar um alerta sinistro quando o visitante chega
window.onload = function() {
    alert("Prepare seu pescoço! Bem-vindo ao METAL NATION 🤘");
}

// Função que aplica um efeito 'dark highlight' quando o mouse passa sobre cada banda
function adicionarEfeitoHoverNasBandas() {
    const bandas = document.querySelectorAll('.band'); // Pegamos cada article da seção de bandas

    bandas.forEach(banda => {
        banda.addEventListener('mouseover', () => {
            banda.style.backgroundColor = '#222';
            banda.style.color = '#f00';
            banda.style.transform = 'scale(1.05)';
            banda.style.transition = '0.3s';
        });

        banda.addEventListener('mouseout', () => {
            banda.style.backgroundColor = 'transparent';
            banda.style.color = '#fff';
            banda.style.transform = 'scale(1)';
        });
    });
}

// Função para criar um efeito na galeria - tipo "click pra expandir a imagem"
function ativarZoomGaleria() {
    const imagens = document.querySelectorAll('.band-image');

    imagens.forEach(imagem => {
        imagem.style.cursor = 'pointer';  // Mostra que dá pra interagir

        imagem.addEventListener('click', () => {
            if (imagem.style.transform === 'scale(1.5)') {
                imagem.style.transform = 'scale(1)';
                imagem.style.transition = 'transform 0.5s ease';
            } else {
                imagem.style.transform = 'scale(1.5)';
                imagem.style.transition = 'transform 0.5s ease';
            }
        });
    });
}

// Função que adiciona uma mensagem aleatória de metal a cada vez que o visitante clica em "Enviar ao Reino"
function mensagemDeConfirmacao() {
    const botao = document.querySelector('form button');

    const mensagensMetal = [
        "Sua mensagem foi enviada para os Deuses do Metal!",
        "O Martelo de Thor agradece seu contato!",
        "Sua mensagem ecoará pelos salões de Valhalla!",
        "Bruce Dickinson aprovaria essa mensagem!",
        "Dave Mustaine já tá lendo sua mensagem!"
    ];

    botao.addEventListener('click', (evento) => {
        evento.preventDefault(); // Evita o envio real do formulário (só pra demo)

        const mensagemAleatoria = mensagensMetal[Math.floor(Math.random() * mensagensMetal.length)];
        alert(mensagemAleatoria);
    });
}

// Essa função faz o header ficar fixo depois que você rola pra baixo
function tornarHeaderFixo() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            header.style.backgroundColor = '#111';
            header.style.zIndex = '999';
        } else {
            header.style.position = 'relative';
            header.style.backgroundColor = 'transparent';
        }
    });
}

// Função mestra que inicia tudo quando a página carrega
function iniciarMetalNation() {
    adicionarEfeitoHoverNasBandas();
    ativarZoomGaleria();
    mensagemDeConfirmacao();
    tornarHeaderFixo();
}

// Chamamos a função principal
document.addEventListener('DOMContentLoaded', iniciarMetalNation);
