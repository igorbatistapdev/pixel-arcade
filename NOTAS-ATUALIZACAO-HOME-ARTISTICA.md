# PIXEL — Atualização da home artística

Base: projeto completo na paleta azul-petróleo profundo.

## Conteúdo desta atualização

- Tela do arcade da home com rotação automática de oito imagens enviadas pelo responsável do projeto: Mario, Sonic, Street Fighter V, Metal Slug, Mortal Kombat, Star Wars, Crash Bandicoot e Mega Man X.
- Escolha manual por oito indicadores; avanço a cada aproximadamente 5,1 segundos, pausa quando o painel está sob o mouse ou em foco, e interrupção ao ocultar a aba. A rotação respeita preferências por movimento reduzido.
- Moldura com brilho ciano, faíscas, raios estilizados e a animação original do painel preservada.
- Galeria “Sinta a arte dos games” mais colorida, com quadros dinâmicos, imagens adicionais e efeitos discretos.
- Seção “Sobre” com linguagem mais afetiva, artes emolduradas, iluminação quente e conteúdo acadêmico preservado.
- Estilos móveis e controles acessíveis.

## Arquivos alterados ou criados

- `js/views.js`
- `css/pixel-home-artistic.css` (novo)
- `index.html`
- `assets/capa-*.webp` (oito imagens otimizadas a partir dos anexos do responsável)

## Direitos e créditos

As imagens enviadas representam franquias de videogames e obras audiovisuais pertencentes aos respectivos titulares. O envio de uma imagem não significa automaticamente autorização de redistribuição pública. Antes de publicar o projeto, verifique o direito de uso, as atribuições adequadas e as condições de cada imagem. Os arquivos WebP foram otimizados apenas para a experiência do site.

## Execução

Sirva a pasta `pixel/` por HTTP, por exemplo com `py -m http.server 8000`, e acesse `http://localhost:8000`.
