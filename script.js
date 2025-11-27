/* === VARIÁVEIS GLOBAIS (CONSTANTES) === */
const FRETE_FIXO = 35.00;
const LIMITE_FRETE_GRATIS = 300.00;
// --- DADOS DE PRODUTOS PARA EXIBIÇÃO NO SITE ---

const PRODUCTS_DATA = [
    // --- CATEGORIA: TOPS (IDs ÚNICOS, NOMES ÚNICOS E CAMINHOS CORRIGIDOS) ---
    // (MANTENHA OS CAMINHOS DE ACORDO COM SUA ESTRUTURA REAL: 'imagemm/tops/topX.jpg')
    { id: 'top-basico01', name: 'Top Alça Fina (Mod. 01)', price: 60.00, category: 'tops', images: ['imagem/tops/top1.jpg', 'imagem/tops/top2.jpg'] },
    { id: 'top-basico02', name: 'Top Alça Fina (Mod. 02)', price: 60.00, category: 'tops', images: ['imagem/tops/top3.jpg', 'imagem/tops/top4.jpg'] },
    { id: 'top-basico03', name: 'Top Alça Fina (Mod. 03)', price: 60.00, category: 'tops', images: ['imagem/tops/top5.jpg', 'imagem/tops/top6.jpg'] },
    { id: 'top-basico04', name: 'Top Alça Fina (Mod. 04)', price: 60.00, category: 'tops', images: ['imagem/tops/top7.jpg', 'imagem/tops/top8.jpg'] },
    { id: 'top-basico05', name: 'Top Alça Fina (Mod. 05)', price: 60.00, category: 'tops', images: ['imagem/tops/top9.jpg', 'imagem/tops/top10.jpg'] },
    { id: 'top-basico06', name: 'Top Alça Média (Mod. 06)', price: 60.00, category: 'tops', images: ['imagem/tops/top11.jpg', 'imagem/tops/top12.jpg'] },
    { id: 'top-basico07', name: 'Top Alça Média (Mod. 07)', price: 60.00, category: 'tops', images: ['imagem/tops/top13.jpg', 'imagem/tops/top14.jpg'] },
    { id: 'top-basico08', name: 'Top Recorte (Mod. 08)', price: 60.00, category: 'tops', images: ['imagem/tops/top15.jpg', 'imagem/tops/top16.jpg'] },
    { id: 'top-basico09', name: 'Top Recorte (Mod. 09)', price: 60.00, category: 'tops', images: ['imagem/tops/top17.jpg', 'imagem/tops/top18.jpg'] },
    { id: 'top-basico10', name: 'Top Detalhe Tule (Mod. 10)', price: 65.00, category: 'tops', images: ['imagem/tops/top19.jpg', 'imagem/tops/top20.jpg'] },
    { id: 'top-basico11', name: 'Top Detalhe Tule (Mod. 11)', price: 65.00, category: 'tops', images: ['imagem/tops/top21.jpg', 'imagem/tops/top22.jpg'] },
    { id: 'top-basico12', name: 'Top Detalhe Tule (Mod. 12)', price: 65.00, category: 'tops', images: ['imagem/tops/top23.jpg', 'imagem/tops/top24.jpg'] },
    { id: 'top-basico13', name: 'Top C/ Bojo (Mod. 13)', price: 70.00, category: 'tops', images: ['imagem/tops/top25.jpg', 'imagem/tops/top26.jpg'] },
    { id: 'top-basico14', name: 'Top C/ Bojo (Mod. 14)', price: 70.00, category: 'tops', images: ['imagem/tops/top27.jpg', 'imagem/tops/top28.jpg'] },
    { id: 'top-basico15', name: 'Top Estampado A (Mod. 15)', price: 75.00, category: 'tops', images: ['imagem/tops/top29.jpg', 'imagem/tops/top30.jpg'] },
    { id: 'top-basico16', name: 'Top Estampado B (Mod. 16)', price: 75.00, category: 'tops', images: ['imagem/tops/top31.jpg', 'imagem/tops/top32.jpg'] },
    { id: 'top-basico17', name: 'Top Estampado C (Mod. 17)', price: 79.90, category: 'tops', images: ['imagem/tops/top33.jpg', 'imagem/tops/top34.jpg'] },
    { id: 'top-basico18', name: 'Top Estampado D (Mod. 18)', price: 79.90, category: 'tops', images: ['imagem/tops/top35.jpg', 'imagem/tops/top36.jpg'] },
    { id: 'top-basico19', name: 'Top Performance X (Mod. 19)', price: 85.00, category: 'tops', images: ['imagem/tops/top37.jpg', 'imagem/tops/top38.jpg'] },
    { id: 'top-basico20', name: 'Top Performance X (Mod. 20)', price: 85.00, category: 'tops', images: ['imagem/tops/top39.jpg', 'imagem/tops/top40.jpg'] },
    { id: 'top-basico21', name: 'Top Alça Larga Detalhe (Mod. 21)', price: 90.00, category: 'tops', images: ['imagem/tops/top41.jpg', 'imagem/tops/top42.jpg'] },
    { id: 'top-basico22', name: 'Top Alça Larga Detalhe (Mod. 22)', price: 90.00, category: 'tops', images: ['imagem/tops/top43.jpg', 'imagem/tops/top44.jpg'] },
    { id: 'top-basico23', name: 'Top Recorte Lateral (Mod. 23)', price: 95.00, category: 'tops', images: ['imagem/tops/top45.jpg', 'imagem/tops/top46.jpg'] },
    { id: 'top-basico24', name: 'Top Recorte Lateral (Mod. 24)', price: 95.00, category: 'tops', images: ['imagem/tops/top47.jpg', 'imagem/tops/top48.jpg'] },
    { id: 'top-basico25', name: 'Top Decote V (Mod. 25)', price: 99.90, category: 'tops', images: ['imagem/tops/top49.jpg', 'imagem/tops/top50.jpg'] },
    { id: 'top-basico26', name: 'Top Decote V (Mod. 26)', price: 99.90, category: 'tops', images: ['imagem/tops/top51.jpg', 'imagem/tops/top52.jpg'] },
    { id: 'top-basico27', name: 'Top Nadador (Mod. 27)', price: 105.00, category: 'tops', images: ['imagem/tops/top53.jpg', 'imagem/tops/top54.jpg'] },
    { id: 'top-basico28', name: 'Top Nadador (Mod. 28)', price: 105.00, category: 'tops', images: ['imagem/tops/top55.jpg', 'imagem/tops/top56.jpg'] },
    { id: 'top-basico29', name: 'Top Dupla Face (Mod. 29)', price: 110.00, category: 'tops', images: ['imagem/tops/top57.jpg', 'imagem/tops/top58.jpg'] },
    { id: 'top-basico30', name: 'Top Dupla Face (Mod. 30)', price: 110.00, category: 'tops', images: ['imagem/tops/top59.jpg', 'imagem/tops/top60.jpg'] },
    { id: 'top-basico31', name: 'Top Performance Z (Mod. 31)', price: 115.00, category: 'tops', images: ['imagem/tops/top61.jpg', 'imagem/tops/top62.jpg'] },
    { id: 'top-basico32', name: 'Top Performance Z (Mod. 32)', price: 115.00, category: 'tops', images: ['imagem/tops/top63.jpg', 'imagem/tops/top64.jpg'] },
    { id: 'top-basico33', name: 'Top Max Sustain (Mod. 33)', price: 120.00, category: 'tops', images: ['imagem/tops/top65.jpg', 'imagem/tops/top66.jpg'] },
    { id: 'top-basico34', name: 'Top Max Sustain (Mod. 34)', price: 120.00, category: 'tops', images: ['imagem/tops/top67.jpg', 'imagem/tops/top68.jpg'] },
    { id: 'top-basico35_a', name: 'Top Alto Impacto (Mod. 35A)', price: 125.00, category: 'tops', images: ['imagem/tops/top69.jpg', 'imagem/tops/top70.jpg'] },
    { id: 'top-basico35_b', name: 'Top Alto Impacto (Mod. 35B)', price: 125.00, category: 'tops', images: ['imagem/tops/top71.jpg', 'imagem/tops/top72.jpg'] },
    { id: 'top-basico36', name: 'Top com Zíper (Mod. 36)', price: 129.90, category: 'tops', images: ['imagem/tops/top73.jpg', 'imagem/tops/top74.jpg'] },
    { id: 'top-basico37', name: 'Top C/ Detalhe Costas (Mod. 37)', price: 129.90, category: 'tops', images: ['imagem/tops/top75.jpg', 'imagem/tops/top76.jpg'] },
    { id: 'top-basico38', name: 'Top Compressão (Mod. 38)', price: 135.00, category: 'tops', images: ['imagem/tops/top77.jpg', 'imagem/tops/top78.jpg'] },
    { id: 'top-basico39', name: 'Top Compressão (Mod. 39)', price: 135.00, category: 'tops', images: ['imagem/tops/top79.jpg', 'imagem/tops/top80.jpg'] },
    { id: 'top-basico40', name: 'Top Recorte Duplo (Mod. 40)', price: 139.90, category: 'tops', images: ['imagem/tops/top81.jpg', 'imagem/tops/top82.jpg'] },
    { id: 'top-basico41', name: 'Top Recorte Duplo (Mod. 41)', price: 139.90, category: 'tops', images: ['imagem/tops/top83.jpg', 'imagem/tops/top84.jpg'] },
    { id: 'top-basico42', name: 'Top Estampado K (Mod. 42)', price: 145.00, category: 'tops', images: ['imagem/tops/top85.jpg', 'imagem/tops/top86.jpg'] },
    { id: 'top-basico43', name: 'Top Estampado L (Mod. 43)', price: 145.00, category: 'tops', images: ['imagem/tops/top87.jpg', 'imagem/tops/top88.jpg'] },
    { id: 'top-basico44', name: 'Top Estampado M (Mod. 44)', price: 149.90, category: 'tops', images: ['imagem/tops/top89.jpg', 'imagem/tops/top90.jpg'] },
    { id: 'top-basico45', name: 'Top Estampado N (Mod. 45)', price: 149.90, category: 'tops', images: ['imagem/tops/top91.jpg', 'imagem/tops/top92.jpg'] },
    { id: 'top-basico46', name: 'Top Estampado O (Mod. 46)', price: 155.00, category: 'tops', images: ['imagem/tops/top93.jpg', 'imagem/tops/top94.jpg'] },
    { id: 'top-basico47', name: 'Top Estampado P (Mod. 47)', price: 155.00, category: 'tops', images: ['imagem/tops/top95.jpg', 'imagem/tops/top96.jpg'] },
    { id: 'top-basico48', name: 'Top Estampado Q (Mod. 48)', price: 159.90, category: 'tops', images: ['imagem/tops/top97.jpg', 'imagem/tops/top98.jpg'] },
    { id: 'top-basico49', name: 'Top Estampado R (Mod. 49)', price: 159.90, category: 'tops', images: ['imagem/tops/top99.jpg', 'imagem/tops/top100.jpg'] },
];

/* ============================================================
    1. FUNÇÕES GERAIS DO CARRINHO (LocalStorage e Contador)
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

function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    const cartLink = document.getElementById('cart-link') || document.querySelector('nav a[href="carrinho.html"]');

    if (cartLink) {
        if (totalItems > 0) {
            cartLink.innerHTML = `🛒 Carrinho (${totalItems})`;
        } else {
            cartLink.innerHTML = `🛒 Carrinho`;
        }
    }
}

function saveCart(cart) {
    localStorage.setItem('dy_carrinho', JSON.stringify(cart));
    updateCartCounter();

    // Se estiver no carrinho, atualiza a visualização
    if (document.getElementById('lista-de-produtos-carrinho')) {
        if (typeof renderCart !== 'undefined') renderCart();
    }
}

/* ============================================================
    1.1. Lógica do Filtro de Preço (Price Range Slider)
    ============================================================ */

function initPriceSlider() {
    const priceRange = document.getElementById('price-range');
    const priceValueDisplay = document.getElementById('price-value');
    const btnApplyFilter = document.querySelector('.btn-filter-apply');

    if (priceRange && priceValueDisplay) {
        // 1. Atualiza o display do valor ao mover o slider
        priceRange.addEventListener('input', () => {
            priceValueDisplay.innerText = `R$ ${priceRange.value}`;
        });

        // Inicializa o valor com o máximo
        priceValueDisplay.innerText = `R$ ${priceRange.value}`;

        // 2. Lógica do botão Aplicar Filtros (Chama a renderização com o novo filtro)
        btnApplyFilter.addEventListener('click', () => {
            const maxPrice = parseFloat(priceRange.value);
            // Chama a função principal de renderização com o novo preço
            renderProductsPage(maxPrice);
        });
    }
}


/* ============================================================
    2. LÓGICA DE PRODUTOS E CARRINHO (CRUD + Renderização)
    ============================================================ */

// Funções de Carrinho (Update Quantity, Remove Item, etc.) - MANTIDAS


// --- FUNÇÃO CRÍTICA PARA RENDERIZAR O CATÁLOGO DE PRODUTOS ---
function renderProductsPage(maxPriceFilter = null, sortBy = 'default') {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('categoria');

    const productGridEl = document.getElementById('product-list-grid');
    const pageTitleEl = document.getElementById('page-title');
    const noProductsMsgEl = document.getElementById('no-products-message');
    const productCountEl = document.getElementById('product-count');
    const sortSelectEl = document.getElementById('sort-select'); // Novo

    if (!productGridEl) return;

    // 1. OBTENDO FILTROS ATUAIS (Preço e Categoria)

    // Filtro de Preço (Obtém o valor do slider se o botão Aplicar Filtros não passou explicitamente)
    let maxPrice = Infinity;
    if (maxPriceFilter !== null) {
        maxPrice = maxPriceFilter;
    } else {
        const priceRangeEl = document.getElementById('price-range');
        if (priceRangeEl) {
            maxPrice = parseFloat(priceRangeEl.value);
        }
    }

    // Ordenação Atual (Obtém o valor do select de ordenação)
    if (sortSelectEl && sortBy === 'default') {
        sortBy = sortSelectEl.value;
    }

    // 2. FILTRAGEM:
    let filteredProducts = PRODUCTS_DATA;

    // Filtro 2a: Categoria
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    // Filtro 2b: Preço Máximo
    if (maxPrice !== Infinity) {
        filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);
    }

    // 3. ORDENAÇÃO:
    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // 4. ATUALIZAÇÃO DO TÍTULO E CONTADOR:
    const title = categoryFilter ?
        categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) :
        'Todos os Produtos';

    if (pageTitleEl) pageTitleEl.innerText = title;
    if (productCountEl) productCountEl.innerText = filteredProducts.length;


    // 5. RENDERIZAÇÃO:
    productGridEl.innerHTML = '';

    if (filteredProducts.length === 0) {
        if (noProductsMsgEl) noProductsMsgEl.style.display = 'block';
    } else {
        if (noProductsMsgEl) noProductsMsgEl.style.display = 'none';

        filteredProducts.forEach(product => {
            const images = product.images || [];

            const imagesHtml = images.map((imgSrc, index) => `
                <img src="${imgSrc}" alt="${product.name} - Imagem ${index + 1}" ${index === 0 ? 'class="active-slide"' : ''}>
            `).join('');

            const dotsHtml = images.map((_, index) => `
                <span class="dot ${index === 0 ? 'active' : ''}" data-slide-index="${index}"></span>
            `).join('');


            const productHTML = `
                <div class="produto" data-product-id="${product.id}"> 
                    <div class="product-slider-container">
                        <div class="product-image-slider">
                            ${imagesHtml}
                        </div>
                        <button class="product-slider-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                        <button class="product-slider-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                        <div class="product-slider-dots">
                            ${dotsHtml}
                        </div>
                    </div>
                    <div class="produto-info">
                        <h3>${product.name}</h3>
                        <p>R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                        <button class="btn-add-to-cart" 
                                data-id="${product.id}" 
                                data-name="${product.name}" 
                                data-price="${product.price}" 
                                data-image="${product.images[0] || ''}"> 
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            `;
            productGridEl.insertAdjacentHTML('beforeend', productHTML);
        });
    }

    // 6. Reativa os eventos
    attachCartButtonEvents();
    initProductSliders();
}

// Funções de Carrinho (Update Quantity, Remove Item, etc.) - [MANTIDAS]
function updateQuantity(id, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);

    if (item) {
        item.qty += change;
        if (item.qty < 1) {
            removeItem(id);
            return;
        }
        saveCart(cart);
    }
}

function removeItem(id) {
    const confirmacao = confirm("Tem certeza que deseja remover este item?");
    if (confirmacao) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== id);
        saveCart(cart);
    }
}

function updateCartTotal(subtotalEl, freteEl, totalFinalEl, cart) {
    let total = 0;
    cart.forEach(item => { total += item.price * item.qty; });

    let freteAplicado = FRETE_FIXO;
    let freteDisplay = freteAplicado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (total >= LIMITE_FRETE_GRATIS) {
        freteAplicado = 0;
        freteDisplay = "Grátis";
    }

    const totalComFrete = total + freteAplicado;
    const subtotalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const totalFinalFormatado = totalComFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (subtotalEl) subtotalEl.innerText = subtotalFormatado;
    if (freteEl) freteEl.innerText = freteDisplay;
    if (totalFinalEl) totalFinalEl.innerText = totalFinalFormatado;
}

function attachCartEvents() {
    document.querySelectorAll('.btn-qty.plus').forEach(btn => { btn.addEventListener('click', (e) => updateQuantity(e.currentTarget.dataset.id, 1)); });
    document.querySelectorAll('.btn-qty.minus').forEach(btn => { btn.addEventListener('click', (e) => updateQuantity(e.currentTarget.dataset.id, -1)); });
    document.querySelectorAll('.remover i').forEach(btn => { btn.addEventListener('click', (e) => removeItem(e.currentTarget.dataset.id)); });
}

function renderCart() {
    const cartListEl = document.getElementById('lista-de-produtos-carrinho');
    const subtotalEl = document.getElementById('subtotal');
    const totalFinalEl = document.getElementById('total-final');
    const freteEl = document.getElementById('frete');
    const emptyMessage = document.getElementById('empty-cart-message');
    const resumoPedido = document.querySelector('.cart-summary');

    if (!cartListEl) return;

    const cart = getCart();
    cartListEl.innerHTML = '';

    if (cart.length === 0) {
        if (resumoPedido) resumoPedido.style.display = 'none';
        if (emptyMessage) emptyMessage.style.display = 'block';
        updateCartTotal(subtotalEl, freteEl, totalFinalEl, cart);
        return;
    } else {
        if (resumoPedido) resumoPedido.style.display = 'block';
        if (emptyMessage) emptyMessage.style.display = 'none';
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        const itemTotalFormatado = itemTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        const itemHTML = `
        <div class="item-produto" data-id="${item.id}" data-price="${item.price}"> 
            <img src="${item.image}" alt="${item.name}"> 
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

    updateCartTotal(subtotalEl, freteEl, totalFinalEl, cart);
    attachCartEvents();
}


// --- Lógica para os Sliders de Produtos Individuais ---
function initProductSliders() {
    document.querySelectorAll('.produto').forEach(productCard => {
        const slider = productCard.querySelector('.product-image-slider');
        if (!slider) return;

        const images = Array.from(slider.querySelectorAll('img'));
        const prevBtn = productCard.querySelector('.prev-btn');
        const nextBtn = productCard.querySelector('.next-btn');
        const dotsContainer = productCard.querySelector('.product-slider-dots');
        const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.dot')) : [];
        let currentIndex = 0;

        function updateSlider() {
            images.forEach((img, i) => {
                img.classList.toggle('active-slide', i === currentIndex);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                updateSlider();
            });
        }

        if (dots.length > 0) {
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    currentIndex = parseInt(e.target.dataset.slideIndex);
                    updateSlider();
                });
            });
        }

        updateSlider();
    });
}

// Funções Auxiliares (Para reativar os botões do carrinho após a renderização)
function attachCartButtonEvents() {
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
                    image: prodData.image,
                    qty: 1
                };
                cart.push(newItem);
            }
            saveCart(cart);
            alert(`"${prodData.name}" adicionado ao carrinho!`);
        });
    });
}

/* ============================================================
    3. LÓGICA DE LOGIN, CADASTRO E RECUPERAÇÃO
    ============================================================ */

function setupAuthLogic() {
    // LÓGICA DE LOGIN, CADASTRO E RECUPERAÇÃO
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

    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const senha = document.getElementById("senhaCadastro").value;
            const confirmar = document.getElementById("senhaConfirmar").value;
            const msgError = document.getElementById("msgErrorCadastro");

            if (senha !== confirmar) {
                msgError.innerText = "As senhas não coincidem.";
                msgError.style.display = "block";
            } else {
                msgError.style.display = "none";
                alert("Conta criada com sucesso! Faça login para continuar.");
                window.location.href = "login.html";
            }
        });
    }

    const recuperarForm = document.getElementById("recuperarForm");
    if (recuperarForm) {
        recuperarForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("emailRecuperar").value;
            alert(`Link de recuperação enviado para: ${email}\n(Verifique sua caixa de entrada)`);
            window.location.href = "login.html";
        });
    }
}


/* ============================================================
    4. LÓGICA DA PÁGINA CHECKOUT (Com Lógica PIX e Transição)
    ============================================================ */

// Funções PIX Auxiliares
function generatePixCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '00020126410014BR.GOV.BCB.PIX0119';
    for (let i = 0; i < 40; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code + '5204000053039865802BR5909DYFITWEAR6009SAOLUIZ6304EE88';
}


function displayPixConfirmation() {
    const checkoutContainer = document.querySelector('.checkout-container');
    const pixConfirmationStep = document.getElementById('pix-confirmation-step');
    const pixCodeArea = document.getElementById('pix-code-area');
    const copyButton = document.getElementById('copy-pix-button');

    if (checkoutContainer) checkoutContainer.style.display = 'none';
    if (pixConfirmationStep) pixConfirmationStep.style.display = 'block';

    const pixCode = generatePixCode();
    if (pixCodeArea) {
        pixCodeArea.value = pixCode;
    }

    if (copyButton && pixCodeArea) {
        const newCopyButton = copyButton.cloneNode(true);
        copyButton.parentNode.replaceChild(newCopyButton, copyButton);

        newCopyButton.addEventListener('click', () => {
            pixCodeArea.select();
            pixCodeArea.setSelectionRange(0, 99999);
            document.execCommand("copy");

            const originalText = newCopyButton.innerHTML;
            newCopyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
            newCopyButton.style.backgroundColor = '#28a745';

            setTimeout(() => {
                newCopyButton.innerHTML = originalText;
                newCopyButton.style.backgroundColor = '#007bff';

                setTimeout(() => {
                    alert("Simulação de Pagamento Pix Confirmada! Seu pedido foi esvaziado e o pedido está em processamento.");
                    localStorage.removeItem('dy_carrinho');
                    updateCartCounter();
                    window.location.href = "index.html";
                }, 1000);
            }, 3000);
        });
    }
}


function initializeCheckout() {
    const shippingStep = document.getElementById('shipping-step');
    const shippingForm = document.getElementById('shipping-form');
    const paymentForm = document.getElementById('payment-form');
    const backButton = document.getElementById('back-to-shipping');
    const btnAddressContinue = document.getElementById('btn-address-continue');
    const cardRadio = document.getElementById('pay-card');
    const pixRadio = document.getElementById('pay-pix');
    const cardFields = document.getElementById('card-fields');


    if (!shippingStep || !btnAddressContinue) return;

    const cart = getCart();

    // Lógica para mostrar/esconder campos do cartão e definir 'required'
    function toggleCardFields() {
        if (cardRadio && cardFields) {
            if (cardRadio.checked) {
                cardFields.style.display = 'block';
                cardFields.querySelectorAll('input').forEach(input => input.setAttribute('required', 'required'));
            } else {
                cardFields.style.display = 'none';
                cardFields.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
            }
        }
    }

    if (cardRadio) cardRadio.addEventListener('change', toggleCardFields);
    if (pixRadio) pixRadio.addEventListener('change', toggleCardFields);
    toggleCardFields();


    // 1. Carrega o resumo lateral
    updateCartTotal(
        document.getElementById('checkout-subtotal'),
        document.getElementById('checkout-frete'),
        document.getElementById('checkout-total-final'),
        cart
    );


    // 2. Lógica do Botão "Continuar para Pagamento" (Endereço)
    btnAddressContinue.addEventListener('click', () => {
        const isFormValid = shippingForm.checkValidity();

        if (!isFormValid) {
            shippingForm.reportValidity();
            return;
        }

        if (cart.length === 0) {
            alert("Seu carrinho está vazio! Adicione itens para finalizar a compra.");
            return;
        }

        shippingStep.style.display = 'none';
        document.getElementById('payment-step').style.display = 'block';
    });


    // 3. Lógica do Botão "Voltar para Endereço"
    if (backButton) {
        backButton.addEventListener('click', () => {
            document.getElementById('payment-step').style.display = 'none';
            shippingStep.style.display = 'block';
        });
    }


    // 4. Lógica do Botão "FINALIZAR COMPRA" (Etapa de Pagamento)
    if (paymentForm) {
        paymentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const selectedMethod = document.querySelector('input[name="payment-method"]:checked');

            if (!selectedMethod) {
                alert("Por favor, selecione um método de pagamento.");
                return;
            }

            if (selectedMethod.value === 'pix') {
                displayPixConfirmation();
            } else if (selectedMethod.value === 'card') {
                alert(`Pagamento simulado com sucesso via CARTÃO! Seu pedido foi confirmado.`);
                localStorage.removeItem('dy_carrinho');
                updateCartCounter();
                window.location.href = "index.html";
            }
        });
    }
}


/* ============================================================
    5. INICIALIZAÇÃO GERAL (DOMContentLoaded)
    ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Garante que o contador do carrinho seja atualizado em TODAS as páginas
    updateCartCounter();

    // 2. Inicializa lógica de Login/Cadastro/Recuperação
    setupAuthLogic();

    // 3. SE ESTIVER NA PÁGINA DE PRODUTOS, RENDERIZA O CATÁLOGO e inicia o slider de preço
    if (document.querySelector('.products-page-section')) {
        initPriceSlider(); // Novo: Inicializa o controle de slider

        // Adiciona o listener de ordenação
        const sortSelectEl = document.getElementById('sort-select');
        if (sortSelectEl) {
            sortSelectEl.addEventListener('change', () => {
                renderProductsPage(null, sortSelectEl.value);
            });
        }

        renderProductsPage();
    }

    /* --- INÍCIO DO CÓDIGO DO SLIDER MULTIPLO (Slider da Home/Produtos em Desta
    /* --- FIM DO CÓDIGO DO SLIDER MULTIPLO --- */

    // Lógica específica para a página de Produtos/Home
    if (document.querySelector('.produtos-destaque')) {
        attachCartButtonEvents();
    }

    // Lógica específica para a página de Carrinho
    if (document.getElementById('lista-de-produtos-carrinho')) {
        renderCart();
        // Ativar o botão Finalizar Compra no Carrinho
        const finalizaCompraCarrinho = document.querySelector('.cart-summary .btn-checkout');
        if (finalizaCompraCarrinho) {
            finalizaCompraCarrinho.addEventListener('click', () => {
                const cart = getCart();
                if (cart.length === 0) {
                    alert("Seu carrinho está vazio! Adicione itens para finalizar a compra.");
                } else {
                    window.location.href = "checkout.html";
                }
            });
        }
    }

    // Lógica específica para a página de Checkout
    if (document.getElementById('shipping-step')) {
        initializeCheckout();
    }
});