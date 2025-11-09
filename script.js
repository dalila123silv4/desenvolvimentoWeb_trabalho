/* === LÓGICA DO ACORDEÃO DE FILTROS === */

// 1. Encontra TODOS os botões clicáveis
const triggers = document.querySelectorAll('.filtro-trigger');

// 2. Itera sobre cada botão (faz um "loop")
triggers.forEach(trigger => {

    // 3. Adiciona um "escutador de clique" em cada um
    trigger.addEventListener('click', () => {

        // 4. Encontra o painel de conteúdo (que é o próximo "irmão" do botão no HTML)
        const conteudo = trigger.nextElementSibling;

        // 5. Adiciona ou remove a classe "ativo" do botão (para mudar o + para -)
        trigger.classList.toggle('ativo');

        // 6. Adiciona ou remove a classe "ativo" do conteúdo (para mostrar/esconder)
        conteudo.classList.toggle('ativo');
    });
});