# Portfólio: Helloá Samille

Trabalho final de **Desenvolvimento Front-End para Web**.
Feito com **HTML, CSS, JavaScript e Bootstrap 5**.

## Páginas
- `index.html`: sobre mim de forma geral (música, Frank Ocean, esportes, família, amigos, fé e contato)
- `futuro.html`: meu futuro acadêmico (vida acadêmica, Cibersegurança x IA, plano de estudos)

## Como abrir
Abra a pasta no VS Code e rode o `index.html` com a extensão **Live Server** (botão direito no arquivo > *Open with Live Server*).
Também funciona dando dois cliques no `index.html`.

## O que trocar antes de entregar
1. **E-mail do formulário**: em `js/script.js`, na constante `MEU_EMAIL`.
2. **Redes sociais**: em `index.html`, procure por "TROQUE os links" na seção Contato.
3. **Fotos**: veja a lista abaixo.
4. **Textos curtos** dos sobrinhos e dos instrumentos: troque por detalhes reais seus (há dicas nos comentários do HTML).

## Fotos (24 espaços)
Salve cada foto dentro da pasta `img/` **com exatamente o nome da tabela**. Não precisa mexer no código:
quando a foto existir, o aviso do espaço some sozinho. Se alguma ficar sem foto, o aviso continua aparecendo.

| # | Arquivo | O que colocar | Formato | Página |
|---|---------|---------------|---------|--------|
| 1 | `perfil.jpg` | Sua foto principal: Um retrato seu, bem iluminado e de preferência sorrindo. Formato vertical (em pé). | Vertical 4:5 | index.html |
| 2 | `sobre.jpg` | Você de um jeito mais natural: Uma foto descontraída, tipo rindo com os amigos, em um passeio ou com a sua cara do dia a dia. Diferente da foto 1. | Vertical 4:5 | index.html |
| 3 | `violao.jpg` | Você tocando violão: Pode ser uma foto tocando ou só segurando o violão. | Horizontal 4:3 | index.html |
| 4 | `baixo.jpg` | Você tocando baixo: Uma foto com o baixo, ou um detalhe das cordas e das suas mãos tocando. | Horizontal 4:3 | index.html |
| 5 | `guitarra.jpg` | Você tocando guitarra: Com a guitarra na mão ou ligada no amplificador. | Horizontal 4:3 | index.html |
| 6 | `ukulele.jpg` | Você tocando ukulele: Uma foto tocando ukulele, de preferência em um lugar bonito ou colorido. | Horizontal 4:3 | index.html |
| 7 | `frank-ocean.jpg` | Foto do Frank Ocean: Uma foto dele, de um show ou de um clipe. Use uma imagem que você tenha direito de usar. Vertical. | Vertical 4:5 | index.html |
| 8 | `frank-album.jpg` | O seu álbum favorito dele: A capa do álbum dele que você mais gosta, ou uma foto do seu vinil/CD se tiver. Quadrada. | Quadrada 1:1 | index.html |
| 9 | `frank-voce.jpg` | Você curtindo a música dele: Você de fone de ouvido, com o violão ou no seu cantinho ouvindo música. Quadrada. | Quadrada 1:1 | index.html |
| 10 | `volei.jpg` | Você jogando vôlei: Na quadra, na areia ou com os amigos. Se tiver uma foto sacando ou levantando a bola, melhor ainda. | Horizontal 4:3 | index.html |
| 11 | `esporte-outro.jpg` | Você em outro esporte: Qualquer outro esporte que você já experimentou: futebol, corrida, natação, academia... Horizontal. | Horizontal 16:9 | index.html |
| 12 | `esporte-amigos.jpg` | Esporte com os amigos: Você e os amigos em uma quadra ou campo, antes ou depois do jogo. Horizontal. | Horizontal 16:9 | index.html |
| 13 | `liam.jpg` | Você com o Liam: Uma foto só dele ou de vocês dois juntos. Quadrada. | Quadrada 1:1 | index.html |
| 14 | `itan.jpg` | Você com o Ítan: Uma foto só dele ou de vocês dois juntos. Quadrada. | Quadrada 1:1 | index.html |
| 15 | `lanna.jpg` | Você com a Lanna: Uma foto só dela ou de vocês duas juntas. Quadrada. | Quadrada 1:1 | index.html |
| 16 | `sobrinhos-juntos.jpg` | Você com o Liam, o Ítan e a Lanna: A foto dos três juntos com você. Horizontal. | Horizontal 16:9 | index.html |
| 17 | `familia.jpg` | Sua família reunida: Um almoço de domingo, uma data comemorativa ou qualquer dia em que todo mundo estava junto. Horizontal. | Horizontal 16:9 | index.html |
| 18 | `familia-2.jpg` | Um dia especial em família: Um aniversário, uma viagem, o Natal... qualquer dia que ficou marcado. Horizontal. | Horizontal 16:9 | index.html |
| 19 | `amigos-grupo.jpg` | Você com o grupo de amigos: Uma foto de todo mundo junto. Vertical. | Vertical 4:5 | index.html |
| 20 | `amigos-especial.jpg` | Você com um amigo ou amiga especial: Aquela pessoa que você mais considera da família. Vertical. | Vertical 4:5 | index.html |
| 21 | `amigos-role.jpg` | Um rolê ou uma viagem juntos: Um passeio, uma festa, uma comemoração... um momento marcante com os amigos. Vertical. | Vertical 4:5 | index.html |
| 22 | `fe.jpg` | Algo que represente a sua fé: Pode ser a sua igreja, uma Bíblia, um momento de oração ou uma paisagem que te traga paz. | Horizontal 4:3 | index.html |
| 23 | `estudando.jpg` | Você estudando ou programando: Foto com o notebook, no seu cantinho de estudo ou na faculdade. Pode ser a tela com código aparecendo. | Horizontal 4:3 | futuro.html |
| 24 | `faculdade.jpg` | Você na faculdade: No campus, na sala de aula ou com os colegas de curso. Horizontal. | Horizontal 4:3 | futuro.html |

Dicas:
- Use o formato **.jpg** (se a sua foto for .png ou .webp, troque a extensão no `src` da tag `<img>` correspondente).
- Fotos com até uns 1 MB cada deixam o site rápido.
- Não é preciso cortar a foto no formato exato: o CSS ajusta (`object-fit: cover`).
- No caso do Frank Ocean, use uma imagem que você possa usar (por exemplo, uma foto sua num show).

## Elementos do Bootstrap usados
Navbar responsiva (collapse), grade (row/col), cards, badges, abas (nav-pills), carrossel, accordion, tabela responsiva,
formulário com `form-floating` e validação, toast, tooltips, `ratio` e botões.

## Estrutura
```
portfolio-helloa/
├── index.html
├── futuro.html
├── css/
│   ├── style.css      (estilos principais)
│   └── futuro.css     (estilos só da página futuro)
├── js/
│   └── script.js
├── img/               (coloque as 24 fotos aqui)
├── bootstrap/         (css e js do Bootstrap 5.3.9)
└── README.md
```
