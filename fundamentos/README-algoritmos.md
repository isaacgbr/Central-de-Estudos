# 🧮 Algoritmos e Estruturas de Dados — Guia de Referência Rápida

> Resumo introdutório sobre algoritmos e estruturas de dados — base para entrevistas técnicas e programação eficiente.

---

## O que são Algoritmos?

Algoritmo é uma sequência de passos para resolver um problema. A qualidade de um algoritmo é medida por:

| Critério | Significado |
|----------|-------------|
| **Tempo** | Quantas operações executa |
| **Espaço** | Quanta memória consome |
| **Clareza** | Quão fácil é de entender |

---

## Notação Big O — Complexidade

Mede o desempenho do algoritmo conforme o tamanho da entrada cresce.

| Notação | Nome | Exemplo |
|---------|------|---------|
| **O(1)** | Constante | Acessar elemento por índice |
| **O(log n)** | Logarítmica | Busca binária |
| **O(n)** | Linear | Percorrer uma lista |
| **O(n²)** | Quadrática | Dois loops aninhados |
| **O(2ⁿ)** | Exponencial | Recursão sem memoização |

```
O(1) → O(log n) → O(n) → O(n²) → O(2ⁿ)
mais rápido ────────────────────► mais lento
```

---

## Estruturas de Dados

### Array / Lista
```javascript
// Acesso direto por índice — O(1)
const lista = [10, 20, 30, 40];
lista[0]; // 10

// Busca por valor — O(n)
lista.find(n => n === 30);

// Inserção no final — O(1)
lista.push(50);

// Inserção no início — O(n) — desloca todos os elementos
lista.unshift(0);
```

---

### Pilha — Stack (LIFO)
> **L**ast **I**n, **F**irst **O**ut — o último que entra é o primeiro que sai.
> Exemplo do mundo real: pilha de pratos.

```javascript
class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item)  { this.itens.push(item); }         // empilha
  pop()       { return this.itens.pop(); }        // desempilha
  topo()      { return this.itens[this.itens.length - 1]; }
  estaVazia() { return this.itens.length === 0; }
}

const pilha = new Pilha();
pilha.push(1);  // [1]
pilha.push(2);  // [1, 2]
pilha.pop();    // retorna 2 → [1]
```

---

### Fila — Queue (FIFO)
> **F**irst **I**n, **F**irst **O**ut — o primeiro que entra é o primeiro que sai.
> Exemplo do mundo real: fila do banco.

```javascript
class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(item) { this.itens.push(item); }        // entra na fila
  dequeue()     { return this.itens.shift(); }    // sai da fila
  frente()      { return this.itens[0]; }
  estaVazia()   { return this.itens.length === 0; }
}

const fila = new Fila();
fila.enqueue("Ana");   // ["Ana"]
fila.enqueue("João");  // ["Ana", "João"]
fila.dequeue();        // retorna "Ana" → ["João"]
```

---

### Objeto / Mapa — HashMap
```javascript
// Acesso por chave — O(1)
const mapa = {};
mapa["chave"] = "valor";   // inserir
mapa["chave"];              // acessar
delete mapa["chave"];       // remover

// Map nativo do JavaScript
const map = new Map();
map.set("nome", "Ana");
map.get("nome");   // "Ana"
map.has("nome");   // true
map.delete("nome");
```

---

## Algoritmos de Busca

### Busca Linear — O(n)
Percorre todos os elementos até encontrar.

```javascript
const buscaLinear = (lista, alvo) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === alvo) return i; // retorna o índice
  }
  return -1; // não encontrado
};

buscaLinear([10, 30, 50, 20], 50); // 2
```

---

### Busca Binária — O(log n)
Só funciona em listas **ordenadas**. Divide a lista ao meio a cada passo.

```javascript
const buscaBinaria = (lista, alvo) => {
  let inicio = 0;
  let fim    = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (lista[meio] === alvo) return meio;      // encontrou
    if (lista[meio] < alvo)   inicio = meio + 1; // busca na metade direita
    else                      fim    = meio - 1; // busca na metade esquerda
  }

  return -1; // não encontrado
};

buscaBinaria([10, 20, 30, 40, 50], 40); // 3
```

---

## Algoritmos de Ordenação

### Bubble Sort — O(n²)
Compara pares adjacentes e troca se estiverem fora de ordem. Simples mas lento.

```javascript
const bubbleSort = (lista) => {
  const arr = [...lista]; // copia para não modificar o original
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // troca
      }
    }
  }
  return arr;
};

bubbleSort([5, 3, 1, 4, 2]); // [1, 2, 3, 4, 5]
```

---

### Ordenação Nativa do JavaScript — O(n log n)
Na prática, use sempre o `.sort()` nativo — é mais eficiente.

```javascript
// Ordenar números
[5, 3, 1, 4, 2].sort((a, b) => a - b); // crescente → [1, 2, 3, 4, 5]
[5, 3, 1, 4, 2].sort((a, b) => b - a); // decrescente → [5, 4, 3, 2, 1]

// Ordenar objetos por propriedade
const produtos = [
  { nome: "Ração",     preco: 89.90 },
  { nome: "Herbicida", preco: 45.90 },
  { nome: "Vacina",    preco: 12.50 },
];

produtos.sort((a, b) => a.preco - b.preco);
// ordena do mais barato ao mais caro
```

---

## Recursão

Função que chama a si mesma. Sempre precisa de uma **condição de parada**.

```javascript
// Fatorial — n! = n * (n-1) * (n-2) * ... * 1
const fatorial = (n) => {
  if (n <= 1) return 1;        // condição de parada
  return n * fatorial(n - 1);  // chamada recursiva
};

fatorial(5); // 5 * 4 * 3 * 2 * 1 = 120

// Fibonacci
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(6); // 8
```

> ⚠️ Sem condição de parada → recursão infinita → **StackOverflowError**

---

## Tabela Comparativa

| Estrutura | Acesso | Busca | Inserção | Remoção |
|-----------|--------|-------|----------|---------|
| Array | O(1) | O(n) | O(1)* | O(n) |
| Pilha | O(n) | O(n) | O(1) | O(1) |
| Fila | O(n) | O(n) | O(1) | O(1) |
| HashMap | O(1) | O(1) | O(1) | O(1) |

*inserção no final

---

## Boas Práticas

- Prefira estruturas de dados nativas da linguagem quando possível
- Use **HashMap** quando precisar de busca rápida por chave
- Use **Array** para listas ordenadas com acesso por índice
- Use **Pilha** para histórico de ações e navegação
- Use **Fila** para processamento em ordem de chegada
- Evite loops aninhados em dados grandes — tende a O(n²)

---

> 💡 **Resumindo:** Você não vai implementar Bubble Sort no trabalho — o `.sort()` já faz isso. Mas entender a complexidade dos algoritmos te ajuda a escrever código mais eficiente e a se sair bem em entrevistas técnicas.