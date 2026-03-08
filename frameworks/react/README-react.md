# ⚛️ React — Guia de Referência Rápida

> Resumo introdutório sobre React — biblioteca JavaScript para criação de interfaces.

---

## O que é React?

React é uma **biblioteca JavaScript** criada pelo Facebook para construir interfaces de usuário (UI). Trabalha com o conceito de **componentes** — partes reutilizáveis da interface.

```
JavaScript + Componentes + Estado = React
```

| | HTML/CSS/JS puro | React |
|--|------------------|-------|
| **Organização** | Arquivos separados | Componentes |
| **Atualização da tela** | Manual (DOM) | Automática |
| **Reutilização** | Difícil | Simples |
| **Mercado** | Base | Muito exigido |

---

## Instalação e Configuração

```bash
# Criar projeto React com Vite (recomendado)
npm create vite@latest meu-projeto -- --template react

# Entrar na pasta
cd meu-projeto

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

> ✅ Vite é mais rápido que o Create React App — use sempre o Vite.

---

## Estrutura de Pastas

```
meu-projeto/
├── src/
│   ├── components/    ← componentes reutilizáveis
│   ├── pages/         ← páginas da aplicação
│   ├── assets/        ← imagens e arquivos estáticos
│   ├── App.jsx        ← componente raiz
│   └── main.jsx       ← ponto de entrada
├── public/            ← arquivos públicos
├── index.html
└── package.json
```

---

## Componente — O Básico

```jsx
// Componente funcional — sempre começa com letra maiúscula
function BemVindo() {
  return (
    <div>
      <h1>Olá, Mundo!</h1>
      <p>Meu primeiro componente React.</p>
    </div>
  );
}

export default BemVindo;
```

> ⚠️ O código dentro do `return` parece HTML mas é **JSX** — uma extensão do JavaScript.

---

## Props — Passando Dados para Componentes

```jsx
// Componente que recebe props
function Cartao({ nome, idade }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
    </div>
  );
}

// Usando o componente com props
function App() {
  return (
    <div>
      <Cartao nome="Ana"  idade={25} />
      <Cartao nome="João" idade={30} />
    </div>
  );
}
```

> Props são **somente leitura** — o componente filho não pode alterá-las.

---

## useState — Gerenciando Estado

```jsx
import { useState } from "react";

function Contador() {
  // [valorAtual, funçãoParaAtualizar] = useState(valorInicial)
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
      <button onClick={() => setContador(0)}>Resetar</button>
    </div>
  );
}
```

---

## useEffect — Executando Efeitos

```jsx
import { useState, useEffect } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  // Executa quando o componente é montado
  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []); // [] = executa só uma vez

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
```

| `useEffect` | Quando executa |
|-------------|----------------|
| `useEffect(() => {}, [])` | Só na montagem |
| `useEffect(() => {}, [valor])` | Quando `valor` mudar |
| `useEffect(() => {})` | A cada renderização |

---

## Eventos

```jsx
function Formulario() {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarregar a página
    console.log("Nome:", nome);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)} // atualiza o estado
        placeholder="Digite seu nome"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## Renderização Condicional

```jsx
function Perfil({ logado }) {
  return (
    <div>
      {/* Operador ternário */}
      {logado ? <p>Bem-vindo!</p> : <p>Faça login</p>}

      {/* Operador && — exibe só se verdadeiro */}
      {logado && <button>Sair</button>}
    </div>
  );
}
```

---

## Listas — Renderizando Arrays

```jsx
function ListaProdutos({ produtos }) {
  return (
    <ul>
      {produtos.map((produto) => (
        // key é obrigatório — identifica cada item na lista
        <li key={produto.id}>
          {produto.nome} — R${produto.preco}
        </li>
      ))}
    </ul>
  );
}
```

> ⚠️ Sempre use `key` ao renderizar listas — evita bugs de renderização.

---

## Consumindo API com Node.js/Express

```jsx
import { useState, useEffect } from "react";

function App() {
  const [produtos, setProdutos]   = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando...</p>;

  return (
    <ul>
      {produtos.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
    </ul>
  );
}

export default App;
```

---

## Hooks Essenciais

| Hook | Para que serve |
|------|----------------|
| `useState` | Gerenciar estado do componente |
| `useEffect` | Executar efeitos (buscar dados, timers) |
| `useContext` | Compartilhar dados entre componentes |
| `useRef` | Referenciar elementos do DOM |
| `useMemo` | Memorizar valores calculados |

---

## Boas Práticas

- Um componente por arquivo — nome do arquivo igual ao componente
- Use **PascalCase** para componentes → `ListaProdutos.jsx`
- Use **camelCase** para funções e variáveis → `handleSubmit`
- Mantenha componentes pequenos — uma responsabilidade por componente
- Sempre use `key` ao renderizar listas
- Prefira `const` para componentes e funções
- Separe a lógica de busca de dados dos componentes visuais

---

> 💡 **Resumindo:** React é o frontend natural para quem já faz backend com Node.js/Express. O `useEffect` com `fetch` conecta direto na sua API — é exatamente assim que o frontend vai consumir o projeto de estoque futuramente.