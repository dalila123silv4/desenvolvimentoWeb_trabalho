/* === ESPERA A PÁGINA INTEIRA CARREGAR === */
document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
        1. LÓGICA DO ACORDEÃO (FILTROS)
    ============================================================ */
    const triggers = document.querySelectorAll('.filtro-trigger');
    if (triggers) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const conteudo = trigger.nextElementSibling;
                trigger.classList.toggle('ativo');
                // Tenta expandir/colapsar o conteúdo (útil se você usar max-height no CSS)
                if (conteudo.style.maxHeight) {
                    conteudo.style.maxHeight = null;
                } else {
                    conteudo.style.maxHeight = conteudo.scrollHeight + "px";
                }
            });
        });
    }

    /* ============================================================
        2. LÓGICA DO SLIDER DE IMAGENS (PRODUTOS)
    ============================================================ */
    function inicializarSlider(sliderContainer) {
        const slider = sliderContainer.querySelector(".image-slider");
        const slides = sliderContainer.querySelectorAll(".image-slider img");
        const prevBtn = sliderContainer.querySelector(".prev-btn");
        const nextBtn = sliderContainer.querySelector(".next-btn");
        const dotsContainer = sliderContainer.querySelector(".slider-dots");

        // Checa se os elementos essenciais existem
        if (!slider || !slides.length || !prevBtn || !nextBtn || !dotsContainer) {
            // Esconde os controles se houver 0 ou 1 slide
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Esconde os controles se houver apenas 1 slide
        if (totalSlides <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            dotsContainer.style.display = 'none';
            return;
        }

        // Criação dos Dots
        dotsContainer.innerHTML = '';
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

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        updateSlider();
    }

    // Inicializa o slider para cada produto
    const todosOsProdutos = document.querySelectorAll('.produto');
    todosOsProdutos.forEach(produtoCard => {
        const sliderContainer = produtoCard.querySelector('.slider-container');
        if (sliderContainer) inicializarSlider(sliderContainer);
    });

    /* ============================================================
        3. FUNÇÕES GERAIS DO CARRINHO (LocalStorage)
    ============================================================ */

    function getCart() {
        try {
            const cartString = localStorage.getItem('dy_carrinho');
            return cartString ? JSON.parse(cartString) : [];
        } catch (e) {
            console.error("Erro ao ler carrinho do localStorage", e);
            return [];
        }
    }

    /**
     * @description Atualiza o localStorage e o contador do carrinho no header.
     */
    function saveCart(cart) {
        localStorage.setItem('dy_carrinho', JSON.stringify(cart));
        updateCartCounter(); // Chama a função unificada de atualização
    }

    /**
     * @description Atualiza o contador de itens no cabeçalho. 
     * Procura pelo elemento com ID 'cart-link' (preferencial) ou pela tag <a> do carrinho.
     */
    function updateCartCounter() {
        const cart = getCart();
        // Soma a propriedade 'qty' dos itens
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

        // CORREÇÃO: Tenta encontrar o elemento pelo ID 'cart-link' (deve ser inserido no HTML)
        const cartLink = document.getElementById('cart-link') || document.querySelector('nav a[href="carrinho.html"]');

        if (cartLink) {
            // Se for encontrado, atualiza o texto do link
            if (totalItems > 0) {
                cartLink.innerHTML = `🛒 Carrinho (${totalItems})`;
            } else {
                cartLink.innerHTML = `🛒 Carrinho`;
            }
        }
        // Se a página for o carrinho, a função renderCart() cuidará dos totais na seção principal.
    }


    /* ============================================================
        4. LÓGICA DE ADICIONAR AO CARRINHO (Home/Produtos)
    ============================================================ */

    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const prodData = event.currentTarget.dataset;
            let cart = getCart();

            const existingItem = cart.find(item => item.id === prodData.id);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                const newItem = {
                    id: prodData.id,
                    name: prodData.name,
                    price: parseFloat(prodData.price),
                    image: prodData.image, // Usando data-image (melhor para o primeiro load)
                    qty: 1
                };
                cart.push(newItem);
            }

            saveCart(cart);
            alert(`"${prodData.name}" adicionado ao carrinho!`);
        });
    });
    /* ============================================================
            5. LÓGICA DE EXIBIR E CALCULAR O CARRINHO (carrinho.html)
            - Esta parte só é executada se os elementos da página de carrinho existirem.
        ============================================================ */

    // IDs que só existem na página carrinho.html

    const cartListEl = document.getElementById('lista-de-produtos-carrinho');  
    const subtotalEl = document.getElementById('subtotal');
    const totalFinalEl = document.getElementById('total-final');
    const freteEl = document.getElementById('frete');
    const emptyMessage = document.getElementById('empty-cart-message');

    // 💡 NOVAS CONSTANTES PARA A LÓGICA DE FRETE

    const FRETE_FIXO = 35.00;
    const LIMITE_FRETE_GRATIS = 300.00;


    if (cartListEl && subtotalEl && totalFinalEl) { // Roda apenas na página do carrinho


        function updateCartTotal() {
            const cart = getCart();
            let total = 0;
            cart.forEach(item => { total += item.price * item.qty; });

            //  NOVA LÓGICA DE FRETE
            let freteAplicado = FRETE_FIXO;
            let freteDisplay = freteAplicado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            if (total >= LIMITE_FRETE_GRATIS) {
                freteAplicado = 0;
                freteDisplay = "Grátis";
            }

            const totalComFrete = total + freteAplicado;

            // Formata para BRL
            const subtotalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const totalFinalFormatado = totalComFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            // Atualiza os elementos de resumo

            subtotalEl.innerText = subtotalFormatado;
            freteEl.innerText = freteDisplay; // Exibe "Grátis" ou o valor formatado

            totalFinalEl.innerText = totalFinalFormatado;
        }


        function renderCart() {
            const cart = getCart();
            cartListEl.innerHTML = '';

            // Lógica para esconder/mostrar o carrinho vazio
            if (cart.length === 0) {
                // Certifique-se de que a section de resumo está escondida se o carrinho estiver vazio
                document.querySelector('.resumo-pedido').style.display = 'none';
                // Exibe a mensagem de carrinho vazio
                if (emptyMessage) emptyMessage.style.display = 'block';
                // Limpa a lista de produtos (caso houvesse algo)

                cartListEl.innerHTML = '';
                updateCartTotal();
                return;
            } else {
                if (emptyMessage) emptyMessage.style.display = 'none';
                document.querySelector('.resumo-pedido').style.display = 'block';
            }



            cart.forEach(item => {
                const itemTotal = item.price * item.qty;
                const itemTotalFormatado = itemTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                const itemHTML = `
 <div class="item-produto" data-id="${item.id}" data-price="${item.price}"> <img src="${item.image}" alt="${item.name}" 
 <div class="detalhes">
 <h3>${item.name}</h3>
<p>Preço Unit.: R$ ${item.price.toFixed(2).replace('.', ',')}</p> 
<p class="price">${itemTotalFormatado}</p>
 </div>
<div class="quantidade">
<button class="btn-qty minus" data-id="${item.id}">-</button>
<input type="number" value="${item.qty}" readonly class="input-qty">
<button class="btn-qty plus" data-id="${item.id}">+</button>
</div>
<div class="remover">
<i class="fa-solid fa-trash-can" data-id="${item.id}"></i>
</div>
</div>
`;
                cartListEl.insertAdjacentHTML('beforeend', itemHTML);
            });


            updateCartTotal();
            attachCartEvents();
        }

        // As funções attachCartEvents, updateQuantity e removeItem permanecem IGUAIS:
        function attachCartEvents() {
            document.querySelectorAll('.btn-qty.plus').forEach(btn => { btn.addEventListener('click', (e) => updateQuantity(e.currentTarget.dataset.id, 1)); });


            document.querySelectorAll('.btn-qty.minus').forEach(btn => { btn.addEventListener('click', (e) => updateQuantity(e.currentTarget.dataset.id, -1)); });


            document.querySelectorAll('.remover i').forEach(btn => { btn.addEventListener('click', (e) => removeItem(e.currentTarget.dataset.id)); });
        }


        function updateQuantity(id, change) {
            let cart = getCart();
            const item = cart.find(i => i.id === id);

            if (item) {
                item.qty += change;
                if (item.qty < 1) { // Remove se for tentar diminuir abaixo de 1
                    removeItem(id);
                    return;
                }
                saveCart(cart);
                renderCart(); // Redesenha para atualizar a visualização e o total
            }
        }


        function removeItem(id) {
            const confirmacao = confirm("Tem certeza que deseja remover este item?");
            if (confirmacao) {
                let cart = getCart();
                cart = cart.filter(item => item.id !== id);
                saveCart(cart);
                renderCart();
            }
        }


        renderCart(); // Carrega o carrinho quando a página carrega

    }



    /* ============================================================
        6. LÓGICA DE LOGIN, CADASTRO E RECUPERAÇÃO
    ============================================================ */

    // LÓGICA DE LOGIN
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = document.getElementById("email").value;
            const passwordInput = document.getElementById("password").value;
            const msgError = document.getElementById("msgError");

            const emailCadastrado = "admin@dy.com";
            const senhaCadastrada = "123456";

            if (emailInput === emailCadastrado && passwordInput === senhaCadastrada) {
                msgError.style.display = "none";
                alert("Login realizado com sucesso! Bem-vindo(a).");
                window.location.href = "index.html";
            } else {
                msgError.innerText = "E-mail ou senha incorretos.";
                msgError.style.display = "block";
                document.getElementById("password").value = "";
            }
        });
    }

    // LÓGICA DE CADASTRO
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const senha = document.getElementById("senhaCadastro").value;
            const confirmar = document.getElementById("senhaConfirmar").value;
            const msgError = document.getElementById("msgErrorCadastro");

            if (senha !== confirmar) {
                msgError.innerText = "As senhas não coincidem. Tente novamente.";
                msgError.style.display = "block";
            } else {
                msgError.style.display = "none";
                alert("Conta criada com sucesso! Faça login para continuar.");
                window.location.href = "login.html";
            }
        });
    }

    // LÓGICA DE RECUPERAR SENHA
    const recuperarForm = document.getElementById("recuperarForm");
    if (recuperarForm) {
        recuperarForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("emailRecuperar").value;
            alert(`Link de recuperação enviado para: ${email}\n(Verifique sua caixa de entrada)`);
            window.location.href = "login.html";
        });
    }

    // CHAMADA FINAL CORRIGIDA: Garante que o contador do carrinho seja atualizado
    updateCartCounter();

}); // <-- FIM do document.addEventListener