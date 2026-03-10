# 🌐 HTML — Guia de Referência Rápida

> Resumo completo de HTML — estrutura e marcação de páginas web.

---

## O que é HTML?

HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo de páginas web. Não é uma linguagem de programação — é a **estrutura** da página.

```
HTML  → estrutura   (o esqueleto)
CSS   → estilo      (a aparência)
JS    → comportamento (a interação)
```

---

## Estrutura Básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Informações sobre a página — não aparece na tela -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Conteúdo visível da página -->
    <h1>Olá, Mundo!</h1>

    <script src="script.js"></script>
</body>
</html>
```

| Tag | Função |
|-----|--------|
| `<!DOCTYPE html>` | Define que é HTML5 |
| `<html>` | Elemento raiz da página |
| `<head>` | Metadados — não aparece na tela |
| `<body>` | Conteúdo visível da página |

---

## Tags de Texto

```html
<!-- Títulos — h1 é o mais importante, h6 o menor -->
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Título de Seção</h3>

<!-- Parágrafo -->
<p>Texto normal aqui.</p>

<!-- Formatação inline -->
<strong>Negrito</strong>
<em>Itálico</em>
<u>Sublinhado</u>
<mark>Destacado</mark>
<small>Texto pequeno</small>

<!-- Quebra de linha e linha horizontal -->
<br>
<hr>
```

---

## Links e Imagens

```html
<!-- Link externo -->
<a href="https://google.com" target="_blank">Abrir Google</a>

<!-- Link interno -->
<a href="sobre.html">Sobre</a>

<!-- Link âncora — navega para um ID na página -->
<a href="#contato">Ir para Contato</a>
<section id="contato">...</section>

<!-- Imagem -->
<img src="foto.jpg" alt="Descrição da imagem" width="300">

<!-- Imagem com link -->
<a href="https://exemplo.com">
    <img src="logo.png" alt="Logo">
</a>
```

> ⚠️ Sempre use `alt` nas imagens — essencial para acessibilidade.

---

## Listas

```html
<!-- Lista não ordenada — com bolinhas -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Lista ordenada — com números -->
<ol>
    <li>Primeiro</li>
    <li>Segundo</li>
    <li>Terceiro</li>
</ol>

<!-- Lista de definição -->
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação</dd>
    <dt>CSS</dt>
    <dd>Linguagem de estilo</dd>
</dl>
```

---

## Tabelas

```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ana</td>
            <td>25</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>João</td>
            <td>30</td>
            <td>Fortaleza</td>
        </tr>
    </tbody>
</table>
```

| Tag | Função |
|-----|--------|
| `<table>` | Define a tabela |
| `<thead>` | Cabeçalho da tabela |
| `<tbody>` | Corpo da tabela |
| `<tr>` | Linha da tabela |
| `<th>` | Célula de cabeçalho |
| `<td>` | Célula de dados |

---

## Formulários

```html
<form action="/enviar" method="POST">

    <!-- Campo de texto -->
    <input type="text"     name="nome"  placeholder="Seu nome"  required>

    <!-- Email -->
    <input type="email"    name="email" placeholder="Seu email" required>

    <!-- Senha -->
    <input type="password" name="senha" placeholder="Senha">

    <!-- Número -->
    <input type="number"   name="idade" min="0" max="120">

    <!-- Data -->
    <input type="date"     name="nascimento">

    <!-- Checkbox -->
    <input type="checkbox" name="aceito" id="aceito">
    <label for="aceito">Aceito os termos</label>

    <!-- Radio -->
    <input type="radio" name="sexo" value="M" id="masc">
    <label for="masc">Masculino</label>

    <input type="radio" name="sexo" value="F" id="fem">
    <label for="fem">Feminino</label>

    <!-- Select -->
    <select name="cidade">
        <option value="">Selecione...</option>
        <option value="sp">São Paulo</option>
        <option value="rj">Rio de Janeiro</option>
    </select>

    <!-- Textarea -->
    <textarea name="mensagem" rows="4" placeholder="Sua mensagem"></textarea>

    <!-- Botões -->
    <button type="submit">Enviar</button>
    <button type="reset">Limpar</button>

</form>
```

---

## Tags Semânticas

Organizam o conteúdo de forma significativa — melhoram SEO e acessibilidade.

```html
<header>  <!-- Cabeçalho da página ou seção -->
<nav>     <!-- Menu de navegação -->
<main>    <!-- Conteúdo principal -->
<section> <!-- Seção temática -->
<article> <!-- Conteúdo independente (post, notícia) -->
<aside>   <!-- Conteúdo lateral (sidebar) -->
<footer>  <!-- Rodapé -->
```

```html
<!-- Exemplo de estrutura semântica completa -->
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/sobre">Sobre</a>
    </nav>
</header>

<main>
    <section>
        <article>
            <h2>Título do Post</h2>
            <p>Conteúdo do post...</p>
        </article>
    </section>
    <aside>
        <p>Conteúdo relacionado</p>
    </aside>
</main>

<footer>
    <p>© 2025 Meu Site</p>
</footer>
```

---

## Div e Span

```html
<!-- div — bloco genérico para agrupar elementos -->
<div class="card">
    <h2>Título</h2>
    <p>Conteúdo do card</p>
</div>

<!-- span — inline genérico para estilizar parte do texto -->
<p>Preço: <span class="destaque">R$ 99,90</span></p>
```

> `div` ocupa a linha inteira (bloco). `span` fica junto ao texto (inline).

---

## Atributos Globais

```html
<!-- id — identifica um elemento único -->
<div id="menu-principal">

<!-- class — agrupa elementos para estilização -->
<div class="card destaque">

<!-- style — estilo inline (evite usar) -->
<p style="color: red;">Texto vermelho</p>

<!-- data — atributo personalizado para JS -->
<button data-id="1" data-tipo="produto">Editar</button>

<!-- title — tooltip ao passar o mouse -->
<img src="foto.jpg" title="Foto do produto">
```

---

## Meta Tags Essenciais

```html
<head>
    <!-- Codificação de caracteres -->
    <meta charset="UTF-8">

    <!-- Responsividade mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Descrição para SEO -->
    <meta name="description" content="Descrição da página para o Google">

    <!-- Título na aba do navegador -->
    <title>Minha Página</title>

    <!-- Ícone da aba -->
    <link rel="icon" href="favicon.ico">

    <!-- CSS externo -->
    <link rel="stylesheet" href="style.css">
</head>
```

---

## Boas Práticas

- Use tags **semânticas** em vez de `div` para tudo
- Sempre adicione `alt` nas imagens
- Use `label` associado a cada `input` do formulário
- Nunca use `style` inline — prefira classes CSS
- Um único `<h1>` por página
- Feche todas as tags corretamente
- Indente o código com 4 espaços para facilitar a leitura