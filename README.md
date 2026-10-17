# PIXEL — Museu Interativo dos Videogames

<<<<<<< HEAD
## Atualização — Identidade visual 01 + exposições interativas (2026)

Esta versão preserva a estrutura completa do projeto e integra as decisões visuais mais recentes:

- **Logo 01 escolhida:** símbolo amarelo em pixel art e tipografia vetorial PIXEL em branco, com detalhes em azul/ciano e rosa. O cabeçalho, o rodapé e o favicon utilizam arquivos SVG locais (`assets/pixel-logo-full.svg`, `assets/logo.svg`).
- **Paleta revisada:** fundo azul-marinho, azul elétrico, ciano, amarelo e pequenos acentos rosa. Estilos complementares em `css/pixel-brand-2026.css`.
- **Home — Sinta a arte dos games:** a antiga prévia cronológica foi convertida em uma galeria de sensações (Descoberta, Desafio, Velocidade e Memória), com imagens de jogos que já estavam no projeto, seleção de cenas, navegação por setas e apresentação responsiva. As salas originais permanecem.
- **Sala 003:** novo comparador deslizante com imagens do Sonic (1991 e 2022 por padrão) e quatro pares adicionais de materiais de jogos existentes. Há seleção por miniaturas e controle por mouse, toque ou teclado. O conteúdo histórico anterior, incluindo estudo de caso, linha do tempo e fontes, não foi apagado.
- **Sala 006:** nova estação extra **Objetos que contam histórias**, acrescentada **depois** do experimento de desempenho, sem substituí-lo. Inclui uma ilustração original de controle retrô e dez sprites originais de itens de videogame; setas, miniaturas e efeitos de seleção. As imagens são **ilustrações originais**, não fotografias de peças nem modelos 3D reais.
- **Sobre o PIXEL:** seção ampliada sobre arte, memória afetiva, cultura, tecnologia, educação e relações com o tema da Atividade Integradora VI — Sensibilidade e Estética.
- **Acesso ao console:** o botão “Explorar o console” passa a rolar para a estação de inspeção sem modificar o hash da rota; a Sala 003 usa a mesma estratégia para sua galeria comparativa.

### Execução

Dentro de `pixel/`, rode `py -m http.server 8000` no Windows ou `python -m http.server 8000`, depois abra `http://localhost:8000`.

### Testes e limitações

Foram verificadas sintaxe dos arquivos JavaScript e CSS, integridade do ZIP, disponibilidade local das imagens renderizadas e preservação dos arquivos de jogos. **Não foi possível executar o teste visual completo no navegador deste ambiente por bloqueio de navegação**, então valide em um navegador real antes de publicar. O comparador usa materiais promocionais e capturas do acervo local, que **não são necessariamente idênticos às imagens conceituais dos mockups**. O uso de imagens de jogos não concede licença de redistribuição: confira os direitos correspondentes antes de deixar o repositório público.

---

## Versão atual — Home animada e Sala 005 (quiz completo)

**Projeto estático, pronto para GitHub Pages**, feito com HTML, CSS, JavaScript modular e dados JSON; sem React, servidor de aplicação ou banco de dados.

### Como executar

Abra o terminal **dentro da pasta `pixel/`** e execute `py -m http.server 8000` (Windows) ou `python -m http.server 8000`. Acesse `http://localhost:8000`. **Não abra `index.html` pelo explorador (`file://`)**: o carregamento de módulos e JSON precisa de HTTP. Para publicar no GitHub Pages, mantenha todo o conteúdo de `pixel/` na pasta publicada pelo Pages e use a página `index.html` como entrada.

### Atualizações implementadas

- **Home:** painel principal animado, mantendo a imagem `assets/metal-slug.jpg`; ambientação arcade, partículas, chips, brilho, movimentos suaves e opção de reduzir animações nas preferências do sistema.
- **Cartões das seis salas:** novas ilustrações originais em SVG (`assets/home-room-*.svg`), entrada por rolagem, zoom suave, reflexos, foco por teclado e layouts responsivos.
- **Como os jogos evoluíram:** quatro períodos apresentados com ilustrações vetoriais originais, linha do tempo em cores, detalhes textuais, botões anterior/próximo e controle por etapas (incluindo no celular).
- **Sobre e rodapé:** painel visual revisado e links internos funcionais.
- **Sala 005:** 24 questões no banco `data/quiz.json`, organizadas por dificuldade (8 fáceis, 8 médias e 8 avançadas); modo Jornada Histórica (18 perguntas) e Desafio Rápido (10 perguntas); seleção embaralhada; indicação de tema, fonte histórica e explicação por resposta; pontuação, combo, tela de resultados, revisão de erros e conquistas; recorde armazenado localmente quando o navegador permitir; cronômetro por pergunta, que pode ser desativado. Atalhos `1` a `4` para respostas e `Enter` para avançar.
- **Preservação:** as salas 001, 002 e 003, a Sala 004 com seus arquivos de jogos e a imagem exata do gabinete `assets/arcade-cabinet-exato.png` permanecem no pacote.

### Arquivos adicionados ou atualizados

- `js/views.js` — home, cartões, períodos e interações.
- `js/quiz.js` — estados, temporizador, correção, progresso e resultados do quiz.
- `js/app.js` — roteamento da Sala 005, dados do quiz e carregamento da home.
- `data/quiz.json` — perguntas com explicações e links de referência.
- `css/home-v5.css` e `css/quiz.css` — visual animado, responsividade, legibilidade e movimento reduzido.
- `assets/home-room-*.svg` / `assets/home-era-*.svg` — ilustrações próprias do projeto.

### Notas técnicas e editoriais

O site não coleta nem envia respostas do quiz para servidores. Recordes e conquistas usam armazenamento local do navegador quando disponível. O conteúdo das questões foi elaborado a partir de marcos e fontes já citados na linha do tempo e nas fichas do museu; ao atualizar essas referências, revise também o banco de questões.

As novas ilustrações vetoriais são originais. **A imagem de Metal Slug e outros materiais de franquias que já existiam no projeto foram preservados a pedido do responsável pelo projeto**; a inclusão no ZIP não concede licença de redistribuição nem autorização de uso de marcas ou imagens de terceiros. Revise os direitos de utilização antes de publicar o repositório publicamente.

### Compatibilidade e verificações

Foram feitos testes automatizados de navegação, carregamento de imagens, perguntas, feedback, conclusão do modo Jornada, troca de etapas e ausência de rolagem horizontal em larguras entre 320 e 1920 pixels. Recomenda-se revisar em dispositivos reais e conferir eventuais restrições de licenciamento antes da publicação.

---

## Registro técnico das etapas anteriores

=======
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
## Etapa 2 — Navegação por salas e linha do tempo interativa

Projeto estático com HTML, CSS, JavaScript modular e JSON. Não usa React.

### Executar localmente
Na pasta do projeto, execute:

```bash
py -m http.server 8000
```

Se `py` não funcionar, tente `python -m http.server 8000`. Acesse `http://localhost:8000`.

Não abra `index.html` diretamente com `file://`: o site usa módulos JavaScript e `fetch()` para carregar arquivos JSON.

### Estrutura
```text
pixel/
├── index.html
├── README.md
├── css/
│   └── main.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── views.js
│   └── timeline.js
├── data/
│   ├── rooms.json
│   ├── eras.json
│   └── timeline-events.json
└── assets/
    └── images/
```

### Funcionalidades desta etapa
- Navegação real por hash routes (`#/` e `#/sala/<slug>`).
- Seis salas temáticas com páginas individuais, ainda com conteúdo de apresentação para as etapas seguintes.
- Linha do tempo interativa, com filtros por era.
- Cada evento abre contexto, nota sobre data e links para as fontes.
- Links externos abrem em nova aba com `rel="noopener noreferrer"`.
- Menu móvel e suporte a Escape.
- Layout responsivo e respeito à preferência por movimento reduzido.

### Critérios de rigor histórico
- Datas de protótipos, primeiras demonstrações e lançamentos comerciais não são tratados como equivalentes.
- Lançamentos regionais são explicitados quando a fonte fornece essa informação.
- As fontes são ligadas diretamente em cada marco.
- A seleção é introdutória e não exaustiva. Informações adicionais devem ser verificadas antes de entrar no museu.

### Fontes históricas usadas na linha do tempo
- Computer History Museum, “Graphics & Games timeline”: https://www.computerhistory.org/timeline/graphics-games/
- Nintendo, história corporativa (PDF): https://www.nintendo.co.jp/kessan/annual0503e.pdf
- Nintendo, história corporativa: https://www.nintendo.co.jp/corporate/history/index.html
- Nintendo, história da Nintendo: https://www.nintendo.com/pt-pt/Consolas-e-acessorios/Historia-da-Nintendo/Historia-da-Nintendo-625945.html
- PlayStation, história de 1994 (Brasil): https://www.playstation.com/pt-br/playstation-history/1994-ps-one/
- Sony, história corporativa: https://www.sony.com/en/SonyInfo/CorporateInfo/History/company/

### Próximas etapas
1. Fichas individuais dos 10 consoles.
2. Comparação da evolução gráfica.
3. Quiz histórico baseado nas fontes do museu.
4. Uma fase completa de plataforma original.
5. Testes de acessibilidade e publicação no GitHub Pages.

### Créditos e direitos
A ilustração principal é criada com CSS e não reproduz personagens ou sprites de franquias existentes. Imagens históricas serão adicionadas somente após verificar origem, licença e condições de reutilização. PIXEL é um projeto educacional independente e não é afiliado às empresas mencionadas nas fontes.

## Etapa 3 — Galeria de consoles

A sala `#/sala/consoles` agora contém uma coleção pesquisável de dez consoles, com fichas individuais em diálogo acessível, contexto histórico, datas de lançamento por região, resumo técnico, jogos representativos, curiosidade e referências externas.

### Dados e direitos visuais

- Os registros estão em `data/consoles.json`; a interface está em `js/consoles.js` e é conectada pelo roteador em `js/app.js`.
- Não foram embutidas fotografias de consoles nem logotipos de fabricantes. As formas visuais são silhuetas CSS esquemáticas originais, criadas para evitar reutilização de imagens sem licença confirmada.
- As datas são separadas por região. Quando uma fonte apresenta apenas um ano ou intervalo, a ficha mantém esse nível de precisão e informa variações por país.
- As especificações são resumos técnicos e podem variar por revisão de hardware, região ou jogo. Consulte as fontes listadas em cada ficha antes de reutilizar informações em material acadêmico.
- As referências incluem cronologias oficiais da Nintendo e PlayStation/Sony, além de uma fonte especializada secundária para datas regionais do Mega Drive/Genesis. Alguns detalhes técnicos são amplamente documentados, mas nem todos os links institucionais usados são manuais técnicos completos; por isso, o texto evita afirmar especificações não necessárias.

### Teste local

Como o projeto carrega JSON com `fetch()`, execute por servidor HTTP, não abrindo `index.html` diretamente. Na pasta `pixel/`, use `py -m http.server 8000` (Windows) ou `python -m http.server 8000`, depois acesse `http://localhost:8000` e abra **Galeria de consoles**.

### Estado de validação

Os arquivos JSON e a sintaxe JavaScript foram verificados automaticamente. Isso não substitui um teste manual completo em navegadores e dispositivos reais.

## Etapa 4 — Evolução gráfica

A sala `#/sala/evolucao-grafica` agora possui linha do tempo visual, filtros por período, estudo de caso da evolução de Sonic, seção sobre gráficos modernos com GTA VI e comparação interativa entre períodos.

### Direitos de imagens e marcas
- Os diagramas da sala são composições abstratas originais em CSS, não capturas de jogos nem reproduções de personagens/logotipos.
- Nenhuma captura de Sonic ou GTA VI é redistribuída no pacote. O visitante pode abrir os materiais oficiais nos links de referência.
- A política de conteúdo da Rockstar para fãs não é tratada como licença universal de reutilização; verifique as condições atuais e peça autorização quando necessário.
- Sonic e GTA são marcas/propriedades de seus respectivos titulares; são citados para fins de contexto histórico e educativo.

### Referências adicionadas
- SEGA — cronologia corporativa: https://www.sega.co.jp/en/company/history/index.html
- SEGA — manual oficial de Sonic the Hedgehog (datas regionais): https://manuals.sega.com/wp-content/uploads/2022/06/SM_Sonic_Origin_En_220617.pdf
- SEGA — Sonic Origins: https://asia.sega.com/SonicOrigins/en/about/
- Computer History Museum — Graphics & Games: https://www.computerhistory.org/timeline/graphics-games/
- Rockstar Games — mídia oficial de GTA VI: https://www.rockstargames.com/VI/media
- Rockstar Games — política de publicação de material protegido: https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material

A sala é um panorama introdutório; antes de acrescentar datas precisas para jogos individuais da série Sonic, consulte páginas oficiais específicas por título e região. A ficha de Sonic Adventure sinaliza que 1998 se refere ao lançamento original japonês.


## Correção de navegação e galerias oficiais (atualização)

- O botão **Conhecer as salas** usa a âncora `#salas-home`. A aplicação agora reconhece essa âncora como navegação interna da página inicial, em vez de interpretá-la como uma rota de sala inexistente (erro 404).
- A sala de evolução gráfica inclui acesso direto ao Sonic Channel/SEGA e à galeria oficial de mídia de GTA VI da Rockstar.
- Não foram copiados em lote arquivos oficiais para dentro do ZIP. A disponibilidade de uma imagem em um site oficial não equivale, por si só, a uma licença universal de redistribuição. Para publicação educativa, consulte os termos aplicáveis e use apenas material autorizado para o uso pretendido.

Fontes de política e mídia consultadas:
- SEGA, Streaming Guidelines: https://support.sega.com/hc/en-us/articles/44194402112529-STREAMING-GUIDELINES
- Rockstar Games, GTA VI Media: https://www.rockstargames.com/VI/media
- Rockstar Support, Policy on posting copyrighted material: https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material


## Etapa 4 — Evolução gráfica visual

- Controle deslizante entre cinco épocas com cartões de navegação por período.
- Comparação entre períodos com diagramas originais em CSS.
- Linha do tempo de Sonic: Sonic the Hedgehog (1991), Sonic Adventure (1998), Sonic Generations (2011) e Sonic Frontiers (2022).
- Cada card de Sonic exibe uma imagem local (`assets/sonic-*.jpg`), © SEGA, usada com finalidade educacional.
- Fontes, créditos e política de imagens ficam disponíveis na própria sala.

Para executar: `py -m http.server 8000` na pasta `pixel` e abra `http://localhost:8000`. A página precisa de internet para fontes web.


### Sala 2 — fotografias reais dos consoles
A galeria utiliza fotografias hospedadas no Wikimedia Commons. Os endereços das imagens, páginas-fonte, autoria e observações de licença estão registrados em `data/consoles.json`. As imagens são carregadas da internet; é necessário estar conectado para exibi-las. A página de cada arquivo é a referência definitiva para verificar autoria e licença antes de qualquer reutilização. Se uma imagem externa falhar, o card mostra um link para abrir sua fonte.


### Sala 2 — catálogo histórico ampliado

A galeria foi ampliada para incluir consoles domésticos, portáteis e híbridos, do Magnavox Odyssey (1972) a modelos atuais, incluindo Telejogo, PS3, PS4, PS5, Xbox 360, Xbox Series X e Switch 2. Há filtros por geração, tipo e fabricante. As fotografias são carregadas de fontes externas; confira o arquivo original do Wikimedia Commons para validar autoria e licença. Como os nomes dos arquivos podem mudar, a galeria oferece link alternativo de busca caso uma fotografia não carregue.


## Como abrir o projeto localmente

1. Extraia o ZIP inteiro para uma pasta.
2. Entre na pasta `pixel` extraída.
3. Abra essa pasta no VS Code.
4. Inicie um servidor local (recomendado: extensão Live Server) e abra `index.html` por ele.
5. Não mova `index.html`, `css`, `js` ou `data` para pastas separadas: os caminhos relativos dependem dessa estrutura.

Como o projeto usa módulos JavaScript (`type="module"`) e carrega arquivos JSON, abrir o arquivo com duplo clique (`file://`) pode impedir que os dados sejam carregados. Use Live Server ou outro servidor HTTP local.

### Sobre as fotografias
As imagens são carregadas de serviços externos e dependem de conexão com a internet, da disponibilidade do arquivo e das regras do servidor de origem. Se uma imagem não carregar, a ficha apresenta um link para consultar a fonte. Isso não significa que todas as licenças tenham sido verificadas individualmente; confira a página original antes de reutilizar qualquer fotografia.


## Ajuste de imagens (versão atualizada)

Foram atualizados links diretos para arquivos do Wikimedia Commons em várias fichas que exibiam “Imagem indisponível”. As imagens continuam hospedadas externamente e dependem da disponibilidade do Commons e da conexão. A autoria/licença deve ser conferida na página indicada em cada ficha antes de reutilizar as imagens. O Coleco Telstar permanece pendente de confirmação de um arquivo direto confiável.


### Correção de imagens (outubro de 2026)

Os links de Coleco Telstar, Sega Dreamcast, PlayStation 4, PlayStation 5 e Xbox Series X foram atualizados para arquivos específicos do Wikimedia Commons, em vez de páginas genéricas de pesquisa. Os créditos/licenças aparecem nos metadados das imagens; confira a página de origem antes de redistribuir imagens, especialmente a do Coleco Telstar. As imagens são carregadas pela internet e dependem da disponibilidade do Wikimedia Commons.


## Sala 004 — PIXEL ARCADE

<<<<<<< HEAD
A rota `#/sala/mundos-dos-jogos` apresenta experiências jogáveis no navegador. Space Invaders e OutRun são carregados em páginas isoladas; os minijogos autorais usam Canvas e JavaScript modular:

- **Sonic: teste de velocidade** — abre a versão web do projeto Open Sonic JS fornecido pelo usuário, isolada em `games/sonic/`. A integração inclui controles de toque para esquerda, direita, pulo e Enter. A licença MIT do código está preservada em `games/sonic/LICENSE-OpenSonicJS.txt`; ela não garante por si só a liberação de todos os assets de terceiros incluídos no jogo.
- **Pac-Man — Labirinto e estratégia** — jogo de labirinto com fantasmas, pontos e controles para celular.
=======
A rota `#/sala/mundos-dos-jogos` agora apresenta três protótipos jogáveis, feitos com Canvas e JavaScript modular, sem backend obrigatório:

- **Sonic: teste de velocidade** — protótipo não oficial de mecânicas de plataforma. A versão incluída usa formas temporárias originais, não distribui sprites, música ou arte oficial. A publicação com elementos da franquia depende de verificar direitos e obter as permissões necessárias.
- **Pixel Quest** — jogo de plataforma original com cristais, obstáculos, plataformas e checkpoints.
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
- **Turbo Pixel** — corrida arcade em visão superior, com obstáculos e percurso contra o tempo.

Cada jogo possui três fases, controles por teclado e toque, HUD, tela de conclusão e recordes locais. Os recordes usam `localStorage` no navegador e dispositivo atuais; não há conta nem sincronização entre dispositivos. Para testar, execute o servidor HTTP descrito acima e abra a Sala 004. A implementação deve ser validada manualmente em navegadores e celulares reais antes da publicação.


## Atualização — Sala 4 e identidade visual

- Seção GTA VI removida da sala Evolução Gráfica.
- Nova logo em pixel art (joystick arcade) em `assets/logo.svg`, também usada como favicon.

- Sala 3 revisada: cada época do controle deslizante agora usa um jogo de referência (Space Invaders 1978, Super Mario Bros. 1985, Streets of Rage 1991, Tomb Raider 1996/Chronicles 2000 e GTA V 2013), com imagens em `assets/era-*.jpg`. Aviso amarelo removido e cabeçalho com colagem dos jogos.

- v3: Metal Slug na tela do fliperama da home; cards das salas com imagem; topo e filtros da galeria de consoles redesenhados (nota de direitos removida da página); linha do tempo interativa com hover, painel de detalhes e ilustrações em pixel art (`assets/tl-*.svg`, `assets/room-*.svg`).
<<<<<<< HEAD


## Sala 004 — PIXEL ARCADE

A Sala 004 reúne experiências jogáveis em um catálogo visual. O **Space Invaders** está integrado em `games/space-invaders/` como uma página independente incorporada à sala, isolando o Canvas e o CSS do restante do museu.

### Executar localmente

Como o PIXEL carrega dados JSON por `fetch`, execute-o por um servidor HTTP local em vez de abrir `index.html` diretamente. Por exemplo, com Python instalado, entre na pasta `pixel/` e execute `python -m http.server 8000`; depois abra `http://localhost:8000`.

Na Sala 004, selecione **Space Invaders**. Controles do jogo: setas esquerda/direita ou A/D para mover, Espaço para disparar e Enter para iniciar. O recorde é guardado pelo próprio jogo no armazenamento local do navegador. Para sair, use **Voltar aos jogos**.

O Space Invaders é uma recriação de fã para fins educacionais; Space Invaders é marca da Taito. Consulte os termos e permissões aplicáveis antes de distribuir publicamente.


## Etapa 5 — OutRun JS na Sala 004

- O projeto de corrida pseudo-3D foi integrado em `games/outrun/`, mantendo a implementação e os arquivos do repositório original `guillecura/outrun--js` em uma página isolada, carregada por `iframe`.
- `Space Invaders` continua disponível e não foi removido.
- A Sala 004 ganhou um cartão próprio para **OutRun JS**, usando como arte de capa a imagem fornecida pelo usuário.
- Foram acrescentados controles de toque para celular (esquerda/direita, acelerar, freio, nitro e freio de mão), mantendo as variáveis e a física originais do jogo. No desktop, continuam disponíveis os controles por teclado.
- O jogo é um projeto independente de corrida pseudo-3D inspirado em jogos arcade, não uma emulação do OutRun original da SEGA.

### Crédito e observação sobre direitos

Código-fonte de referência: https://github.com/guillecura/outrun--js (derivado do projeto `jakesgordon/javascript-racer`: https://github.com/jakesgordon/javascript-racer). O repositório não inclui um arquivo de licença explícita na cópia recebida. As imagens, sprites e músicas presentes nele podem ter condições de reutilização distintas do código. Antes de publicar ou redistribuir o pacote publicamente, confirme as licenças e permissões de cada asset; a finalidade educacional ou não comercial, por si só, não elimina direitos autorais. A arte de capa foi fornecida pelo usuário e também deve ser tratada como material ilustrativo protegido, não como recurso de domínio público.

### Teste

Execute o PIXEL por HTTP local (não abra `index.html` via `file://`), por exemplo `py -m http.server 8000`, e navegue até **Sala 004 → OutRun JS**. Em celular, teste os botões de toque em orientação paisagem e retrato. O desempenho em dispositivos móveis pode variar por navegador e GPU.\n
### Atualização da Sala 004 — integração de Open Sonic JS

- O cartão **Sonic: teste de velocidade** carrega `games/sonic/sonic.html` em um iframe isolado.
- O jogo é a versão web compilada de Open Sonic JS (não o protótipo Canvas anterior).
- A pasta contém os arquivos necessários do build web: JavaScript, CSS, dados de fases, imagens e sons.
- Foram adicionados botões de toque para mover à esquerda/direita, pular e acionar Enter em telas sensíveis ao toque.
- OutRun, Space Invaders, Sonic e as demais salas permanecem no projeto; Pac-Man ocupa o lugar anteriormente reservado ao protótipo de plataforma autoral.
- Para testar, sirva a pasta `pixel/` por HTTP (por exemplo, com Live Server); não abra apenas `index.html` via `file://`, pois o jogo carrega dados JSON.
- Revise as licenças dos recursos gráficos e sonoros de terceiros antes de publicar o pacote.

## Sala 006 — Hardware Lab (reformulação interativa)

A Sala 006 fica em `#/sala/por-dentro-do-console` e mantém um redirecionamento de compatibilidade para `#/sala/pixel-quest`. O card correspondente foi atualizado na página inicial.

**Inclui:** console tridimensional didático original; rotação e zoom por mouse, toque e pinça; desmontagem/montagem animada; seleção de oito subsistemas; tour guiado; minijogo que aciona uma explicação animada do fluxo de dados; sintetizador de tons Web Audio acionado pelo usuário; comparador com nove consoles; timeline técnica; demonstração com parâmetros reais de Canvas 2D e FPS estimado no navegador.

O visualizador utiliza **WebGL** diretamente (sem dependências de rede) quando disponível. Em dispositivos sem WebGL, usa um renderizador espacial em **Canvas 2D** que mantém zoom, rotação, desmontagem e seleção de componentes. Os desenhos e a arquitetura 3D são didáticos e originais; **não** são réplicas técnicas de um console comercial específico nem fotografias.

### Arquivos adicionados ou alterados

- `js/console-lab-3d.js` — visualização em WebGL e renderizador 3D alternativo.
- `js/inside-console.js` — layout, interação, tours, comparação, minijogo e experiência de desempenho.
- `css/hardware-lab.css` — identidade visual, animações e responsividade.
- `assets/hardware-hero.svg` — ilustração técnica original da placa e componentes.
- `js/views.js` — arte e rótulo do card da Sala 006.
- `js/app.js` — inicialização e limpeza dos recursos da nova sala.
- `index.html` — referência à folha de estilo.

### Notas técnicas e acessibilidade

As simulações mostram relações didáticas, e não medem desempenho de consoles reais. Os controles usam botões com rótulos, o áudio só é gerado após interação, e as animações respeitam `prefers-reduced-motion`. Para explorar a cena com teclado, use os botões de seleção e zoom disponíveis abaixo do modelo. O menu de tour guiado também pode ser encerrado com Escape.

Documentação histórica e referências adicionais: [Atari 2600 — Stella Programmer's Guide](https://www.atariage.com/2600/programming/2600_101/docs/stella.html), [SEGA — Mega Drive](https://www.sega.jp/history/hard/megadrive/) e [PlayStation Blog — especificações do PS5 de lançamento](https://blog.br.playstation.com/2020/09/16/playstation-5-sera-lancado-no-brasil-em-19-de-novembro-com-precos-a-partir-de-r-4499-para-a-edicao-digital-e-r-4999-para-o-ps5-com-leitor-blu-ray-ultra-hd/).

Abra com servidor HTTP local (`python -m http.server 8000`) a partir da pasta `pixel` e visite `http://localhost:8000/#/sala/por-dentro-do-console`.
=======
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
