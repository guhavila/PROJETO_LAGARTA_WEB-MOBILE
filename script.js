// =============================
// SCRIPT PRINCIPAL DO SITE
// =============================

// Este arquivo adiciona interatividade ao seu site.
// Você pode expandir ele conforme o projeto cresce.

// =============================
// 1. BOTÃO "SAIBA MAIS"
// =============================

const botaoSaibaMais = document.querySelector('#container-saiba-mais button');

botaoSaibaMais.addEventListener('click', () => {
    alert('Aqui você pode redirecionar para outra página ou mostrar mais informações!');
});


// =============================
// 2. MENU RESPONSIVO (futuro)
// =============================

// Aqui você pode adicionar um menu hamburguer depois
// Exemplo:

// const menuBtn = document.querySelector('#menu-btn');
// const nav = document.querySelector('nav');

// menuBtn.addEventListener('click', () => {
//     nav.classList.toggle('ativo');
// });


// =============================
// 3. CARROSSEL SIMPLES
// =============================

// Caso você adicione imagens no #containe futuramente

let imagens = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg'
];

let index = 0;
const container = document.querySelector('#containe');

function trocarImagem() {
    if (!container) return;

    container.innerHTML = `<img src="${imagens[index]}" alt="banner">`;

    index++;
    if (index >= imagens.length) {
        index = 0;
    }
}

// Troca a cada 3 segundos
setInterval(trocarImagem, 3000);


// =============================
// 4. EFEITO HOVER NOS PRODUTOS
// =============================

const produtos = document.querySelectorAll('.container-items article');

produtos.forEach(produto => {
    produto.addEventListener('mouseenter', () => {
        produto.style.transform = 'scale(1.05)';
        produto.style.transition = '0.3s';
    });

    produto.addEventListener('mouseleave', () => {
        produto.style.transform = 'scale(1)';
    });
});


// =============================
// 5. SCROLL SUAVE
// =============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const destino = document.querySelector(link.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// =============================
// 6. LOG PARA DEBUG
// =============================

console.log('Script carregado com sucesso!');


// =============================
// IDEIAS PARA VOCÊ ADICIONAR
// =============================

/*

Você pode evoluir esse script com:

- Integração com API de produtos
- Sistema de carrinho de compras
- Filtro por categoria
- Sistema de login
- Validação de formulário
- Lazy loading de imagens
- Dark mode

*/
