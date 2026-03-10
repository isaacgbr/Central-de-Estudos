# 🔒 CORS — Guia de Referência Rápida

> Resumo sobre CORS — como permitir que o frontend acesse o backend.

---

## O que é CORS?

CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança do navegador que **bloqueia requisições entre origens diferentes** por padrão.

```
Frontend: http://localhost:5173  ← origem A
Backend:  http://localhost:3000  ← origem B

Sem CORS configurado → navegador bloqueia a requisição ❌
Com CORS configurado → navegador permite a requisição ✅
```

> ⚠️ CORS só afeta o **navegador** — ferramentas como Thunder Client e Postman não são bloqueadas.

---

## Instalação no Node.js/Express

```bash
npm install cors
```

---

## Configuração Básica

```javascript
const express = require("express");
const cors    = require("cors");
const app     = express();

// Permite requisições de qualquer origem — use só em desenvolvimento
app.use(cors());
```

---

## Configuração por Origem — Recomendado

```javascript
const corsOpcoes = {
  // Permite apenas o frontend em desenvolvimento
  origin: "http://localhost:5173",

  // Métodos HTTP permitidos
  methods: ["GET", "POST", "PUT", "DELETE"],

  // Headers permitidos
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOpcoes));
```

---

## Configuração para Produção

```javascript
// Lista de origens permitidas
const origensPermitidas = [
  "http://localhost:5173",          // desenvolvimento
  "https://meu-site.vercel.app",    // produção
];

app.use(cors({
  origin: (origin, callback) => {
    // Permite requisições sem origem (Postman, Thunder Client)
    if (!origin || origensPermitidas.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Bloqueado pelo CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
```

---

## Posição no server.js

```javascript
const express = require("express");
const cors    = require("cors");
const app     = express();

// CORS deve vir ANTES das rotas
app.use(cors());
app.use(express.json());

// Rotas
app.use("/produtos", produtoRoutes);
```

> ⚠️ Sempre configure o CORS **antes** das rotas — caso contrário não funcionará.

---

## Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `blocked by CORS policy` | CORS não configurado | Instalar e configurar o pacote cors |
| `CORS error` mesmo com cors() | cors() depois das rotas | Mover cors() para antes das rotas |
| Funciona no Postman mas não no navegador | Normal — CORS só afeta navegador | Configurar cors() no Express |

---

## Boas Práticas

- Nunca use `cors()` sem restrições em produção
- Sempre especifique as origens permitidas em produção
- Use variáveis de ambiente para as URLs de origem
- Coloque o `cors()` antes de qualquer rota no `server.js`

```javascript
// Usando variável de ambiente para a origem
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
```

---

> 💡 **Resumindo:** CORS é o que permite seu frontend React/Angular consumir sua API Node.js sem ser bloqueado pelo navegador. Configure antes das rotas e restrinja as origens em produção.