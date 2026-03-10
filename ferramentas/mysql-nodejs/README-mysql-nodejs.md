# 🐬 MySQL + Node.js — Guia de Referência Rápida

> Resumo sobre como integrar o MySQL ao backend Node.js/Express.

---

## O que é mysql2?

`mysql2` é o pacote Node.js para conectar e executar queries no banco de dados MySQL. É a evolução do pacote `mysql` — mais rápido e com suporte a Promises e async/await.

---

## Instalação

```bash
npm install mysql2
npm install dotenv  # para variáveis de ambiente
```

---

## Variáveis de Ambiente — .env

```bash
# .env
DB_HOST     = localhost
DB_PORT     = 3306
DB_USER     = root
DB_PASSWORD = sua_senha
DB_NAME     = estoque
```

---

## Configurando a Conexão — db.js

```javascript
// config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// Pool de conexões — reutiliza conexões abertas (mais eficiente)
const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // máximo de conexões simultâneas
});

module.exports = pool;
```

---

## Testando a Conexão

```javascript
// Adicione no server.js para verificar se o banco conectou
const pool = require('./config/db');

const testarConexao = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Banco de dados conectado!');
    connection.release(); // devolve a conexão ao pool
  } catch (erro) {
    console.error('❌ Erro ao conectar ao banco:', erro.message);
  }
};

testarConexao();
```

---

## Executando Queries — SELECT

```javascript
const pool = require('../config/db');

// Buscar todos os registros
const listarProdutos = async () => {
  const [rows] = await pool.query('SELECT * FROM produtos');
  return rows;
};

// Buscar por ID — sempre use prepared statements (?)
const buscarPorId = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM produtos WHERE id = ?',
    [id] // parâmetros passados separados — evita SQL Injection
  );
  return rows[0]; // retorna o primeiro resultado
};

// Buscar com condição
const listarAtivos = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM produtos WHERE ativo = ? ORDER BY nome',
    [true]
  );
  return rows;
};
```

---

## INSERT, UPDATE e DELETE

```javascript
// Inserir registro
const criar = async ({ nome, preco, quantidade, categoriaId }) => {
  const [result] = await pool.query(
    'INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES (?, ?, ?, ?)',
    [nome, preco, quantidade, categoriaId]
  );
  return result.insertId; // retorna o ID do registro criado
};

// Atualizar registro
const atualizar = async (id, { nome, preco }) => {
  const [result] = await pool.query(
    'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?',
    [nome, preco, id]
  );
  return result.affectedRows; // retorna quantas linhas foram afetadas
};

// Deletar registro
const deletar = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM produtos WHERE id = ?',
    [id]
  );
  return result.affectedRows;
};
```

---

## Integrando ao Service Existente

```javascript
// services/produtoService.js — substituindo o array em memória pelo banco
const pool = require('../config/db');
const Produto = require('../models/produto');

class ProdutoService {

  async listarTodos() {
    const [rows] = await pool.query('SELECT * FROM produtos WHERE ativo = 1');
    return rows;
  }

  async buscarPorId(id) {
    const [rows] = await pool.query(
      'SELECT * FROM produtos WHERE id = ?', [id]
    );
    return rows[0] || null;
  }

  async criar({ nome, preco, quantidade, categoriaId, fornecedorId }) {
    const [result] = await pool.query(
      `INSERT INTO produtos (nome, preco, quantidade, categoria_id, fornecedor_id)
       VALUES (?, ?, ?, ?, ?)`,
      [nome, preco, quantidade, categoriaId, fornecedorId]
    );
    return this.buscarPorId(result.insertId);
  }

  async atualizar(id, { nome, preco, quantidade }) {
    await pool.query(
      'UPDATE produtos SET nome = ?, preco = ?, quantidade = ? WHERE id = ?',
      [nome ?? null, preco ?? null, quantidade ?? null, id]
    );
    return this.buscarPorId(id);
  }

  async deletar(id) {
    const [result] = await pool.query(
      'DELETE FROM produtos WHERE id = ?', [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = new ProdutoService();
```

---

## JOIN — Buscando Dados Relacionados

```javascript
// Busca produto com nome da categoria e do fornecedor
const listarComRelacionamentos = async () => {
  const [rows] = await pool.query(`
    SELECT
      p.id,
      p.nome,
      p.preco,
      p.quantidade,
      c.nome AS categoria,
      f.nome AS fornecedor
    FROM produtos p
    INNER JOIN categorias  c ON p.categoria_id  = c.id
    INNER JOIN fornecedores f ON p.fornecedor_id = f.id
    WHERE p.ativo = 1
  `);
  return rows;
};
```

---

## Tratamento de Erros

```javascript
const buscarProduto = async (req, res) => {
  try {
    const produto = await ProdutoService.buscarPorId(req.params.id);
    if (!produto) return res.status(404).json({ mensagem: 'Não encontrado' });
    res.status(200).json(produto);
  } catch (erro) {
    console.error('Erro no banco:', erro.message);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};
```

---

## Ordem de Migração — Arrays para Banco

```
1. Criar o banco e tabelas no MySQL
2. Instalar mysql2 e dotenv
3. Criar config/db.js com o pool
4. Atualizar cada Service — substituir o array pelo pool
5. Adicionar async/await em todos os métodos
6. Atualizar os Controllers — adicionar try/catch
7. Testar todas as rotas no Thunder Client
```

---

## Boas Práticas

- Sempre use **prepared statements** com `?` — nunca concatene valores na query
- Use **pool** em vez de conexão única — mais eficiente
- Nunca coloque credenciais no código — use sempre `.env`
- Adicione `try/catch` em todos os métodos que acessam o banco
- Use `connection.release()` após operações manuais com `getConnection()`

---

> 💡 **Resumindo:** Migrar do array em memória para o MySQL é simples — só substitui o array pelo `pool.query()` em cada Service. O Controller e as Routes não precisam mudar.