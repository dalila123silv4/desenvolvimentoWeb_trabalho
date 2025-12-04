Título do Projeto: DY-Fitwear Loja e-commerce

Este é um projeto de e-commerce estático (Front-end puro: HTML, CSS e JavaScript) desenvolvido para demonstração de uma loja de vestuário fitness.

Equipe:
1. Dalila Silva De Almeida
2. Yris Beatriz Silva

Tecnologias utilizadas:
*HTML5: Estrutura base de todas as páginas.
*CSS3:Estilização, layout responsivo e transições.
*JavaScript (Puro):Lógica de carrinho de compras (usando `localStorage`), filtragem dinâmica de produtos, sliders de imagem e modais de Compra Rápida.
* **Font Awesome:** Ícones de suporte (carrinho, social, etc.).

O projeto demonstra as seguintes funcionalidades essenciais para um e-commerce:

1.Catálogo Dinâmico (produtos.html):
* Filtro de produtos por categoria (Shorts, Tops, Conjuntos, etc.).
* Ordenação de produtos por preço (menor/maior).
* Todos os dados do produto são armazenados e gerenciados no arquivo script.js (array PRODUCTS_DATA).

2.Sliders de Imagem:
* Carrossel de imagens com setas e bolinhas de navegação nos cards de produto (tanto no index.html quanto no produtos.html).

3.Carrinho de Compras:
 * Adicionar, remover e atualizar a quantidade de produtos no carrinho (os dados persistem via localStorage).
 *Cálculo de subtotal, frete fixo e lógica de Frete Grátis (acima de R$ 300,00).

4.Compra Rápida (Quick View - Novo!):
 * Botão "COMPRA RÁPIDA" nos produtos da página principal (index.html) que abre um modal para seleção de tamanho e adição ao carrinho sem sair da página.

5.Cores e Estilo:
* Preços formatados e destacados na cor Azul.

