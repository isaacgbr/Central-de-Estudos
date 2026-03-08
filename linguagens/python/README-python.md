# 🐍 Python — Guia de Referência Rápida

> Resumo introdutório sobre Python — uma das linguagens mais usadas no mundo.

---

## O que é Python?

Python é uma linguagem de programação simples, legível e poderosa. É muito usada em desenvolvimento web, ciência de dados, inteligência artificial e automação.

```
Código limpo + Fácil de aprender + Muito poderoso = Python
```

| | JavaScript | Java | Python |
|--|------------|------|--------|
| **Sintaxe** | Média | Verbosa | Simples |
| **Tipagem** | Dinâmica | Estática | Dinâmica |
| **Uso principal** | Web | Sistemas | IA, Data, Web |
| **Curva de aprendizado** | Média | Alta | Baixa |

---

## Instalação

```bash
# Verificar instalação
python --version

# Rodar um arquivo
python arquivo.py

# Abrir terminal interativo
python
```

Download: https://www.python.org/downloads

> ✅ Recomendado: Python 3.10 ou superior

---

## Variáveis e Tipos

```python
# Python infere o tipo automaticamente
nome      = "João"       # str — texto
idade     = 25           # int — inteiro
preco     = 19.99        # float — decimal
ativo     = True         # bool — verdadeiro/falso

# Constante — convenção em maiúsculo (não é obrigatório)
PI = 3.14159

# Verificar o tipo
print(type(nome))  # <class 'str'>

# Conversão de tipos
int("10")     # str → int
str(25)       # int → str
float("3.14") # str → float
```

---

## Strings

```python
nome = "João Silva"

# Métodos úteis
nome.upper()          # "JOÃO SILVA"
nome.lower()          # "joão silva"
nome.strip()          # remove espaços nas bordas
nome.replace("João", "Ana")  # "Ana Silva"
nome.split(" ")       # ["João", "Silva"]
len(nome)             # 10

# f-string — forma moderna de formatar texto
idade = 25
print(f"Olá, {nome}! Você tem {idade} anos.")
```

---

## Operadores

```python
# Aritméticos
a + b   # soma
a - b   # subtração
a * b   # multiplicação
a / b   # divisão (retorna float)
a // b  # divisão inteira
a % b   # resto
a ** b  # potência

# Comparação
a == b  # igual
a != b  # diferente
a > b   # maior
a < b   # menor

# Lógicos
and  # E
or   # OU
not  # NÃO
```

---

## Condicionais

```python
idade = 18

if idade >= 18:
    print("Maior de idade")
elif idade >= 16:
    print("Pode votar")
else:
    print("Menor de idade")

# Ternário
status = "Maior" if idade >= 18 else "Menor"
```

> ⚠️ Python usa **indentação** (espaços) para definir blocos — não usa chaves `{}`

---

## Loops

```python
# for — percorre uma sequência
for i in range(5):      # 0, 1, 2, 3, 4
    print(i)

# for em lista
nomes = ["Ana", "João", "Maria"]
for nome in nomes:
    print(nome)

# while
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# range(início, fim, passo)
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)
```

---

## Funções

```python
# Função básica
def somar(a, b):
    return a + b

resultado = somar(10, 5)  # 15

# Parâmetro com valor padrão
def saudar(nome, mensagem="Olá"):
    return f"{mensagem}, {nome}!"

saudar("Ana")           # "Olá, Ana!"
saudar("Ana", "Oi")     # "Oi, Ana!"

# Função com múltiplos retornos
def calcular(a, b):
    return a + b, a - b

soma, subtracao = calcular(10, 5)  # 15, 5
```

---

## Listas

```python
frutas = ["maçã", "banana", "uva"]

# Acessar
frutas[0]        # "maçã" — índice começa no 0
frutas[-1]       # "uva" — último elemento

# Modificar
frutas.append("pera")     # adiciona no final
frutas.remove("banana")   # remove pelo valor
frutas.pop()              # remove o último
frutas.insert(1, "kiwi")  # insere na posição

# Informações
len(frutas)       # tamanho
"maçã" in frutas  # True — verifica se existe

# Percorrer com índice
for i, fruta in enumerate(frutas):
    print(f"{i} → {fruta}")
```

---

## Dicionários

```python
# Dicionário — pares chave: valor (equivalente ao objeto JS)
pessoa = {
    "nome":  "Ana",
    "idade": 25,
    "ativo": True
}

# Acessar
pessoa["nome"]          # "Ana"
pessoa.get("email", "") # retorna "" se não existir

# Modificar
pessoa["idade"] = 26
pessoa["cidade"] = "SP"  # adiciona nova chave

# Remover
del pessoa["ativo"]

# Percorrer
for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")
```

---

## Classes — Orientação a Objetos

```python
class Produto:
    # Construtor
    def __init__(self, id, nome, preco):
        self.id    = id
        self.nome  = nome
        self.preco = preco
        self.ativo = True

    # Método de instância
    def apresentar(self):
        return f"Produto: {self.nome} — R${self.preco:.2f}"

    # Método estático
    @staticmethod
    def validar(nome, preco):
        return bool(nome and preco > 0)


# Herança
class ProdutoPerecivel(Produto):
    def __init__(self, id, nome, preco, validade):
        super().__init__(id, nome, preco)  # chama o construtor pai
        self.validade = validade


# Uso
p = Produto(1, "Ração Bovina", 89.90)
print(p.apresentar())  # Produto: Ração Bovina — R$89.90
```

---

## Tratamento de Erros

```python
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Erro: divisão por zero")
except Exception as e:
    print(f"Erro inesperado: {e}")
finally:
    print("Sempre executa")

# Lançar erro manualmente
def buscar(id):
    if id <= 0:
        raise ValueError("ID deve ser maior que zero")
```

---

## Módulos e Importações

```python
# Importar módulo inteiro
import math
math.sqrt(16)   # 4.0
math.pi         # 3.14159

# Importar função específica
from math import sqrt, pi

# Importar com apelido
import datetime as dt
dt.datetime.now()

# Instalar pacotes externos
# pip install nome-do-pacote
```

---

## Boas Práticas

- Use **snake_case** para variáveis e funções → `calcular_total()`
- Use **PascalCase** para classes → `ContaBancaria`
- Indentação com **4 espaços** — nunca misture com tabs
- Use **f-strings** para formatar texto — evite concatenação com `+`
- Funções devem fazer **uma coisa só**
- Use `get()` em dicionários para evitar erros de chave inexistente

---

> 💡 **Resumindo:** Python tem a mesma lógica de qualquer outra linguagem — a grande diferença é a sintaxe limpa e sem chaves. Se você já sabe JavaScript ou Java, vai aprender Python rapidamente.