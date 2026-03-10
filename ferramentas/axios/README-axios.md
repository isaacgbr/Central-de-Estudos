# 🌐 Axios — Guia de Referência Rápida

> Resumo sobre Axios — biblioteca para fazer requisições HTTP no frontend.

---

## O que é Axios?

Axios é uma biblioteca JavaScript para fazer **requisições HTTP**. É a alternativa mais popular ao `fetch` nativo — mais simples, com tratamento de erros automático e suporte a interceptors.

```
fetch  → nativo do navegador, mais verboso
Axios  → biblioteca externa, mais simples e completo
```

| | fetch | Axios |
|--|-------|-------|
| **Instalação** | Nativo | npm install axios |
| **JSON automático** | Precisa de `.json()` | Automático |
| **Erro em 404/500** | Não lança erro | Lança erro automaticamente |
| **Interceptors** | Não tem | ✅ |
| **Cancelamento** | Complexo | Simples |

---

## Instalação

```bash
# Em projetos React/Vue com Vite
npm install axios
```

---

## Requisições Básicas

```javascript
import axios from 'axios';

// GET — buscar dados
const response = await axios.get('http://localhost:3000/produtos');
console.log(response.data); // dados retornados

// POST — criar registro
const response = await axios.post('http://localhost:3000/produtos', {
  nome:       'Ração Bovina',
  preco:      89.90,
  quantidade: 50
});

// PUT — atualizar registro
const response = await axios.put('http://localhost:3000/produtos/1', {
  preco: 95.00
});

// DELETE — remover registro
const response = await axios.delete('http://localhost:3000/produtos/1');
```

---

## Com Async/Await e Tratamento de Erros

```javascript
import axios from 'axios';

const buscarProdutos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/produtos');
    return response.data;
  } catch (erro) {
    // Erro da API (404, 500 etc.)
    if (erro.response) {
      console.error('Erro da API:', erro.response.status);
      console.error('Mensagem:', erro.response.data.mensagem);
    } else {
      // Erro de rede (sem conexão)
      console.error('Erro de rede:', erro.message);
    }
  }
};
```

---

## Instância — Configuração Centralizada

Crie uma instância com a URL base para não repetir em toda requisição.

```javascript
// src/services/api.js
import axios from 'axios';

// Instância com configurações padrão
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
```

```javascript
// Usando a instância — URL base já configurada
import api from './services/api';

const produtos  = await api.get('/produtos');
const produto   = await api.get('/produtos/1');
const criado    = await api.post('/produtos', dados);
const atualizado = await api.put('/produtos/1', dados);
const deletado  = await api.delete('/produtos/1');
```

---

## Enviando Token JWT

```javascript
// Manualmente em cada requisição
const response = await api.get('/produtos', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// Automaticamente via interceptor — recomendado
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

## Interceptors — Executar Antes de Toda Requisição/Resposta

```javascript
// Interceptor de requisição — executa antes de enviar
api.interceptors.request.use((config) => {
  // Adiciona token automaticamente
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Interceptor de resposta — executa ao receber
api.interceptors.response.use(
  (response) => response, // sucesso — retorna normalmente

  (erro) => {
    // Token expirado — redireciona para login
    if (erro.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(erro);
  }
);
```

---

## Exemplo Completo — Service de Produto

```javascript
// src/services/produtoService.js
import api from './api';

const ProdutoService = {
  listarTodos: async () => {
    const response = await api.get('/produtos');
    return response.data;
  },

  buscarPorId: async (id) => {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
  },

  criar: async (dados) => {
    const response = await api.post('/produtos', dados);
    return response.data;
  },

  atualizar: async (id, dados) => {
    const response = await api.put(`/produtos/${id}`, dados);
    return response.data;
  },

  deletar: async (id) => {
    await api.delete(`/produtos/${id}`);
  }
};

export default ProdutoService;
```

---

## Boas Práticas

- Crie sempre uma **instância** com `axios.create()` — evita repetir a URL base
- Use **interceptors** para adicionar o token automaticamente
- Separe as chamadas em arquivos de **service** — não chame axios direto nos componentes
- Sempre use `try/catch` para tratar erros
- Use variável de ambiente para a URL base → `VITE_API_URL`

---

> 💡 **Resumindo:** Axios é o padrão do mercado para consumir APIs no frontend. Crie uma instância centralizada, use interceptors para o token JWT e separe as chamadas em services — o mesmo padrão que você já usa no backend.