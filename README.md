# PIXEL — Museu Interativo dos Videogames

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

A rota `#/sala/mundos-dos-jogos` agora apresenta três protótipos jogáveis, feitos com Canvas e JavaScript modular, sem backend obrigatório:

- **Sonic: teste de velocidade** — protótipo não oficial de mecânicas de plataforma. A versão incluída usa formas temporárias originais, não distribui sprites, música ou arte oficial. A publicação com elementos da franquia depende de verificar direitos e obter as permissões necessárias.
- **Pixel Quest** — jogo de plataforma original com cristais, obstáculos, plataformas e checkpoints.
- **Turbo Pixel** — corrida arcade em visão superior, com obstáculos e percurso contra o tempo.

Cada jogo possui três fases, controles por teclado e toque, HUD, tela de conclusão e recordes locais. Os recordes usam `localStorage` no navegador e dispositivo atuais; não há conta nem sincronização entre dispositivos. Para testar, execute o servidor HTTP descrito acima e abra a Sala 004. A implementação deve ser validada manualmente em navegadores e celulares reais antes da publicação.


## Atualização — Sala 4 e identidade visual

- Seção GTA VI removida da sala Evolução Gráfica.
- Nova logo em pixel art (joystick arcade) em `assets/logo.svg`, também usada como favicon.

- Sala 3 revisada: cada época do controle deslizante agora usa um jogo de referência (Space Invaders 1978, Super Mario Bros. 1985, Streets of Rage 1991, Tomb Raider 1996/Chronicles 2000 e GTA V 2013), com imagens em `assets/era-*.jpg`. Aviso amarelo removido e cabeçalho com colagem dos jogos.

- v3: Metal Slug na tela do fliperama da home; cards das salas com imagem; topo e filtros da galeria de consoles redesenhados (nota de direitos removida da página); linha do tempo interativa com hover, painel de detalhes e ilustrações em pixel art (`assets/tl-*.svg`, `assets/room-*.svg`).
