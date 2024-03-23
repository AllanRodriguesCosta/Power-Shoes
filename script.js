var carousel = document.getElementById('carousel');
var images = carousel.getElementsByTagName('img');
var index = 0;
var intervalo = 5000;
var timer; // Variável para armazenar o temporizador

function trocarImagem(indice) {
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    index = indice;
    images[index].style.display = 'block';

    // Limpa o temporizador anterior antes de iniciar um novo
    clearTimeout(timer);

    // Define um novo temporizador para esconder a imagem após 3 segundos
    timer = setTimeout(function() {
        images[index].style.display = 'none';
        index = (index + 1) % images.length;
        images[index].style.display = 'block';
    }, 5000);
}

function criarBotoesCarousel() {
    var botoesCarousel = document.getElementById('botoes-carousel');
    for (var i = 0; i < images.length; i++) {
        var botao = document.createElement('button');
        botao.textContent = (i + 1).toString();
        botao.addEventListener('click', function(index) {
            return function() {
                trocarImagem(index);
            };
        }(i));
        botoesCarousel.appendChild(botao);
    }
}

criarBotoesCarousel();
trocarImagem(index);
setInterval(function() {
    trocarImagem((index + 1) % images.length);
}, intervalo);

var inputBuscar = document.getElementById('input_buscar');

// Limpar o texto quando o input recebe foco
inputBuscar.addEventListener('focus', function() {
    this.value = "";
});

// Restaurar o texto padrão quando o input perde o foco e está vazio
inputBuscar.addEventListener('blur', function() {
    if (this.value === "") {
        this.value = "O que deseja encontrar?";
    }
});
