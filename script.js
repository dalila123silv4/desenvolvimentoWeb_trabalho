/* === VARIÁVEIS GLOBAIS (CONSTANTES) === */
const FRETE_FIXO = 35.00;
const LIMITE_FRETE_GRATIS = 300.00;


/* ============================================================
    1. FUNÇÕES GERAIS DO CARRINHO (LocalStorage e Contador)
    ============================================================ */

function getCart() {  
    try {     const cartString = localStorage.getItem('dy_carrinho');     return cartString ? JSON.parse(cartString) : [];   } catch (e) {     console.error("Erro ao ler carrinho do localStorage", e);     return [];   }
}

function updateCartCounter() {  
    const cart = getCart();  
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

      
    const cartLink = document.getElementById('cart-link') || document.querySelector('nav a[href="carrinho.html"]');

      
    if (cartLink) {     if (totalItems > 0) {       cartLink.innerHTML = `🛒 Carrinho (${totalItems})`;     } else {       cartLink.innerHTML = `🛒 Carrinho`;     }   }
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
    2. LÓGICA DE PRODUTOS E CARRINHO (CRUD + Renderização)
    ============================================================ */

function updateQuantity(id, change) {  
    let cart = getCart();  
    const item = cart.find(i => i.id === id);

      
    if (item) {    
        item.qty += change;    
        if (item.qty < 1) {       removeItem(id);       return;     }    
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
    const resumoPedido = document.querySelector('.resumo-pedido');

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


/* ============================================================
    3. LÓGICA DA PÁGINA CHECKOUT (Com Lógica PIX e Transição)
    ============================================================ */

// Funções PIX Auxiliares
/* Substitua a função generatePixCode() no seu script.js */
function generatePixCode() {   // 💡 Insira sua chave PIX real aqui, ou uma chave aleatória fictícia.
      
    return 'seu.email@exemplo.com'; // Exemplo de chave PIX
}

function displayPixConfirmation() {
    // 1. Variáveis e Elementos
    const checkoutContainer = document.querySelector('.checkout-container');
    const pixConfirmationStep = document.getElementById('pix-confirmation-step');
    const pixCodeArea = document.getElementById('pix-code-area');
    const copyButton = document.getElementById('copy-pix-button');

    // 2. Transição de tela
    if (checkoutContainer) checkoutContainer.style.display = 'none';
    if (pixConfirmationStep) pixConfirmationStep.style.display = 'block';

    // 3. Gerar e Exibir o Código
    const pixCode = generatePixCode();
    if (pixCodeArea) {
        pixCodeArea.value = pixCode;
    }

    // 4. Lógica do Botão Copiar (Remove o Listener anterior para evitar bugs)
    if (copyButton && pixCodeArea) {
        // Clonar o botão para remover listeners antigos e evitar duplicação (Melhor Prática)
        const newCopyButton = copyButton.cloneNode(true);
        copyButton.parentNode.replaceChild(newCopyButton, copyButton);

        newCopyButton.addEventListener('click', () => {
            pixCodeArea.select();
            pixCodeArea.setSelectionRange(0, 99999);
            document.execCommand("copy");

            const originalText = newCopyButton.innerHTML;
            newCopyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
            newCopyButton.style.backgroundColor = '#28a745';

            // Simulação: Reverte o botão e processa o pedido (limpa carrinho)
            setTimeout(() => {
                newCopyButton.innerHTML = originalText;
                newCopyButton.style.backgroundColor = '#007bff';

                // LÓGICA DE FINALIZAÇÃO DA COMPRA (Limpa e Redireciona)
                setTimeout(() => {
                    alert("Simulação de Pagamento Pix Confirmada! Seu pedido foi esvaziado e o pedido está em processamento.");
                    localStorage.removeItem('dy_carrinho');
                    updateCartCounter();
                    window.location.href = "index.html";
                }, 1000); // Espera 1s após copiar para simular o processamento
            }, 3000); // Mostra o "Copiado" por 3s
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
                // Define os campos como obrigatórios quando selecionado
                cardFields.querySelectorAll('input').forEach(input => input.setAttribute('required', 'required'));
            } else {
                cardFields.style.display = 'none';
                // Remove a obrigatoriedade quando não selecionado
                cardFields.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
            }
        }
    }

    if (cardRadio) cardRadio.addEventListener('change', toggleCardFields);
    if (pixRadio) pixRadio.addEventListener('change', toggleCardFields);
    // Inicializa os campos corretamente no carregamento
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
                displayPixConfirmation(paymentForm); // Vai para a tela PIX
            } else if (selectedMethod.value === 'card') {
                // Validação de Cartão: Se os campos estiverem required (e estão), o navegador valida.

                // 🚀 LÓGICA DE FINALIZAÇÃO DA COMPRA (Limpa e Redireciona)
                alert(`Pagamento simulado com sucesso via CARTÃO! Seu pedido foi confirmado.`);
                localStorage.removeItem('dy_carrinho');
                updateCartCounter();
                window.location.href = "index.html";
            }
        });
    }
}


/* ============================================================
    4. LÓGICA DE DIVERSOS (Sliders, Acordeão - Seções 2 e 1 originais)
    ============================================================ */

function setupDiversityLogic() {
    // Código do slider e acordeão aqui (Mantenha o código original do seu slider aqui)
    // ...
}


/* ============================================================
    5. LÓGICA DE LOGIN, CADASTRO E RECUPERAÇÃO (Seção 6 original)
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
                msgError.innerText = "As senhas não coincidem. Tente novamente.";
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
    6. INICIALIZAÇÃO GERAL (DOMContentLoaded)
    ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Garante que o contador do carrinho seja atualizado em TODAS as páginas
    updateCartCounter();

    // 2. Inicializa lógica de Login/Cadastro/Recuperação
    setupAuthLogic();

    // 3. Inicializa lógica de Diversos (Sliders, Acordeão)
    setupDiversityLogic();


    // 4. Lógica específica para a página de Produtos/Home
    if (document.querySelector('.produtos-destaque')) {
        // Lógica de Adicionar ao Carrinho (Home/Produtos)
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

    // 5. Lógica específica para a página de Carrinho
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

    // 6. Lógica específica para a página de Checkout
    if (document.getElementById('shipping-step')) {
        initializeCheckout();
    }
});