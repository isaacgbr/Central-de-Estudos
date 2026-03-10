# ⚡ Vite — Guia de Referência Rápida

> Resumo introdutório sobre Vite — ferramenta moderna de build e servidor de desenvolvimento.

---

## O que é Vite?

Vite é uma ferramenta de **build e desenvolvimento** para projetos frontend. É mais rápido que alternativas antigas como Create React App (CRA) porque usa o sistema de módulos nativo do navegador.

```
Vite = Servidor de desenvolvimento ultrarrápido + Build otimizado para produção
```

| | Create React App | Vite |
|--|-----------------|------|
| **Velocidade** | Lenta | Muito rápida |
| **Configuração** | Automática | Simples e flexível |
| **Build** | Webpack | Rollup |
| **Suporte** | React | React, Vue, Angular, JS puro |
| **Status** | Legado | Recomendado atualmente |

---

## Instalação e Configuração

```bash
# Criar projeto com React
npm create vite@latest meu-projeto -- --template react

# Criar projeto com Vue
npm create vite@latest meu-projeto -- --template vue

# Criar projeto com JavaScript puro
npm create vite@latest meu-projeto -- --template vanilla

# Criar projeto com TypeScript
npm create vite@latest meu-projeto -- --template react-ts

# Entrar na pasta
cd meu-projeto

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

> ✅ Acesse em: http://localhost:5173

---

## Estrutura de Pastas

```
meu-projeto/
├── public/           ← arquivos estáticos (favicon, imagens)
├── src/
│   ├── assets/       ← imagens e arquivos do projeto
│   ├── components/   ← componentes reutilizáveis
│   ├── App.jsx       ← componente raiz
│   ├── App.css       ← estilo do componente raiz
│   ├── main.jsx      ← ponto de entrada da aplicação
│   └── index.css     ← estilo global
├── index.html        ← HTML principal
├── vite.config.js    ← configurações do Vite
└── package.json
```

---

## Scripts do package.json

```json
{
  "scripts": {
    "dev":     "vite",          // inicia o servidor de desenvolvimento
    "build":   "vite build",    // gera os arquivos para produção
    "preview": "vite preview"   // visualiza o build de produção localmente
  }
}
```

```bash
npm run dev      # desenvolvimento
npm run build    # gerar build de produção
npm run preview  # visualizar build localmente
```

---

## vite.config.js — Configurações Essenciais

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // plugin do React

  // Configuração do servidor de desenvolvimento
  server: {
    port: 3000,   // muda a porta padrão (5173)
    open: true,   // abre o navegador automaticamente
  },

  // Proxy — redireciona chamadas da API para evitar CORS em desenvolvimento
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // redireciona /api para o backend
    }
  }
});
```

---

## Variáveis de Ambiente

```bash
# Arquivo .env na raiz do projeto
# Variáveis DEVEM começar com VITE_ para serem acessíveis no frontend
VITE_API_URL=http://localhost:3000
VITE_NOME_APP=Gestão Rural
```

```javascript
// Acessando no código
const apiUrl  = import.meta.env.VITE_API_URL;
const nomeApp = import.meta.env.VITE_NOME_APP;
```

> ⚠️ Nunca coloque senhas ou chaves secretas no `.env` do frontend — tudo fica visível no navegador.

---

## Importando Arquivos

```javascript
// CSS
import './App.css';

// Imagem
import logo from './assets/logo.png';
<img src={logo} alt="Logo" />

// JSON
import dados from './dados.json';

// Componente
import Botao from './components/Botao';
```

---

## Build de Produção

```bash
# Gera os arquivos otimizados na pasta /dist
npm run build
```

```
dist/
├── index.html
├── assets/
│   ├── index-abc123.js   ← JavaScript minificado
│   └── index-abc123.css  ← CSS minificado
```

> A pasta `dist/` é o que você sobe para o servidor de produção (Railway, Vercel, Netlify etc.)

---

## Boas Práticas

- Use sempre **Vite** em vez de Create React App em projetos novos
- Prefixe todas as variáveis de ambiente com `VITE_`
- Nunca suba a pasta `dist/` para o GitHub — adicione ao `.gitignore`
- Use o proxy do Vite em desenvolvimento para evitar problemas de CORS com a API
- Use `npm run preview` para testar o build antes de fazer o deploy

---

> 💡 **Resumindo:** Vite substituiu o Create React App como padrão do mercado. É mais rápido, mais simples e funciona com React, Vue e JavaScript puro. Se vai criar um projeto frontend, comece sempre com Vite.