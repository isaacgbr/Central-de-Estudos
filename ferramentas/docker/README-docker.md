# 🐳 Docker — Guia de Referência Rápida

> Resumo introdutório sobre Docker — ferramenta de containerização de aplicações.

---

## O que é Docker?

Docker é uma ferramenta que empacota sua aplicação e tudo que ela precisa para rodar — código, dependências, configurações — dentro de um **container**. Esse container roda igual em qualquer máquina.

```
Problema sem Docker: "Na minha máquina funciona!"
Solução com Docker: Roda igual em qualquer lugar.
```

| Conceito | Significado |
|----------|-------------|
| **Container** | Ambiente isolado onde a aplicação roda |
| **Imagem** | Modelo para criar containers |
| **Dockerfile** | Arquivo com instruções para criar a imagem |
| **Docker Hub** | Repositório público de imagens prontas |
| **docker-compose** | Ferramenta para rodar múltiplos containers |

---

## Instalação

Download: https://www.docker.com/products/docker-desktop

```bash
# Verificar instalação
docker --version
docker-compose --version
```

---

## Comandos Essenciais

```bash
# Imagens
docker pull node:18          # baixar imagem do Docker Hub
docker images                # listar imagens baixadas
docker rmi nome-da-imagem    # remover imagem

# Containers
docker ps                    # listar containers rodando
docker ps -a                 # listar todos (incluindo parados)
docker stop nome             # parar container
docker start nome            # iniciar container parado
docker rm nome               # remover container
docker logs nome             # ver logs do container

# Executar container
docker run -d \              # -d = roda em background
  -p 3000:3000 \             # -p = porta local:porta container
  --name meu-app \           # nome do container
  nome-da-imagem             # imagem a usar
```

---

## Dockerfile — Criando uma Imagem

```dockerfile
# Imagem base — Node.js versão 18
FROM node:18

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (cache)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Porta que o container vai expor
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
```

```bash
# Criar imagem a partir do Dockerfile
docker build -t meu-app .

# Rodar a imagem criada
docker run -p 3000:3000 meu-app
```

---

## .dockerignore

```
# Assim como o .gitignore, evita copiar arquivos desnecessários
node_modules/
.env
.git
*.log
```

---

## docker-compose — Múltiplos Containers

Usado quando a aplicação precisa de mais de um serviço — por exemplo, backend + banco de dados.

```yaml
# docker-compose.yml
version: "3"

services:
  # Container da aplicação Node.js
  app:
    build: .                   # usa o Dockerfile da pasta atual
    ports:
      - "3000:3000"            # porta local:porta container
    environment:
      - DB_HOST=db             # variável de ambiente
      - DB_PORT=3306
    depends_on:
      - db                     # aguarda o banco subir antes

  # Container do banco de dados MySQL
  db:
    image: mysql:8             # imagem pronta do Docker Hub
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=senha
      - MYSQL_DATABASE=estoque
    volumes:
      - dados_mysql:/var/lib/mysql  # persiste os dados

volumes:
  dados_mysql:
```

```bash
# Subir todos os containers
docker-compose up -d

# Parar todos os containers
docker-compose down

# Ver logs de todos os containers
docker-compose logs
```

---

## Fluxo Completo

```
1. Escrever o Dockerfile
2. Criar o .dockerignore
3. docker build -t meu-app .    → cria a imagem
4. docker run -p 3000:3000 meu-app → roda o container
```

```
Com docker-compose:
1. Escrever o docker-compose.yml
2. docker-compose up -d          → sobe tudo de uma vez
```

---

## Boas Práticas

- Sempre crie um `.dockerignore` — nunca copie `node_modules`
- Copie o `package.json` antes do código — aproveita o cache do Docker
- Use `docker-compose` quando tiver banco de dados junto
- Use imagens oficiais do Docker Hub — `node`, `mysql`, `postgres`
- Nunca coloque senhas no `Dockerfile` — use variáveis de ambiente

---

> 💡 **Resumindo:** Docker resolve o problema de "funciona na minha máquina". Com ele, qualquer pessoa da equipe sobe o projeto com um único comando — `docker-compose up` — sem precisar instalar Node, MySQL ou qualquer dependência manualmente.