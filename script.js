const carrosel = document.getElementById("carrosel");
const slides = document.getElementById("slides");
const secaoProdutos = document.getElementById('popular');

let index = 0;

function moverCarrosel() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function voltarIndex() {
    if (index>0) {
        index--;
    }
    moverCarrosel()
}

function avancarIndex() {
    if (index<2) {
        index++;
    }
    moverCarrosel()
}

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('ativo');
}
