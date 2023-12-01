document.addEventListener('DOMContentLoaded', function () {
    // Recupera o elemento que conterá as notícias
    const container = document.getElementById('container-noticia');

    // Cria uma requisição XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Define o método e a URL do arquivo noticias.html
    xhr.open('GET', 'navNoticias.html', true);

    // Configura a função de callback para quando a requisição estiver concluída
    xhr.onreadystatechange = function () {
        // Se a requisição foi concluída com sucesso (status 200)...
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Cria um novo elemento div para as notícias
            const noticiasDiv = document.createElement('div');
            noticiasDiv.innerHTML = xhr.responseText;

            // Adiciona as notícias ao container
            container.innerHTML = xhr.responseText;

            // Inicia o script de navegação
            iniciarNavegacao();
        }
    };

    // Envia a requisição
    xhr.send();
});

function iniciarNavegacao() {
    const noticiasContainers = document.querySelectorAll('.noticia-container');
    let currentIndex = 0;
    const intervaloTransicao = 10000; // Intervalo de 5 segundos (ajuste conforme necessário)
    let intervaloAutomatico;

    function showNoticia(index) {
        noticiasContainers.forEach((container, i) => {
            container.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextNoticia() {
        currentIndex = (currentIndex + 1) % noticiasContainers.length;
        showNoticia(currentIndex);
    }

    function prevNoticia() {
        currentIndex = (currentIndex - 1 + noticiasContainers.length) % noticiasContainers.length;
        showNoticia(currentIndex);
    }

    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    setaEsquerda.addEventListener('click', function () {
        clearInterval(intervaloAutomatico);
        prevNoticia();
        iniciarIntervaloAutomatico();
    });

    setaDireita.addEventListener('click', function () {
        clearInterval(intervaloAutomatico);
        nextNoticia();
        iniciarIntervaloAutomatico();
    });

    function iniciarIntervaloAutomatico() {
        clearInterval(intervaloAutomatico); // Limpa o intervalo antes de iniciar novamente
        intervaloAutomatico = setInterval(avancarAutomatico, intervaloTransicao);
    }

    function avancarAutomatico() {
        nextNoticia();
    }

    // Exibindo a primeira notícia ao carregar a página e iniciando o intervalo automático
    showNoticia(currentIndex);
    iniciarIntervaloAutomatico();
}
