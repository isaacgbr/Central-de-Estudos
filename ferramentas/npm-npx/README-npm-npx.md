# 📦 npm & npx — Guia de Referência Rápida

> Resumo sobre npm e npx — gerenciadores de pacotes do Node.js.

---

## O que é npm?

**npm** (Node Package Manager) é o gerenciador de pacotes do Node.js. Permite instalar, atualizar e remover bibliotecas externas no seu projeto.

## O que é npx?

**npx** executa pacotes sem precisar instalá-los permanentemente — útil para rodar ferramentas pontuais.

```
npm  → instala e gerencia pacotes
npx  → executa pacotes sem instalar
```

---

## Comandos Essenciais — npm

```bash
# Iniciar projeto (cria o package.json)
npm init        # passo a passo
npm init -y     # aceita tudo automaticamente

# Instalar pacotes
npm install express          # instala e salva em dependencies
npm install -D nodemon       # instala em devDependencies
npm install -g typescript    # instala globalmente na máquina

# Instalar todas as dependências do projeto
npm install      # lê o package.json e instala tudo

# Remover pacote
npm uninstall express

# Atualizar pacote
npm update express

# Listar pacotes instalados
npm list
npm list --depth=0   # apenas o nível principal

# Ver informações de um pacote
npm info express

# Rodar scripts do package.json
npm run dev
npm run build
npm start
```

---

## Comandos Essenciais — npx

```bash
# Criar projeto React com Vite (sem instalar o Vite)
npm create vite@latest meu-projeto

# Criar projeto Node.js/Express
npx express-generator meu-projeto

# Rodar TypeScript sem compilar
npx ts-node arquivo.ts

# Verificar pacotes desatualizados
npx npm-check-updates
```

---

## package.json — Estrutura

```json
{
  "name": "sistema-controle-estoque",
  "version": "1.0.0",
  "description": "Sistema de controle de estoque",
  "main": "server.js",

  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "build": "tsc"
  },

  "dependencies": {
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.3"
  },

  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

| Campo | Significado |
|-------|-------------|
| `dependencies` | Pacotes necessários em produção |
| `devDependencies` | Pacotes só para desenvolvimento |
| `scripts` | Atalhos de comandos |
| `version` | Versão do projeto |

---

## package-lock.json

```
→ Gerado automaticamente pelo npm
→ Trava as versões exatas de todos os pacotes
→ NUNCA edite manualmente
→ SEMPRE suba para o GitHub — garante que todos usem as mesmas versões
```

---

## node_modules

```
→ Pasta criada pelo npm install
→ Contém todos os pacotes instalados
→ NUNCA suba para o GitHub — adicione ao .gitignore
→ Recrie com: npm install
```

---

## Versionamento Semântico

```
"express": "^4.18.2"
            │ │  │
            │ │  └─ patch — correções de bug
            │ └──── minor — novas funcionalidades
            └────── major — mudanças que quebram compatibilidade

^ → aceita atualizações minor e patch
~ → aceita apenas atualizações patch
```

---

## Boas Práticas

- Use `npm install -D` para pacotes só de desenvolvimento
- Sempre suba o `package-lock.json` para o GitHub
- Nunca suba `node_modules` — adicione ao `.gitignore`
- Use `npm run dev` com `--watch` para reinício automático em desenvolvimento
- Documente os scripts disponíveis no README do projeto

---

> 💡 **Resumindo:** npm é o coração do Node.js — você já usa no dia a dia. Entender o `package.json` e a diferença entre `dependencies` e `devDependencies` já resolve a maioria das dúvidas.