# 🧠 Fundamentos de Lógica de Programação

> Base para qualquer linguagem — conceitos essenciais para pensar como um programador.

---

## O que é Lógica de Programação?

É a capacidade de organizar o raciocínio em uma sequência de passos para resolver um problema. Antes de escrever código, você precisa saber **o que fazer** e **em que ordem**.

---

## Algoritmo

Sequência de passos finita e ordenada para resolver um problema.

**Exemplo — Fazer um café:**
```
1. Ferver a água
2. Colocar o pó no coador
3. Despejar a água quente
4. Aguardar coar
5. Servir na xícara
```

Todo programa é um algoritmo — a diferença é que escrevemos em uma linguagem que o computador entende.

---

## Variáveis e Constantes

```
// Variável — valor pode mudar
idade = 25
idade = 26  ← permitido

// Constante — valor não muda
PI = 3.14159
PI = 3  ← não permitido
```

| Conceito | Significado |
|----------|-------------|
| **Variável** | Espaço na memória que guarda um valor que pode mudar |
| **Constante** | Espaço na memória com valor fixo |
| **Tipo** | Define o que a variável pode guardar (número, texto, etc.) |

---

## Tipos de Dados

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Inteiro** | Número sem casas decimais | 10, -5, 0 |
| **Real** | Número com casas decimais | 3.14, -2.5 |
| **Texto** | Cadeia de caracteres | "Olá", "João" |
| **Lógico** | Verdadeiro ou falso | verdadeiro, falso |
| **Caractere** | Um único símbolo | 'A', '7', '!' |

---

## Operadores

```
// Aritméticos
a + b   → soma
a - b   → subtração
a * b   → multiplicação
a / b   → divisão
a % b   → resto da divisão (módulo)
a ^ b   → potência

// Relacionais (comparação)
a == b  → igual
a != b  → diferente
a > b   → maior
a < b   → menor
a >= b  → maior ou igual
a <= b  → menor ou igual

// Lógicos
E  (AND) → verdadeiro SE ambos forem verdadeiros
OU (OR)  → verdadeiro SE pelo menos um for verdadeiro
NÃO (NOT)→ inverte o valor lógico
```

---

## Estruturas de Decisão

### SE / SENÃO (if / else)
```
SE (condição) ENTÃO
    // executa se verdadeiro
SENÃO
    // executa se falso
FIM SE
```

**Exemplo:**
```
SE (idade >= 18) ENTÃO
    escreva("Maior de idade")
SENÃO
    escreva("Menor de idade")
FIM SE
```

### ESCOLHA / CASO (switch)
```
ESCOLHA (variavel)
    CASO valor1:
        // executa
    CASO valor2:
        // executa
    PADRÃO:
        // executa se nenhum caso bater
FIM ESCOLHA
```

---

## Estruturas de Repetição

### ENQUANTO (while) — condição verificada antes
```
ENQUANTO (condição) FAÇA
    // executa enquanto condição for verdadeira
FIM ENQUANTO

// Exemplo
contador = 0
ENQUANTO (contador < 5) FAÇA
    escreva(contador)
    contador = contador + 1
FIM ENQUANTO
```

### PARA (for) — quantidade definida
```
PARA i DE 0 ATÉ 4 FAÇA
    escreva(i)
FIM PARA
```

### REPITA ATÉ (do while) — condição verificada depois
```
REPITA
    // executa pelo menos uma vez
ATÉ QUE (condição)
```

---

## Funções / Procedimentos

```
// Função — retorna um valor
FUNÇÃO somar(a, b)
    RETORNE a + b
FIM FUNÇÃO

resultado = somar(10, 5)  // resultado = 15

// Procedimento — não retorna valor
PROCEDIMENTO saudar(nome)
    escreva("Olá, " + nome)
FIM PROCEDIMENTO

saudar("Ana")  // Olá, Ana
```

| Conceito | Significado |
|----------|-------------|
| **Parâmetro** | Valor recebido pela função |
| **Retorno** | Valor devolvido pela função |
| **Chamada** | Momento em que a função é executada |

---

## Vetores e Matrizes

```
// Vetor — lista de valores do mesmo tipo
nomes = ["Ana", "João", "Maria"]
nomes[0] = "Ana"   ← índice começa no 0
nomes[1] = "João"
nomes[2] = "Maria"

// Percorrer vetor
PARA i DE 0 ATÉ tamanho(nomes) - 1 FAÇA
    escreva(nomes[i])
FIM PARA

// Matriz — tabela de valores (linhas x colunas)
tabela[0][0] = 1
tabela[0][1] = 2
tabela[1][0] = 3
tabela[1][1] = 4
```

---

## Fluxograma — Símbolos Essenciais

| Símbolo | Significado |
|---------|-------------|
| Oval | Início / Fim |
| Retângulo | Processo / Instrução |
| Losango | Decisão (SE/SENÃO) |
| Paralelogramo | Entrada / Saída de dados |
| Seta | Fluxo de execução |

---

## Boas Práticas de Lógica

- **Divida o problema** em partes menores antes de resolver
- **Nomeie bem** as variáveis — `idadeUsuario` é melhor que `x`
- **Evite repetição** — se um trecho aparece mais de uma vez, vire uma função
- **Teste com exemplos** — antes de codar, teste o algoritmo no papel
- **Pense no caso de erro** — o que acontece se o usuário digitar algo errado?

---

## Exemplo Completo — Algoritmo de Login

```
INÍCIO

escreva("Digite seu email: ")
leia(email)

escreva("Digite sua senha: ")
leia(senha)

SE (email == "admin@email.com" E senha == "123456") ENTÃO
    escreva("Login realizado com sucesso!")
SENÃO
    escreva("Email ou senha incorretos.")
FIM SE

FIM
```

---

> 💡 **Dica:** Dominar lógica de programação é mais importante do que decorar a sintaxe de uma linguagem. A lógica é sempre a mesma — só a escrita muda.