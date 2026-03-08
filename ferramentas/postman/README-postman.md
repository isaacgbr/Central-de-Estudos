# 📮 Postman — Guia de Referência Rápida

> Resumo introdutório sobre Postman — ferramenta para testar APIs REST.

---

## O que é Postman?

Postman é uma ferramenta que permite **testar APIs** sem precisar de um frontend. Você envia requisições HTTP e visualiza as respostas — ideal para testar e documentar sua API durante o desenvolvimento.

> Se você já usa o **Thunder Client** no VS Code, o Postman é a versão completa e profissional dele.

---

## Instalação

Download: https://www.postman.com/downloads

> Também disponível como extensão no VS Code e versão web em https://web.postman.co

---

## Interface Principal

| Área | Função |
|------|--------|
| **Collections** | Agrupa requisições organizadas por projeto |
| **Request** | Onde você monta e envia a requisição |
| **Response** | Onde aparece a resposta da API |
| **Environment** | Variáveis de ambiente (URL base, token etc.) |

---

## Fazendo uma Requisição

```
1. Selecione o método HTTP (GET, POST, PUT, DELETE)
2. Digite a URL (ex: http://localhost:3000/produtos)
3. Configure os dados necessários (body, headers, params)
4. Clique em Send
```

---

## Métodos HTTP no Postman

### GET — Buscar dados
```
Método: GET
URL:    http://localhost:3000/produtos
```

### POST — Criar registro
```
Método:  POST
URL:     http://localhost:3000/produtos
Headers: Content-Type: application/json
Body (raw JSON):
{
  "nome": "Herbicida X",
  "preco": 45.90,
  "quantidade": 100
}
```

### PUT — Atualizar registro
```
Método:  PUT
URL:     http://localhost:3000/produtos/1
Headers: Content-Type: application/json
Body (raw JSON):
{
  "preco": 50.00
}
```

### DELETE — Remover registro
```
Método: DELETE
URL:    http://localhost:3000/produtos/1
```

---

## Enviando Token JWT

```
Headers:
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

No Postman:
```
1. Abra a aba "Authorization"
2. Selecione o tipo "Bearer Token"
3. Cole o token no campo
```

---

## Variáveis de Ambiente

Evita repetir a URL base em todas as requisições.

```
1. Clique em "Environments" → "New Environment"
2. Adicione as variáveis:
   base_url = http://localhost:3000
   token    = seu_token_aqui

3. Use nas requisições com {{variavel}}:
   URL: {{base_url}}/produtos
   Authorization: Bearer {{token}}
```

---

## Collections — Organizando as Requisições

```
Collection: Sistema de Estoque
├── Auth
│   └── POST /auth/login
├── Produtos
│   ├── GET    /produtos
│   ├── GET    /produtos/:id
│   ├── POST   /produtos
│   ├── PUT    /produtos/:id
│   └── DELETE /produtos/:id
├── Categorias
│   ├── GET    /categorias
│   └── POST   /categorias
└── Usuarios
    ├── GET    /usuarios
    └── POST   /usuarios
```

---

## Boas Práticas

- Crie uma **Collection** por projeto
- Use **Environments** para separar desenvolvimento e produção
- Salve todas as requisições na Collection — facilita o trabalho em equipe
- Nomeie as requisições de forma clara → `Listar Produtos`, `Criar Produto`
- Exporte a Collection e suba no repositório — serve como documentação da API

---

## Exportando a Collection

```
1. Clique com botão direito na Collection
2. Export → Collection v2.1
3. Salve o arquivo .json no repositório
```

> 💡 **Dica:** Uma Collection exportada no repositório funciona como documentação viva da API — qualquer pessoa da equipe importa e já tem todos os endpoints prontos para testar.