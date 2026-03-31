const carrosel = document.getElementById("carrosel");
const slides = document.getElementById("slides");


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
