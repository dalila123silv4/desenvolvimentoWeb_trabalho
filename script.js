/* ============================================================
    VARIÁVEIS GLOBAIS (CONSTANTES)
    ============================================================ */
const FRETE_FIXO = 35.00;
const LIMITE_FRETE_GRATIS = 300.00;

// --- DADOS DE PRODUTOS PARA EXIBIÇÃO NO SITE ---
// NOTE: Este bloco DEVE ser a lista COMPLETA de todos os seus produtos.

const PRODUCTS_DATA = [   // --- CATEGORIA: TOPS (IDs ÚNICOS) ---
    // --- CATEGORIA: TOPS (IDs ÚNICOS) ---
    { id: 'top-basico01', name: 'Top Clara', price: 189.90, category: 'tops', images: ['imagem/tops/top1.jpg', 'imagem/tops/top2.jpg'] },
    { id: 'top-basico02', name: 'Top Clara ', price: 189.90, category: 'tops', images: ['imagem/tops/top3.jpg', 'imagem/tops/top4.jpg'] },
    { id: 'top-basico03', name: 'Top estilo V ', price: 110.00, category: 'tops', images: ['imagem/tops/top5.jpg', 'imagem/tops/top6.jpg'] },
    { id: 'top-basico04', name: 'Top Retângular', price: 130.00, category: 'tops', images: ['imagem/tops/top7.jpg', 'imagem/tops/top8.jpg'] },
    { id: 'top-basico05', name: 'Top Maria', price: 140.00, category: 'tops', images: ['imagem/tops/top9.jpg', 'imagem/tops/top10.jpg'] },
    { id: 'top-basico06', name: 'Top Costas Trançadas', price: 130.00, category: 'tops', images: ['imagem/tops/top11.jpg', 'imagem/tops/top12.jpg'] },
    { id: 'top-basico07', name: 'Top Amélia', price: 120.00, category: 'tops', images: ['imagem/tops/top13.jpg', 'imagem/tops/top14.jpg'] },
    { id: 'top-basico08', name: 'Top Trançado', price: 130.00, category: 'tops', images: ['imagem/tops/top15.jpg', 'imagem/tops/top16.jpg'] },
    { id: 'top-basico09', name: 'Top Retangular', price: 120.00, category: 'tops', images: ['imagem/tops/top17.jpg', 'imagem/tops/top18.jpg'] },
    { id: 'top-basico10', name: 'Top Detalhe Aberto Costa', price: 130.00, category: 'tops', images: ['imagem/tops/top19.jpg', 'imagem/tops/top20.jpg'] },
    { id: 'top-basico11', name: 'Top Retangular (02)', price: 120.00, category: 'tops', images: ['imagem/tops/top21.jpg', 'imagem/tops/top22.jpg'] },
    { id: 'top-basico12', name: 'Top Cio&Cia', price: 110.00, category: 'tops', images: ['imagem/tops/top23.jpg', 'imagem/tops/top24.jpg'] },
    { id: 'top-basico13', name: 'Top Costas Trançadas (02)', price: 130.00, category: 'tops', images: ['imagem/tops/top25.jpg', 'imagem/tops/top26.jpg'] },
    { id: 'top-basico14', name: 'Top Amélia (02)', price: 120.00, category: 'tops', images: ['imagem/tops/top27.jpg', 'imagem/tops/top28.jpg'] },
    { id: 'top-basico15', name: 'Top Sereia', price: 115.00, category: 'tops', images: ['imagem/tops/top29.jpg', 'imagem/tops/top30.jpg'] },
    { id: 'top-basico16', name: 'Top Traçado', price: 110.00, category: 'tops', images: ['imagem/tops/top31.jpg', 'imagem/tops/top32.jpg'] },
    { id: 'top-basico17', name: 'Top Detalhe no Busto', price: 115.90, category: 'tops', images: ['imagem/tops/top33.jpg', 'imagem/tops/top34.jpg'] },
    { id: 'top-basico18', name: 'Top Jordania', price: 125.90, category: 'tops', images: ['imagem/tops/top35.jpg', 'imagem/tops/top36.jpg'] },
    { id: 'top-basico19', name: 'Top Cleo', price: 115.00, category: 'tops', images: ['imagem/tops/top37.jpg', 'imagem/tops/top38.jpg'] },
    { id: 'top-basico20', name: 'Top Detalhe Aberto nas Costas(02)', price: 130.00, category: 'tops', images: ['imagem/tops/top39.jpg', 'imagem/tops/top40.jpg'] },
    { id: 'top-basico21', name: 'Top Decote V', price: 135.00, category: 'tops', images: ['imagem/tops/top41.jpg', 'imagem/tops/top42.jpg'] },
    { id: 'top-basico22', name: 'Top Veronica', price: 120.00, category: 'tops', images: ['imagem/tops/top43.jpg', 'imagem/tops/top44.jpg'] },
    { id: 'top-basico23', name: 'Top Stella', price: 130.00, category: 'tops', images: ['imagem/tops/top45.jpg', 'imagem/tops/top46.jpg'] },
    { id: 'top-basico24', name: 'Top Mula Manca', price: 120.00, category: 'tops', images: ['imagem/tops/top47.jpg', 'imagem/tops/top48.jpg'] },
    { id: 'top-basico25', name: 'Top Detalhe Aberto nas Costa (03) ', price: 130.00, category: 'tops', images: ['imagem/tops/top49.jpg', 'imagem/tops/top50.jpg'] },
    { id: 'top-basico26', name: 'Top Sereia (02)', price: 115.00, category: 'tops', images: ['imagem/tops/top51.jpg', 'imagem/tops/top52.jpg'] },
    { id: 'top-basico27', name: 'Top Nadador', price: 115.00, category: 'tops', images: ['imagem/tops/top53.jpg', 'imagem/tops/top54.jpg'] },
    { id: 'top-basico28', name: 'Top Detalhe no Busto(02)', price: 115.90, category: 'tops', images: ['imagem/tops/top55.jpg', 'imagem/tops/top56.jpg'] },
    { id: 'top-basico29', name: 'Top Nadador (02)', price: 115.00, category: 'tops', images: ['imagem/tops/top57.jpg', 'imagem/tops/top58.jpg'] },
    { id: 'top-basico30', name: 'Top Nadador (03)', price: 115.00, category: 'tops', images: ['imagem/tops/top59.jpg', 'imagem/tops/top60.jpg'] },
    { id: 'top-basico31', name: 'Top Performance', price: 119.90, category: 'tops', images: ['imagem/tops/top61.jpg', 'imagem/tops/top62.jpg'] },
    { id: 'top-basico32', name: 'Top Perola', price: 130.00, category: 'tops', images: ['imagem/tops/top63.jpg', 'imagem/tops/top64.jpg'] },
    { id: 'top-basico33', name: 'Top Perola (02)', price: 130.00, category: 'tops', images: ['imagem/tops/top65.jpg', 'imagem/tops/top66.jpg'] },
    { id: 'top-basico34', name: 'Top Nat', price: 120.00, category: 'tops', images: ['imagem/tops/top67.jpg', 'imagem/tops/top68.jpg'] },
    { id: 'top-basico35_a', name: 'Top Nat (02)', price: 120.00, category: 'tops', images: ['imagem/tops/top69.jpg', 'imagem/tops/top70.jpg'] },
    { id: 'top-basico35_b', name: 'Top Sereia (03)', price: 115.00, category: 'tops', images: ['imagem/tops/top71.jpg', 'imagem/tops/top72.jpg'] },
    { id: 'top-basico36', name: 'Top', price: 114.90, category: 'tops', images: ['imagem/tops/top73.jpg', 'imagem/tops/top74.jpg'] },
    { id: 'top-basico37', name: 'Top Cintia', price: 119.90, category: 'tops', images: ['imagem/tops/top75.jpg', 'imagem/tops/top76.jpg'] },
    { id: 'top-basico38', name: 'Top ', price: 114.90, category: 'tops', images: ['imagem/tops/top77.jpg', 'imagem/tops/top78.jpg'] },
    { id: 'top-basico39', name: 'Top Perola (03)', price: 130.00, category: 'tops', images: ['imagem/tops/top79.jpg', 'imagem/tops/top80.jpg'] },
    { id: 'top-basico40', name: 'Top Recorte Duplo ', price: 139.90, category: 'tops', images: ['imagem/tops/top81.jpg', 'imagem/tops/top82.jpg'] },
    { id: 'top-basico41', name: 'Top Recorte nas Costas', price: 139.90, category: 'tops', images: ['imagem/tops/top83.jpg', 'imagem/tops/top84.jpg'] },
    { id: 'top-basico42', name: 'Top Agatha', price: 145.00, category: 'tops', images: ['imagem/tops/top85.jpg', 'imagem/tops/top86.jpg'] },
    { id: 'top-basico43', name: 'Top Agatha (02)', price: 145.00, category: 'tops', images: ['imagem/tops/top87.jpg', 'imagem/tops/top88.jpg'] },
    { id: 'top-basico44', name: 'Top Peixe', price: 125.90, category: 'tops', images: ['imagem/tops/top89.jpg', 'imagem/tops/top90.jpg'] },
    { id: 'top-basico45', name: 'Top Academia', price: 115.90, category: 'tops', images: ['imagem/tops/top91.jpg', 'imagem/tops/top92.jpg'] },
    { id: 'top-basico46', name: 'Top C/Manga Curta', price: 129.90, category: 'tops', images: ['imagem/tops/top93.jpg', 'imagem/tops/top94.jpg'] },
    { id: 'top-basico47', name: 'Top C/Manga Longa', price: 149.90, category: 'tops', images: ['imagem/tops/top95.jpg', 'imagem/tops/top96.jpg'] },
    { id: 'top-basico48', name: 'Top C/Manga Curta(02)', price: 159.90, category: 'tops', images: ['imagem/tops/top97.jpg', 'imagem/tops/top98.jpg'] },
    { id: 'top-basico49', name: 'Top Amanda', price: 129.90, category: 'tops', images: ['imagem/tops/top99.jpg', 'imagem/tops/top100.jpg'] }, // <-- FIM TOPS

    // --- CATEGORIA: SHORTS (29 itens) ---
    { id: 'short-fit01', name: 'Short Fitness Marinho', price: 149.90, category: 'shorts', images: ['imagem/shorts/short1.jpg', 'imagem/shorts/short3.jpg'] },
    { id: 'short-fit02', name: 'Short Power Preto', price: 140.90, category: 'shorts', images: ['imagem/shorts/short4.jpg', 'imagem/shorts/short5.jpg'] },
    { id: 'short-fit03', name: 'Short Power Vinho ', price: 140.90, category: 'shorts', images: ['imagem/shorts/short6.jpg', 'imagem/shorts/short7.jpg'] },
    { id: 'short-fit04', name: 'Short Ciclista Preto Lista Colorido', price: 160.00, category: 'shorts', images: ['imagem/shorts/short8.jpg', 'imagem/shorts/short9.jpg'] },
    { id: 'short-fit05', name: 'Short Curve Rosa', price: 139.90, category: 'shorts', images: ['imagem/shorts/short10.jpg', 'imagem/shorts/short11.jpg'] },
    { id: 'short-fit06', name: 'Short Moving Marrom', price: 155.90, category: 'shorts', images: ['imagem/shorts/short12.jpg', 'imagem/shorts/short13.jpg'] },
    { id: 'short-fit07', name: 'Short Runner Lilas', price: 140.00, category: 'shorts', images: ['imagem/shorts/short14.jpg', 'imagem/shorts/short15.jpg'] },
    { id: 'short-fit08', name: 'Short Runner Bege', price: 140.00, category: 'shorts', images: ['imagem/shorts/short16.jpg', 'imagem/shorts/short17.jpg'] },
    { id: 'short-fit09', name: 'Short Club Preto', price: 140.00, category: 'shorts', images: ['imagem/shorts/short18.jpg', 'imagem/shorts/short19.jpg'] },
    { id: 'short-fit10', name: 'Short Club Bege', price: 140.00, category: 'shorts', images: ['imagem/shorts/short20.jpg', 'imagem/shorts/short21.jpg'] },
    { id: 'short-fit11', name: 'Short Power', price: 140.90, category: 'shorts', images: ['imagem/shorts/short22.jpg', 'imagem/shorts/short23.jpg'] },
    { id: 'short-fit12', name: 'Short Fitnnes C/Bolso', price: 170.00, category: 'shorts', images: ['imagem/shorts/short24.jpg', 'imagem/shorts/short25.jpg'] },
    { id: 'short-fit13', name: 'Short Azzure Vermelho', price: 140.90, category: 'shorts', images: ['imagem/shorts/short26.jpg', 'imagem/shorts/short27.jpg'] },
    { id: 'short-fit14', name: 'Short Azzure Lilas', price: 140.90, category: 'shorts', images: ['imagem/shorts/short28.jpg', 'imagem/shorts/short29.jpg'] },
    { id: 'short-fit15', name: 'Short Zaia', price: 135.00, category: 'shorts', images: ['imagem/shorts/short30.jpg', 'imagem/shorts/short31.jpg'] },
    { id: 'short-fit16', name: 'Short Curver Bege', price: 139.90, category: 'shorts', images: ['imagem/shorts/short32.jpg', 'imagem/shorts/short33.jpg'] },
    { id: 'short-fit17', name: 'Short Curver Rose', price: 139.90, category: 'shorts', images: ['imagem/shorts/short34.jpg', 'imagem/shorts/short35.jpg'] },
    { id: 'short-fit18', name: 'Short Curver Preto', price: 140.00, category: 'shorts', images: ['imagem/shorts/short36.jpg', 'imagem/shorts/short37.jpg'] },
    { id: 'short-fit19', name: 'Short Cintia Verde', price: 150.00, category: 'shorts', images: ['imagem/shorts/short38.jpg', 'imagem/shorts/short39.jpg'] },
    { id: 'short-fit20', name: 'Short Curver Marrom Claro', price: 139.90, category: 'shorts', images: ['imagem/shorts/short40.jpg', 'imagem/shorts/short41.jpg'] },
    { id: 'short-fit21', name: 'Short Fitnnes C/Bolso Preto', price: 170.00, category: 'shorts', images: ['imagem/shorts/short42.jpg', 'imagem/shorts/short43.jpg'] },
    { id: 'short-fit22', name: 'Short Fitnnes C/Bolso Vinho', price: 170.00, category: 'shorts', images: ['imagem/shorts/short44.jpg', 'imagem/shorts/short45.jpg'] },
    { id: 'short-fit23', name: 'Short Runner Preto', price: 140.00, category: 'shorts', images: ['imagem/shorts/short46.jpg', 'imagem/shorts/short47.jpg'] },
    { id: 'short-fit24', name: 'Short Curver Bege Com Preto', price: 139.90, category: 'shorts', images: ['imagem/shorts/short48.jpg', 'imagem/shorts/short49.jpg'] },
    { id: 'short-fit25', name: 'Short Azzure Azul', price: 140.90, category: 'shorts', images: ['imagem/shorts/short50.jpg', 'imagem/shorts/short51.jpg'] },
    { id: 'short-fit26', name: 'Short Basiic Preto', price: 129.90, category: 'shorts', images: ['imagem/shorts/short52.jpg', 'imagem/shorts/short53.jpg'] },
    { id: 'short-fit27', name: 'Short Fitness Vinho', price: 149.90, category: 'shorts', images: ['imagem/shorts/short54.jpg', 'imagem/shorts/short55.jpg'] },
    { id: 'short-fit28', name: 'Short Fitness C/Bolso', price: 170.00, category: 'shorts', images: ['imagem/shorts/short56.jpg', 'imagem/shorts/short57.jpg'] },
    { id: 'short-fit29', name: 'Short Zara', price: 140.00, category: 'shorts', images: ['imagem/shorts/short58.jpg', 'imagem/shorts/short59.jpg'] }, // <-- FIM SHORTS

    // --- CATEGORIA: MACAQUINHOS (16 itens) ---
    { id: 'mac-01', name: 'Macaquinho Back Azul Essencial', price: 289.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma1.jpg', 'imagem/macaquinhos/ma2.jpg', 'imagem/macaquinhos/ma3.jpg'] },
    { id: 'mac-02', name: 'Macaquinho Lollipop Branco', price: 259.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma4.jpg', 'imagem/macaquinhos/ma5.jpg', 'imagem/macaquinhos/ma6.jpg'] },
    { id: 'mac-03', name: 'Macaquinho Flawless Pocket', price: 255.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma8.jpg', 'imagem/macaquinhos/ma7.jpg', 'imagem/macaquinhos/ma9.jpg'] },
    { id: 'mac-04', name: 'Macaquinho Lollipop Azul', price: 289.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma10.jpg', 'imagem/macaquinhos/ma11.jpg', 'imagem/macaquinhos/ma12.jpg'] },
    { id: 'mac-05', name: 'Macaquinho Curver Pink', price: 259.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma13.jpg', 'imagem/macaquinhos/ma14.jpg', 'imagem/macaquinhos/ma15.jpg'] },
    { id: 'mac-06', name: 'Macaquinho Lollipop Rosa', price: 259.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma16.jpg', 'imagem/macaquinhos/ma17.jpg', 'imagem/macaquinhos/ma18.jpg'] },
    { id: 'mac-07', name: 'Macaquinho Candy', price: 240.00, category: 'macaquinhos', images: ['imagem/macaquinhos/ma19.jpg', 'imagem/macaquinhos/ma20.jpg'] },
    { id: 'mac-08', name: 'Macaquinho Summer', price: 220.00, category: 'macaquinhos', images: ['imagem/macaquinhos/ma21.jpg', 'imagem/macaquinhos/ma22.jpg'] },
    { id: 'mac-09', name: 'Macaquinho Soulmate', price: 219.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma23.jpg', 'imagem/macaquinhos/ma24.jpg'] },
    { id: 'mac-10', name: 'Macaquinho Soulmate Roxo', price: 219.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma25.jpg', 'imagem/macaquinhos/ma26.jpg'] },
    { id: 'mac-11', name: 'Macaquinho Ennergy', price: 229.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma27.jpg', 'imagem/macaquinhos/ma28.jpg'] },
    { id: 'mac-12', name: 'Macaquinho Ennergy', price: 229.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma29.jpg', 'imagem/macaquinhos/ma30.jpg'] },
    { id: 'mac-13', name: 'Macaquinho Moving', price: 240.00, category: 'macaquinhos', images: ['imagem/macaquinhos/ma31.jpg', 'imagem/macaquinhos/ma32.jpg'] },
    { id: 'mac-14', name: 'Macaquinho Speed', price: 229.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma33.jpg', 'imagem/macaquinhos/ma34.jpg', 'imagem/macaquinhos/ma35.jpg'] },
    { id: 'mac-15', name: 'Macaquinho Essencial', price: 280.00, category: 'macaquinhos', images: ['imagem/macaquinhos/ma36.jpg', 'imagem/macaquinhos/ma37.jpg', 'imagem/macaquinhos/ma39.jpg'] },
    { id: 'mac-16', name: 'Macaquinho Sweet', price: 259.90, category: 'macaquinhos', images: ['imagem/macaquinhos/ma40.jpg', 'imagem/macaquinhos/ma41.jpg', 'imagem/macaquinhos/ma42.jpg'] }, // <-- FIM MACAQUINHOS


    // --- CATEGORIA: CONJUNTOS DE CALÇA (8 itens) ---
    // --- CATEGORIA: NOVOS CONJUNTOS DE SHORT (s1 a s48) ---

    // --- CATEGORIA: CONJUNTOS (Subcategorias) ---


    { id: 'conj-calca-01', name: 'Conjunto legging Speed Bege ', price: 269.90, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c1.jpg', 'imagem/conjuntos/c2.jpg', 'imagem/conjuntos/c3.jpg'] },
    { id: 'conj-calca-02', name: 'Conjunto legging Monocromático Preto', price: 280.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c4.jpg', 'imagem/conjuntos/c5.jpg', 'imagem/conjuntos/c6.jpg'] },
    { id: 'conj-calca-01', name: 'Conjunto legging Monocromático Bege', price: 280.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c7.jpg', 'imagem/conjuntos/c8.jpg', 'imagem/conjuntos/c9.jpg'] },
    { id: 'conj-calca-02-A', name: 'Conjunto legging Soulmate Preto', price: 250.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c10.jpg', 'imagem/conjuntos/c11.jpg', 'imagem/conjuntos/c12.jpg'] },
    { id: 'conj-calca-03-B', name: 'Conjunto legging Soulmate Bege Escuro', price: 250.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c13.jpg', 'imagem/conjuntos/c14.jpg', 'imagem/conjuntos/c15.jpg'] },
    { id: 'conj-calca-04-B', name: 'Conjunto legging Moving Bege', price: 250.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c16.jpg', 'imagem/conjuntos/c17.jpg', 'imagem/conjuntos/c18.jpg'] },
    { id: 'conj-calca-03-B', name: 'Conjunto legging Ennergy Preto', price: 245.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c19.jpg', 'imagem/conjuntos/c20.jpg', 'imagem/conjuntos/c21.jpg'] },
    { id: 'conj-calca-04-B', name: 'Conjunto legging Summer Ciano', price: 280.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c22.jpg', 'imagem/conjuntos/c23.jpg', 'imagem/conjuntos/c24.jpg'] },
    { id: 'conj-calca-05-A', name: 'Conjunto legging Candy Preto', price: 275.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c25.jpg', 'imagem/conjuntos/c26.jpg', 'imagem/conjuntos/c27.jpg'] },
    { id: 'conj-calca-06-A', name: 'Conjunto legging Lucy Vinho', price: 245.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c28.jpg', 'imagem/conjuntos/c29.jpg', 'imagem/conjuntos/c30.jpg'] },
    { id: 'conj-calca-05-B', name: 'Conjunto legging Lucy preto', price: 245.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c31.jpg', 'imagem/conjuntos/c32.jpg', 'imagem/conjuntos/c33.jpg'] },
    { id: 'conj-calca-06-B', name: 'Conjunto legging Lucy Azul', price: 245.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c34.jpg', 'imagem/conjuntos/c35.jpg', 'imagem/conjuntos/c36.jpg'] },
    { id: 'conj-calca-07-A', name: 'Conjunto legging Lucy Bege', price: 245.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c37.jpg', 'imagem/conjuntos/c38.jpg', 'imagem/conjuntos/c39.jpg'] },
    { id: 'conj-calca-08-A', name: 'Conjunto legging Lucy Rose', price: 265.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c40.jpg', 'imagem/conjuntos/c41.jpg', 'imagem/conjuntos/c42.jpg'] },
    { id: 'conj-calca-07-B', name: 'Conjunto legging Sereia Bege', price: 290.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c43.jpg', 'imagem/conjuntos/c44.jpg', 'imagem/conjuntos/c45.jpg'] },
    { id: 'conj-calca-08-B', name: 'Conjunto legging Sweet Azul', price: 255.00, category: 'conjuntos', subcategory: 'conjuntos-calca', images: ['imagem/conjuntos/c46.jpg', 'imagem/conjuntos/c47.jpg', 'imagem/conjuntos/c48.jpg'] },

    // --- CATEGORIA: NOVOS CONJUNTOS DE SHORT (s1 a s48) ---
    { id: 'conj-short-09', name: 'Conjunto short Speed Preto ', price: 279.90, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s1.jpg', 'imagem/conjunto/s2.jpg', 'imagem/conjunto/s3.jpg'] },
    { id: 'conj-short-10', name: 'Conjunto short Soulmate Vinho', price: 280.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s4.jpg', 'imagem/conjunto/s5.jpg', 'imagem/conjunto/s6.jpg'] }, // Caminho corrigido para 'conjunto/s6.jpg'
    { id: 'conj-short-11', name: 'Conjunto short Sereia Preto', price: 270.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s7.jpg', 'imagem/conjunto/s8.jpg', 'imagem/conjunto/s9.jpg'] },
    { id: 'conj-short-12', name: 'Conjunto short Monocromatico', price: 269.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s10.jpg', 'imagem/conjunto/s11.jpg', 'imagem/conjunto/s12.jpg'] },
    { id: 'conj-short-13', name: 'Conjunto short Lucy Bege', price: 265.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s13.jpg', 'imagem/conjunto/s14.jpg', 'imagem/conjunto/s15.jpg'] },
    { id: 'conj-short-14', name: 'Conjunto short Stella Cinza', price: 250.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s16.jpg', 'imagem/conjunto/s17.jpg', 'imagem/conjunto/s18.jpg'] },
    { id: 'conj-short-15', name: 'Conjunto short Sereia Vinho', price: 270.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s19.jpg', 'imagem/conjunto/s20.jpg', 'imagem/conjunto/s21.jpg'] },
    { id: 'conj-short-16', name: 'Conjunto short Moving Preto', price: 260.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s22.jpg', 'imagem/conjunto/s23.jpg', 'imagem/conjunto/s24.jpg'] },
    { id: 'conj-short-17', name: 'Conjunto short Moving Branco ', price: 249.90, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s25.jpg', 'imagem/conjunto/s26.jpg', 'imagem/conjunto/s27.jpg'] },
    { id: 'conj-short-18', name: 'Conjunto short Sweet Azul', price: 249.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s28.jpg', 'imagem/conjunto/s29.jpg', 'imagem/conjunto/s30.jpg'] },
    { id: 'conj-short-19', name: 'Conjunto short Soul Vinho', price: 270.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s31.jpg', 'imagem/conjunto/s32.jpg', 'imagem/conjunto/s33.jpg'] },
    { id: 'conj-short-20', name: 'Conjunto short Curver Azul', price: 280.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s34.jpg', 'imagem/conjunto/s35.jpg', 'imagem/conjunto/s36.jpg'] },
    { id: 'conj-short-21', name: 'Conjunto short Modal Rosa', price: 275.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s37.jpg', 'imagem/conjunto/s38.jpg', 'imagem/conjunto/s39.jpg'] },
    { id: 'conj-short-22', name: 'Conjunto short Match Ciano ', price: 280.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s40.jpg', 'imagem/conjunto/s41.jpg', 'imagem/conjunto/s42.jpg'] },
    { id: 'conj-short-23', name: 'Conjunto short Modal Vermelho', price: 275.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s43.jpg', 'imagem/conjunto/s44.jpg', 'imagem/conjunto/s45.jpg'] },
    { id: 'conj-short-24', name: 'Conjunto short Match Preto', price: 290.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s46.jpg', 'imagem/conjunto/s47.jpg', 'imagem/conjunto/s48.jpg'] },
    { id: 'conj-short-25A', name: 'Conjunto short Match Bege', price: 290.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s49.jpg', 'imagem/conjunto/s50.jpg', 'imagem/conjunto/s51.jpg'] },
    { id: 'conj-short-26A', name: 'Conjunto short Sereia Preto ', price: 270.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s52.jpg', 'imagem/conjunto/s53.jpg', 'imagem/conjunto/s54.jpg'] },
    { id: 'conj-short-25B', name: 'Conjunto short Sereia Rosa', price: 270.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s55.jpg', 'imagem/conjunto/s56.jpg', 'imagem/conjunto/s57.jpg'] },
    { id: 'conj-short-26B', name: 'Conjunto short Sweet Branco/azul', price: 270.00, category: 'conjuntos', subcategory: 'conjunto-short', images: ['imagem/conjunto/s58.jpg', 'imagem/conjunto/s59.jpg', 'imagem/conjunto/s60.jpg'] },


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

// --- FUNÇÃO CRÍTICA PARA RENDERIZAR O CATÁLOGO DE PRODUTOS ---
function renderProductsPage(maxPriceFilter = null, sortBy = 'default', productsToRender = PRODUCTS_DATA) {
    const urlParams = new URLSearchParams(window.location.search);

    // 1. OBTÉM OS FILTROS DA URL
    const categoryFilter = urlParams.get('categoria');
    const searchQuery = urlParams.get('q'); // NOVO: Captura o termo de busca

    // Elementos da interface
    const productGridEl = document.getElementById('product-list-grid');
    const pageTitleEl = document.getElementById('page-title');
    const noProductsMsgEl = document.getElementById('no-products-message');
    const productCountEl = document.getElementById('product-count');
    const sortSelectEl = document.getElementById('sort-select');

    if (!productGridEl) return;

    // 2. OBTENDO FILTROS DE PREÇO
    let maxPrice = Infinity;
    if (maxPriceFilter !== null) {
        maxPrice = maxPriceFilter;
    } else {
        const priceRangeEl = document.getElementById('price-range');
        if (priceRangeEl) {
            maxPrice = parseFloat(priceRangeEl.value);
        }
    }

    // Ordenação Atual
    if (sortSelectEl && sortBy === 'default') {
        sortBy = sortSelectEl.value;
    }

    // 3. FILTRAGEM
    let filteredProducts = productsToRender;
    let title = 'Todos os Produtos'; // Título padrão

    // --- FILTRAGEM POR TERMO DE BUSCA (PRIORIDADE ALTA) ---
    if (searchQuery) {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(normalizedQuery) ||
            (p.description && p.description.toLowerCase().includes(normalizedQuery)) || // Garante que a descrição exista
            p.category.toLowerCase().includes(normalizedQuery)
        );
        title = `Resultados da busca por "${searchQuery}"`;
    }

    // --- FILTRAGEM POR CATEGORIA (SE NÃO HOUVER BUSCA GLOBAL) ---
    if (categoryFilter && !searchQuery) {
        filteredProducts = filteredProducts.filter(p =>
            p.category === categoryFilter || p.subcategory === categoryFilter
        );
        // Lógica de título de categoria (mantida)
        if (categoryFilter === 'conjuntos-calca') {
            title = 'Conjuntos com Calça';
        } else if (categoryFilter === 'conjunto-short') {
            title = 'Conjuntos com Short';
        } else if (categoryFilter === 'leggin') {
            title = 'Leggin';
        } else {
            title = categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1);
        }
    }

    // Filtro C: Preço Máximo
    if (maxPrice !== Infinity) {
        filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);
    }


    // 4. ORDENAÇÃO:
    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // 5. ATUALIZAÇÃO DO TÍTULO E CONTADOR:
    if (pageTitleEl) pageTitleEl.innerText = title;
    if (productCountEl) productCountEl.innerText = filteredProducts.length;


    // 6. RENDERIZAÇÃO:
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

            <div class="product-link-overlay">
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
            </div>
            </div>
                <button class="btn-add-to-cart" 
                     data-id="${product.id}" 
                     data-name="${product.name}" 
                     data-price="${product.price}" 
                     data-image="${product.images[0] || ''}"> 
                     Adicionar ao Carrinho
                    </button>
                    </div>
               
            `;
            productGridEl.insertAdjacentHTML('beforeend', productHTML);
        });
    }

    // 7. Reativa os eventos
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
        const sizeDisplay = item.size ? `Tam: ${item.size}` : 'Tamanho: Padrão';

        const itemHTML = `
        <div class="item-produto" data-id="${item.id}" data-price="${item.price}"> 
            <img src="${item.image}" alt="${item.name}"> 
           
            <div class="quantidade">
                <button class="btn-qty minus" data-id="${item.id}">-</button>
                <input type="number" value="${item.qty}" readonly class="input-qty">
                <button class="btn-qty plus" data-id="${item.id}">+</button>
            </div>
            <div class="remover">
                <i class="fa-solid fa-trash-can" data-id="${item.id}"></i>
            </div>
            <div class="detalhes">
                <h3>${item.name}</h3>
                <p>Preço Unit.: R$ ${item.price.toFixed(2).replace('.', ',')}</p> <p class="size-display">${sizeDisplay}</p>                
 <p class="price">${itemTotalFormatado}</p>
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
        const sliderContainer = productCard.querySelector('.slider-container');
        if (!sliderContainer) return;

        // CORREÇÃO ESSENCIAL: Tenta encontrar o trilho de imagens com a classe correta
        // No index.html, a classe é apenas '.image-slider'
        // No catálogo dinâmico, pode ser '.product-image-slider' (depende de como o HTML é gerado lá)
        const slider = productCard.querySelector('.image-slider') || productCard.querySelector('.product-image-slider');

        if (!slider) return;

        const images = Array.from(slider.querySelectorAll('img'));
        if (images.length <= 1) return;

        const prevBtn = productCard.querySelector('.prev-btn');
        const nextBtn = productCard.querySelector('.next-btn');
        const dotsContainer = productCard.querySelector('.slider-dots');
        let currentIndex = 0;

        // 1. FUNÇÃO DE ATUALIZAÇÃO (SHOW SLIDE)
        function updateSlider() {
            // CRÍTICO: Aplica a classe 'active-slide' para mostrar a imagem correta
            images.forEach((img, i) => {
                img.classList.toggle('active-slide', i === currentIndex);
            });

            // 2. ATUALIZA OS DOTS (Bolinhas)
            if (dotsContainer) {
                dotsContainer.innerHTML = ''; // Limpa antes de gerar
                images.forEach((_, i) => {
                    const dot = document.createElement('span');
                    dot.classList.add('dot');
                    dot.setAttribute('data-slide-index', i);
                    if (i === currentIndex) {
                        dot.classList.add('active');
                    }
                    dot.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        currentIndex = parseInt(e.target.dataset.slideIndex);
                        updateSlider();
                    });
                    dotsContainer.appendChild(dot);
                });
            }
        }

        // 3. EVENT LISTENERS PARA AS SETAS
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Impede o clique de abrir o link de detalhe
                currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Impede o clique de abrir o link de detalhe
                currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
                updateSlider();
            });
        }

        // 4. CHAMA PELA PRIMEIRA VEZ para inicializar a imagem, os dots e as setas
        updateSlider();
    });
}

// Funções Auxiliares (Para reativar os botões do carrinho após a renderização)
// NOVO E CORRIGIDO BLOCO DA FUNÇÃO attachCartButtonEvents
function attachCartButtonEvents() {
    // Re-anexa os eventos para todos os botões que já existem no DOM
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        // Remove listeners antigos para evitar duplicação, caso a função seja chamada várias vezes
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        newButton.addEventListener('click', (event) => {            
            event.preventDefault();

                  
            const prodData = event.currentTarget.dataset;            
            let cart = getCart();

                  
            let selectedSize = 'Padrão';            
            let uniqueId = prodData.id;

                   // Busca seletores
                  
            const sizeSelectDetalhe = document.getElementById('product-size'); // Seletor da página detalhe
                  
            const isDetailPageButton = newButton.classList.contains('detail-btn');

                   // NOVO: Tenta encontrar o SELETOR da MODAL
                  
            const sizeSelectModal = document.getElementById('modal-size');      
            const isModalButton = event.currentTarget.id === 'modal-add-to-cart-btn'; // O ID do botão que criamos

                  
            let selectToUse = null;

                  
            if (sizeSelectDetalhe && isDetailPageButton) {         // CASO 1: PÁGINA DE DETALHES
                         selectToUse = sizeSelectDetalhe;       } else if (sizeSelectModal && isModalButton) {         // CASO 2: BOTÃO DENTRO DA MODAL (ESTE É O NOVO CASO!)
                         selectToUse = sizeSelectModal;       }            
            if (selectToUse) {         // Lógica para seletor (Detalhe ou Modal)
                        
                let tempSize = selectToUse.value.toUpperCase();

                        
                if (tempSize === 'SELECIONE') {          
                    alert("Por favor, selecione um tamanho (P, M ou G) para adicionar ao carrinho.");          
                    selectToUse.focus();          
                    return;        
                }

                        
                selectedSize = tempSize;        
                uniqueId = prodData.id + `-${selectedSize}`;

                      
            } else {         // CASO 3: BOTOES DA LISTAGEM DE PRODUTOS (PROMPT)
                        
                const tempSize = prompt(`"${prodData.name}" selecionado.\nPor favor, digite o tamanho desejado (P, M ou G) para este item:`);

                        
                if (!tempSize || tempSize.trim() === "" || ['P', 'M', 'G'].indexOf(tempSize.toUpperCase().trim()) === -1) {           alert("Seleção de tamanho inválida ou cancelada. Adição ao carrinho cancelada.");           return;         }                
                selectedSize = tempSize.toUpperCase().trim();        
                uniqueId = prodData.id + `-${selectedSize}`;      
            }                   
            // 3. LÓGICA DE ADIÇÃO AO CARRINHO
            const existingItem = cart.find(item => item.id === uniqueId);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                const newItem = {
                    id: uniqueId,
                    name: prodData.name,
                    price: parseFloat(prodData.price),
                    image: prodData.image,
                    qty: 1,
                    // Garante que o item no carrinho sempre tenha 'Padrão' se a validação falhar/não for necessária
                    size: selectedSize || 'Padrão'
                };
                cart.push(newItem);
            }
            saveCart(cart);
            // Corrigindo o ALERTA para sempre mostrar Padrão se não houver tamanho:
            alert(`"${prodData.name}" (Tam: ${selectedSize || 'Padrão'}) adicionado ao carrinho!`);
            // O problema era que selectedSize podia ser "" ou null, fazendo aparecer "(Tam: Não Selecionado)"
        });
    });
}

/* ============================================================
    2.1. LÓGICA DE DETALHES DO PRODUTO E RELACIONADOS (NOVO)
    ============================================================ */

/**
 * Encontra um produto pelo seu ID único.
 * @param {string} productId - O ID do produto a ser procurado.
 * @returns {Object|undefined} O objeto do produto ou undefined.
 */
function findProductById(productId) {
    // Busca no array PRODUCTS_DATA global
    return PRODUCTS_DATA.find(p => p.id === productId);
}


/**
 * Renderiza a grade de produtos relacionados (mesma categoria, mas excluindo o atual).
 * @param {Object} currentProduct - O produto cujos detalhes estão sendo vistos.
 */
function renderRelatedProducts(currentProduct) {
    const relatedGridEl = document.getElementById('related-products-grid');
    if (!relatedGridEl) return;

    // Filtra produtos da mesma categoria, excluindo o produto atual
    const relatedProducts = PRODUCTS_DATA.filter(p =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    ).slice(0, 4); // Limita a, por exemplo, 4 itens

    relatedGridEl.innerHTML = '';

    if (relatedProducts.length > 0) {
        // Reutilizamos a lógica de renderização de cards aqui, mas de forma simplificada
        relatedProducts.forEach(product => {
            // ADICIONE A GERAÇÃO DO HTML DO SLIDER AQUI:
            const images = product.images || [];
            const imagesHtml = images.map((imgSrc, index) => `
        <img src="${imgSrc}" alt="${product.name} - Imagem ${index + 1}" ${index === 0 ? 'class="active-slide"' : ''}>
    `).join('');

            const dotsHtml = images.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" data-slide-index="${index}"></span>
    `).join('');
            // FIM DA ADIÇÃO
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
            
            <div class="input-group-listagem">
                <label for="size-${product.id}">Tam:</label>
                <select id="size-${product.id}" class="select-tamanho-listagem">
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                </select>
            </div>
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
            relatedGridEl.insertAdjacentHTML('beforeend', productHTML);
        });
        attachCartButtonEvents(); // Reativa os botões de carrinho nos itens relacionados
    } else {
        relatedGridEl.innerHTML = '<p style="text-align: center; width: 100%;">Nenhuma outra opção encontrada nesta categoria.</p>';
    }
}


/**
 * Renderiza a página de detalhes de um único produto (detalhe.html).
 */
function renderDetailPage() {
    // 1. Pega o ID da URL (detalhe.html?id=...)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = findProductById(productId);
    const container = document.getElementById('product-detail-container');
    const titleEl = document.querySelector('title'); // Para atualizar o título da aba

    if (!container) return; // Garante que estamos na página correta

    if (!product) {
        container.innerHTML = '<h2 style="text-align: center; padding: 50px;">Produto não encontrado.</h2>';
        if (titleEl) titleEl.innerText = 'Produto Não Encontrado';
        return;
    }

    if (titleEl) titleEl.innerText = product.name + ' | DY fitwear';

    // Constrói as imagens para o slider (pode ser adaptado para sua lógica de slider)
    const largeImageSlider = product.images.map((imgSrc, index) => `
        <img src="${imgSrc}" alt="${product.name} - Vista ${index + 1}" style="width: 100%; display: ${index === 0 ? 'block' : 'none'};">
    `).join('');

    const detailHTML = `
        <div class="product-detail-card">
            
            <div class="detail-images">
                <div class="main-image-slider">
                    ${largeImageSlider}
                    </div>
                </div>
            
            <div class="detail-info">
                <h1>${product.name}</h1>
                <p class="detail-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                
                <div class="detail-description">
                    <h3>Descrição e Características</h3>
                    <p>Feito com tecido de alta compressão. Ideal para treinos de alta intensidade. Possui proteção UV e tecnologia dry fit.</p>
                </div>

                <div class="input-group">
                    <label for="product-size">Tamanho:</label>
                    <select id="product-size" required>
                        <option value="SELECIONE">Selecione</option>
                        <option value="P">P (36-38)</option>
                        <option value="M">M (40-42)</option>
                        <option value="G">G (44-46)</option>
                    </select>
                </div>
                
                <button class="btn-add-to-cart detail-btn btn-login" 
                        data-id="${product.id}" 
                        data-name="${product.name}" 
                        data-price="${product.price}" 
                        data-image="${product.images[0] || ''}"> 
                    <i class="fa-solid fa-cart-plus"></i> COMPRAR AGORA
                </button>
            </div>
        </div>
    `;

    container.innerHTML = detailHTML;

    // 3. Renderiza produtos relacionados e reativa eventos
    renderRelatedProducts(product);
    attachCartButtonEvents();
    // Você precisará criar uma função específica para inicializar o slider de detalhes, se houver
}
/* ============================================================
    2.2. LÓGICA DO MODAL DE COMPRA RÁPIDA (QUICK VIEW)
    ============================================================ */

/**
 * Preenche e exibe o modal de compra rápida.
 * @param {string} productId - O ID do produto a ser exibido.
 */
function renderQuickViewModal(productId) {
    const product = findProductById(productId);
    const modalArea = document.getElementById('modal-product-detail-area');
    const modal = document.getElementById('quick-view-modal');
    const detailsLink = document.getElementById('modal-full-details-link');

    if (!product || !modal || !modalArea) return;

    // Constrói o HTML com o layout de duas colunas (imagem + info)
    const modalHTML = `
        <div class="product-detail-card">
            
            <div class="detail-images">
                <img src="${product.images[0]}" alt="${product.name}" style="width: 100%; object-fit: cover; border-radius: 6px;">
            </div>
            
            <div class="detail-info">
                <h1>${product.name}</h1>
                <p class="detail-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                
                <div class="detail-description">
                    <h3>Descrição (Rápida)</h3>
                    <p>Feito com tecido de alta compressão. Ideal para treinos e conforto. Possui proteção UV e tecnologia dry fit.</p>
                </div>

                <div class="input-group">
                    <label for="modal-size">Tamanho:</label>
                    <select id="modal-size" required>
                        <option value="SELECIONE">Selecione</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                    </select>
                </div>
                
                <button class="btn-add-to-cart detail-btn btn-login" 
                        id="modal-add-to-cart-btn"
                        data-id="${product.id}" 
                        data-name="${product.name}" 
                        data-price="${product.price}" 
                        data-image="${product.images[0] || ''}"> 
                    SELECIONE TODAS AS OPÇÕES
                </button>
            </div>
        </div>
    `;

    modalArea.innerHTML = modalHTML;

    // Atualiza o link "Ver detalhes"
    detailsLink.href = `detalhe.html?id=${product.id}`;

    // 1. Exibe o modal
    modal.classList.add('is-open');
    // 2. Reanexa o evento de carrinho (para usar o seletor #modal-size)
    attachCartButtonEvents();
}

// Lógica de Fechamento do Modal
function setupModalEvents() {
    const modal = document.getElementById('quick-view-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.classList.remove('is-open');
        });
    }

    // Fechar ao clicar fora (backdrop)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('is-open');
            }
        });
    }
}

// Função que anexa os cliques nos novos botões
function attachQuickViewEvents() {
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productId = event.currentTarget.dataset.id;
            renderQuickViewModal(productId);
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
    //nova linha
    setupSearch();

    // 3. SE ESTIVER NA PÁGINA DE PRODUTOS, RENDERIZA O CATÁLOGO e inicia o slider de preço
    if (document.querySelector('.products-page-section')) {
        initPriceSlider(); // Inicializa o controle de slider

        // Adiciona o listener de ordenação
        const sortSelectEl = document.getElementById('sort-select');
        if (sortSelectEl) {
            sortSelectEl.addEventListener('change', () => {
                renderProductsPage(null, sortSelectEl.value);
            });
        }

        renderProductsPage();
    }
    // Lógica específica para a página de Produtos/Home
    if (document.querySelector('.produtos-destaque')) {
        attachCartButtonEvents();
        initProductSliders(); // <-- ADICIONE ESTA LINHA
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

    // Lógica específica para a página de Detalhes (VIP)
    // Assume que o container principal de detalhes tem o ID 'product-detail-container'
    if (document.getElementById('product-detail-container')) {
        renderDetailPage();
    }
    // Lógica específica para a página de Produtos/Home
    if (document.querySelector('.produtos-destaque')) {  
        attachCartButtonEvents();
        initProductSliders();

        // NOVO: Inicializa a lógica do Modal de Compra Rápida
        setupModalEvents();
        attachQuickViewEvents();
    }
    /* ============================================================
    6. LÓGICA DE BUSCA
    ============================================================ */
    function setupSearch() {
        const searchForm = document.getElementById('search-form');

        if (searchForm) {
            searchForm.addEventListener('submit', (event) => {
                event.preventDefault(); // <-- Essencial: impede que o formulário recarregue a página

                const searchInput = document.getElementById('search-input');
                const query = searchInput.value.trim();

                if (query) {
                    // Redireciona para a página de produtos com o termo de busca na URL, 
                    // que será lido pela função renderProductsPage.
                    // O encodeURIComponent garante que caracteres especiais funcionem.
                    window.location.href = `produtos.html?q=${encodeURIComponent(query)}`;
                } else {
                    // Se o campo estiver vazio, apenas volta para a lista de todos os produtos
                    window.location.href = `produtos.html`;
                }
            });
        }
    }
});