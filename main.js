// main.js - Script oficial do METAL NATION 🤘🔥

// Mensagem no console pra quem abrir o DevTools
console.log("🔥 Bem-vindo ao Metal Nation - O Reino do Metal!");

// Mensagem de boas-vindas ao carregar o site
window.onload = function() {
    alert("Prepare seu pescoço, guerreiro! Bem-vindo ao METAL NATION 🤘");
}

// Função: Efeito de hover nas bandas - destaque brutal
function adicionarEfeitoHoverNasBandas() {
    const bandas = document.querySelectorAll('.band');

    bandas.forEach(banda => {
        banda.addEventListener('mouseover', () => {
            banda.style.backgroundColor = '#222';
            banda.style.color = '#f00';
            banda.style.transform = 'scale(1.03)';
            banda.style.transition = '0.3s';
        });

        banda.addEventListener('mouseout', () => {
            banda.style.backgroundColor = '#111';
            banda.style.color = '#fff';
            banda.style.transform = 'scale(1)';
        });
    });
}

// Função: Mensagem de confirmação brutal no formulário de contato
function mensagemDeConfirmacao() {
    const botao = document.querySelector('form button');

    const mensagensMetal = [
        "Sua mensagem foi enviada aos deuses do metal!",
        "Valhalla recebeu sua mensagem com honra!",
        "Sua mensagem ecoou nos salões de Asgard!",
        "Bruce Dickinson está orgulhoso do seu contato!",
        "Dave Mustaine leu e mandou um solo em sua homenagem!"
    ];

    botao.addEventListener('click', (evento) => {
        evento.preventDefault();
        const mensagemAleatoria = mensagensMetal[Math.floor(Math.random() * mensagensMetal.length)];
        alert(mensagemAleatoria);
    });
}

// Função: Header que desaparece ao rolar
function configurarHeaderDesaparecendo() {
    const header = document.querySelector('header');
    let ultimoScroll = window.scrollY;

    // Garante que o header começa visível
    header.style.position = 'relative';
    header.style.transition = 'top 0.5s ease';

    window.addEventListener('scroll', () => {
        const scrollAtual = window.scrollY;

        if (scrollAtual > ultimoScroll && scrollAtual > 100) {
            // Rolar pra baixo - header sobe e some
            header.style.top = '-100px';
        } else {
            // Rolar pra cima ou no topo - header volta
            header.style.top = '0';
        }

        ultimoScroll = scrollAtual;
    });
}

// Função principal - Chama tudo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    adicionarEfeitoHoverNasBandas();
    mensagemDeConfirmacao();
    configurarHeaderDesaparecendo();
});
