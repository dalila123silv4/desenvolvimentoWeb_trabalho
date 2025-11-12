/* === ESPERA A PÁGINA INTEIRA CARREGAR === */
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. SEU CÓDIGO ATUAL (Filtros) ---
    // Isso está perfeito, não mude nada aqui.
    /* === LÓGICA DO ACORDEÃO DE FILTROS === */
    const triggers = document.querySelectorAll('.filtro-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const conteudo = trigger.nextElementSibling;
            trigger.classList.toggle('ativo');
            conteudo.classList.toggle('ativo');
        });
    });


    // --- 2. NOVO CÓDIGO (Sliders) ---
    // Cole esta parte logo abaixo do seu código de filtro.
    /* === LÓGICA DO SLIDER DE IMAGENS (PARA VÁRIOS PRODUTOS) === */

    // Primeiro, criamos uma função que "ativa" um slider
    function inicializarSlider(sliderContainer) {

        // Encontra os elementos APENAS DENTRO desse slider específico
        const slider = sliderContainer.querySelector(".image-slider");
        const slides = sliderContainer.querySelectorAll(".image-slider img");
        const prevBtn = sliderContainer.querySelector(".prev-btn"); // Usando a classe!
        const nextBtn = sliderContainer.querySelector(".next-btn"); // Usando a classe!
        const dotsContainer = sliderContainer.querySelector(".slider-dots");

        // Se não achar todos os botões, etc., ele nem continua.
        if (!slider || !slides.length || !prevBtn || !nextBtn || !dotsContainer) {
            return;
        }

        let currentIndex = 0;
        const totalSlides = slides.length;

        // 1. Criar as Bolinhas
        dotsContainer.innerHTML = ''; // Limpa bolinhas (caso existam)
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);

            dot.addEventListener("click", () => {
                currentIndex = i;
                updateSlider();
            });
        }

        const dots = dotsContainer.querySelectorAll(".dot");
        if (dots.length) dots[0].classList.add("active");

        // 2. Função para Atualizar o Slider (só mexe neste slider)
        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        // 3. Eventos dos Botões (Setas)
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        updateSlider(); // Inicia o slider na posição 0
    }

    // --- AGORA, VAMOS RODAR A FUNÇÃO ACIMA PARA CADA PRODUTO ---

    // 1. Encontra TODOS os cards de produto na página
    const todosOsProdutos = document.querySelectorAll('.produto');

    // 2. Faz um loop por cada card
    todosOsProdutos.forEach(produtoCard => {
        // 3. Procura um .slider-container dentro dele
        const sliderContainer = produtoCard.querySelector('.slider-container');

        // 4. Se achar, inicializa o slider para ele
        if (sliderContainer) {
            inicializarSlider(sliderContainer);
        }
    });

}); // <-- FIM do document.addEventListener