# 🎨 CSS — Guia de Referência Rápida

> Resumo completo de CSS — estilização e layout de páginas web.

---

## O que é CSS?

CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas HTML — cores, fontes, espaçamentos, layouts e animações.

```
HTML  → estrutura   (o esqueleto)
CSS   → estilo      (a aparência)
JS    → comportamento (a interação)
```

---

## Formas de Usar CSS

```html
<!-- 1. Externo — recomendado -->
<link rel="stylesheet" href="style.css">

<!-- 2. Interno — dentro do <head> -->
<style>
    p { color: red; }
</style>

<!-- 3. Inline — evite usar -->
<p style="color: red;">Texto</p>
```

> ✅ Sempre prefira o CSS **externo** — separa o estilo do HTML.

---

## Seletores

```css
/* Tag — seleciona todos os elementos daquele tipo */
p { color: black; }

/* Classe — seleciona elementos com aquela classe */
.card { background: white; }

/* ID — seleciona o elemento com aquele id */
#menu { background: green; }

/* Combinados */
.card h2 { font-size: 18px; }   /* h2 dentro de .card */
.card > p { color: gray; }      /* p filho direto de .card */
.btn:hover { opacity: 0.8; }    /* .btn ao passar o mouse */

/* Múltiplos seletores */
h1, h2, h3 { font-weight: bold; }
```

---

## Cores

```css
/* Nome */
color: red;
color: green;

/* Hexadecimal */
color: #ff0000;
color: #2d6a4f;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA — com transparência (0 a 1) */
color: rgba(0, 0, 0, 0.5);

/* HSL */
color: hsl(120, 100%, 50%);

/* Variáveis CSS — reutilize cores em todo o projeto */
:root {
    --verde:   #2d6a4f;
    --vermelho: #e63946;
    --fundo:   #f0f4f0;
}

.card { background: var(--fundo); }
.titulo { color: var(--verde); }
```

---

## Texto e Fontes

```css
/* Família da fonte */
font-family: 'Arial', sans-serif;
font-family: 'Nunito', sans-serif; /* Google Fonts */

/* Tamanho */
font-size: 16px;
font-size: 1rem;   /* relativo ao tamanho base */

/* Peso */
font-weight: 400;  /* normal */
font-weight: 700;  /* negrito */
font-weight: bold;

/* Estilo */
font-style: italic;
font-style: normal;

/* Alinhamento */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Decoração */
text-decoration: none;       /* remove sublinhado de links */
text-decoration: underline;

/* Transformação */
text-transform: uppercase;   /* MAIÚSCULO */
text-transform: lowercase;   /* minúsculo */
text-transform: capitalize;  /* Primeira Letra Maiúscula */

/* Espaçamento */
letter-spacing: 2px;  /* entre letras */
line-height: 1.6;     /* entre linhas */
```

---

## Box Model — O Modelo de Caixa

Todo elemento HTML é uma caixa com 4 camadas:

```
┌─────────────────────────────┐
│          margin             │  ← espaço externo
│  ┌───────────────────────┐  │
│  │       border          │  │  ← borda
│  │  ┌─────────────────┐  │  │
│  │  │    padding      │  │  │  ← espaço interno
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  content  │  │  │  │  ← conteúdo
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

```css
.card {
    /* Espaço interno — entre o conteúdo e a borda */
    padding: 20px;
    padding: 10px 20px;          /* vertical horizontal */
    padding: 10px 20px 10px 20px; /* top right bottom left */

    /* Borda */
    border: 1px solid #ccc;
    border-radius: 8px;          /* arredondamento */

    /* Espaço externo — entre elementos */
    margin: 16px;
    margin: 0 auto;              /* centraliza horizontalmente */

    /* Largura e altura */
    width: 300px;
    height: 200px;
    max-width: 600px;
    min-height: 100px;

    /* box-sizing: inclui padding e border no tamanho total */
    box-sizing: border-box;      /* use sempre */
}
```

---

## Display

```css
/* Block — ocupa a linha inteira */
display: block;    /* div, p, h1 são block por padrão */

/* Inline — fica junto ao texto */
display: inline;   /* span, a são inline por padrão */

/* Inline-block — inline mas aceita width/height */
display: inline-block;

/* Flex — layout flexível */
display: flex;

/* Grid — layout em grade */
display: grid;

/* None — esconde o elemento */
display: none;
```

---

## Flexbox — Layout Flexível

```css
.container {
    display: flex;

    /* Direção dos itens */
    flex-direction: row;           /* horizontal (padrão) */
    flex-direction: column;        /* vertical */

    /* Alinhamento horizontal */
    justify-content: flex-start;   /* início */
    justify-content: center;       /* centro */
    justify-content: flex-end;     /* fim */
    justify-content: space-between; /* espaço entre */
    justify-content: space-around;  /* espaço ao redor */

    /* Alinhamento vertical */
    align-items: stretch;   /* estica (padrão) */
    align-items: center;    /* centraliza */
    align-items: flex-start;
    align-items: flex-end;

    /* Quebra de linha */
    flex-wrap: wrap;    /* quebra quando necessário */
    flex-wrap: nowrap;  /* não quebra (padrão) */

    /* Espaço entre itens */
    gap: 16px;
}

/* Itens filhos */
.item {
    flex: 1;        /* ocupa espaço igual */
    flex: 0 0 200px; /* tamanho fixo de 200px */
}
```

---

## Grid — Layout em Grade

```css
.container {
    display: grid;

    /* Define colunas */
    grid-template-columns: 1fr 1fr 1fr;       /* 3 colunas iguais */
    grid-template-columns: 200px 1fr;          /* fixa + flexível */
    grid-template-columns: repeat(3, 1fr);     /* 3 colunas iguais */

    /* Define linhas */
    grid-template-rows: auto;

    /* Espaço entre células */
    gap: 20px;
    column-gap: 20px;
    row-gap: 10px;
}

/* Item ocupando múltiplas colunas */
.destaque {
    grid-column: span 2; /* ocupa 2 colunas */
    grid-row: span 2;    /* ocupa 2 linhas */
}
```

---

## Posicionamento

```css
/* Static — padrão, segue o fluxo normal */
position: static;

/* Relative — relativo à posição original */
position: relative;
top: 10px;
left: 20px;

/* Absolute — relativo ao pai com position != static */
position: absolute;
top: 0;
right: 0;

/* Fixed — fixo na tela, não rola com a página */
position: fixed;
bottom: 20px;
right: 20px;

/* Sticky — fixo ao rolar até certo ponto */
position: sticky;
top: 0;

/* Z-index — controla a sobreposição */
z-index: 10; /* maior valor fica na frente */
```

---

## Pseudo-classes e Pseudo-elementos

```css
/* Pseudo-classes — estado do elemento */
a:hover   { color: blue; }      /* ao passar o mouse */
a:active  { color: red; }       /* ao clicar */
a:visited { color: purple; }    /* link visitado */
input:focus { border: 2px solid blue; } /* campo em foco */

li:first-child { font-weight: bold; }   /* primeiro filho */
li:last-child  { color: gray; }         /* último filho */
li:nth-child(2) { color: green; }       /* segundo filho */

/* Pseudo-elementos — parte do elemento */
p::first-line   { font-weight: bold; }  /* primeira linha */
p::first-letter { font-size: 2em; }     /* primeira letra */
.btn::before { content: "→ "; }         /* antes do conteúdo */
.btn::after  { content: " ✓"; }         /* depois do conteúdo */
```

---

## Responsividade — Media Queries

```css
/* Mobile first — estilo base para mobile */
.container { padding: 16px; }

/* Tablet — a partir de 768px */
@media (min-width: 768px) {
    .container { padding: 24px; }
    .grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop — a partir de 1024px */
@media (min-width: 1024px) {
    .container { padding: 32px; max-width: 1200px; margin: 0 auto; }
    .grid { grid-template-columns: 1fr 1fr 1fr; }
}

/* Orientação */
@media (orientation: landscape) { }
```

---

## Transições e Animações

```css
/* Transição — suaviza a mudança de propriedade */
.btn {
    background: green;
    transition: background 0.3s ease;
}
.btn:hover { background: darkgreen; }

/* Animação */
@keyframes aparecer {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
}

.card {
    animation: aparecer 0.4s ease;
}
```

---

## Sombras

```css
/* Sombra de caixa */
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
box-shadow: 0 4px 20px rgba(0,0,0,0.2);

/* Sombra de texto */
text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
```

---

## Boas Práticas

- Use **variáveis CSS** para cores e tamanhos repetidos
- Use `box-sizing: border-box` em todos os elementos
- Prefira `rem` e `em` em vez de `px` para fontes
- Use **Flexbox** para layouts de uma dimensão
- Use **Grid** para layouts de duas dimensões
- Siga o padrão **mobile first** nas media queries
- Nomeie classes de forma descritiva → `.card-titulo` em vez de `.ct`
- Evite `!important` — indica problema na especificidade