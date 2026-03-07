# 🗄️ SQL — Guia de Referência Rápida

> Resumo completo de SQL — do básico ao essencial para trabalhar com banco de dados relacional.

---

## O que é SQL?

**SQL** (Structured Query Language) é a linguagem usada para criar, manipular e consultar bancos de dados relacionais.

| Banco de Dados | Descrição |
|----------------|-----------|
| **MySQL** | Mais usado no mundo, gratuito |
| **PostgreSQL** | Robusto e completo, gratuito |
| **SQLite** | Leve, ideal para desenvolvimento |
| **SQL Server** | Microsoft, muito usado em empresas |

---

## Conceitos Fundamentais

| Conceito | Significado |
|----------|-------------|
| **Banco de dados** | Conjunto organizado de tabelas |
| **Tabela** | Estrutura que armazena dados em linhas e colunas |
| **Coluna** | Campo da tabela (ex: nome, email) |
| **Linha / Registro** | Um dado completo na tabela |
| **Chave primária (PK)** | Identifica unicamente cada registro |
| **Chave estrangeira (FK)** | Liga uma tabela a outra |

---

## Criando Banco e Tabelas — DDL

```sql
-- Criar banco de dados
CREATE DATABASE estoque;

-- Usar o banco
USE estoque;

-- Criar tabela
CREATE TABLE produtos (
    id         INT          PRIMARY KEY AUTO_INCREMENT,
    nome       VARCHAR(100) NOT NULL,
    preco      DECIMAL(10,2) NOT NULL,
    quantidade INT          DEFAULT 0,
    ativo      BOOLEAN      DEFAULT TRUE,
    criado_em  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela com chave estrangeira
CREATE TABLE movimentacoes (
    id         INT PRIMARY KEY AUTO_INCREMENT,
    produto_id INT NOT NULL,
    tipo       VARCHAR(10) NOT NULL,  -- "entrada" ou "saida"
    quantidade INT NOT NULL,
    data       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Deletar tabela
DROP TABLE produtos;

-- Alterar tabela — adicionar coluna
ALTER TABLE produtos ADD COLUMN descricao TEXT;

-- Alterar tabela — remover coluna
ALTER TABLE produtos DROP COLUMN descricao;
```

---

## Inserindo Dados — INSERT

```sql
-- Inserir um registro
INSERT INTO produtos (nome, preco, quantidade)
VALUES ("Herbicida X", 45.90, 100);

-- Inserir múltiplos registros
INSERT INTO produtos (nome, preco, quantidade) VALUES
    ("Ração Bovina", 89.90, 50),
    ("Vacina A", 12.50, 200),
    ("Adubo NPK", 35.00, 150);
```

---

## Consultando Dados — SELECT

```sql
-- Buscar todos os registros
SELECT * FROM produtos;

-- Buscar colunas específicas
SELECT nome, preco FROM produtos;

-- Buscar com condição
SELECT * FROM produtos WHERE ativo = TRUE;

-- Buscar com múltiplas condições
SELECT * FROM produtos WHERE preco > 30 AND quantidade > 0;

-- Buscar com OR
SELECT * FROM produtos WHERE nome = "Ração" OR preco < 20;

-- Buscar com LIKE (texto parcial)
SELECT * FROM produtos WHERE nome LIKE "%vacina%";
-- % = qualquer coisa antes ou depois

-- Ordenar resultados
SELECT * FROM produtos ORDER BY preco ASC;   -- crescente
SELECT * FROM produtos ORDER BY preco DESC;  -- decrescente

-- Limitar resultados
SELECT * FROM produtos LIMIT 10;

-- Buscar por ID
SELECT * FROM produtos WHERE id = 1;
```

---

## Atualizando Dados — UPDATE

```sql
-- Atualizar um registro
UPDATE produtos SET preco = 50.00 WHERE id = 1;

-- Atualizar múltiplos campos
UPDATE produtos
SET preco = 50.00, quantidade = 80
WHERE id = 1;

-- Atualizar com condição
UPDATE produtos SET ativo = FALSE WHERE quantidade = 0;
```

> ⚠️ **Sempre use WHERE no UPDATE** — sem ele todos os registros serão alterados.

---

## Deletando Dados — DELETE

```sql
-- Deletar um registro
DELETE FROM produtos WHERE id = 1;

-- Deletar com condição
DELETE FROM produtos WHERE ativo = FALSE;

-- Deletar todos os registros (cuidado!)
DELETE FROM produtos;
```

> ⚠️ **Sempre use WHERE no DELETE** — sem ele todos os registros serão removidos.

---

## Funções de Agregação

```sql
-- Contar registros
SELECT COUNT(*) FROM produtos;
SELECT COUNT(*) FROM produtos WHERE ativo = TRUE;

-- Soma
SELECT SUM(quantidade) FROM produtos;

-- Média
SELECT AVG(preco) FROM produtos;

-- Maior e menor valor
SELECT MAX(preco) FROM produtos;
SELECT MIN(preco) FROM produtos;

-- Agrupando resultados
SELECT tipo, COUNT(*) AS total
FROM movimentacoes
GROUP BY tipo;
```

---

## JOIN — Unindo Tabelas

```sql
-- INNER JOIN — retorna apenas registros que existem nas duas tabelas
SELECT p.nome, m.tipo, m.quantidade
FROM movimentacoes m
INNER JOIN produtos p ON m.produto_id = p.id;

-- LEFT JOIN — retorna todos da esquerda, mesmo sem correspondência
SELECT p.nome, m.tipo
FROM produtos p
LEFT JOIN movimentacoes m ON p.id = m.produto_id;
```

| Tipo | Retorna |
|------|---------|
| **INNER JOIN** | Apenas registros que combinam nas duas tabelas |
| **LEFT JOIN** | Todos da tabela da esquerda + os que combinam da direita |
| **RIGHT JOIN** | Todos da tabela da direita + os que combinam da esquerda |

---

## Tipos de Dados Comuns

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `INT` | Número inteiro | 1, 25, 100 |
| `DECIMAL(10,2)` | Número decimal | 99.90 |
| `VARCHAR(100)` | Texto de até 100 caracteres | "João" |
| `TEXT` | Texto longo | Descrição |
| `BOOLEAN` | Verdadeiro ou falso | TRUE, FALSE |
| `TIMESTAMP` | Data e hora | 2025-01-01 10:00:00 |
| `DATE` | Apenas data | 2025-01-01 |

---

## Constraints — Restrições

```sql
PRIMARY KEY   -- identificador único
NOT NULL      -- campo obrigatório
UNIQUE        -- valor único na tabela
DEFAULT valor -- valor padrão
AUTO_INCREMENT-- incrementa automaticamente (MySQL)
FOREIGN KEY   -- referencia outra tabela
```

---

## Boas Práticas

- Sempre use `WHERE` no `UPDATE` e `DELETE`
- Nomeie tabelas no plural e em minúsculo → `produtos`, `usuarios`
- Nomeie colunas em snake_case → `criado_em`, `produto_id`
- Use `PRIMARY KEY` em todas as tabelas
- Use `FOREIGN KEY` para manter integridade entre tabelas
- Nunca delete dados importantes — prefira um campo `ativo = FALSE`