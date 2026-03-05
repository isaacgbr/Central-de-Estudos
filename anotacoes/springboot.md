# ☕ Spring Boot – Guia Rápido (Anotações de Estudo)

## 📚 Objetivo

Aprender a criar uma **API simples em Java usando Spring Boot**, entendendo como um framework facilita o desenvolvimento backend.

---

# 🧠 Conceitos Importantes

### Java

Linguagem de programação muito usada em **sistemas corporativos e APIs backend**.

### Spring Boot

Framework que **simplifica a criação de aplicações Java**, principalmente APIs REST.

Ele resolve automaticamente:

* Configuração do servidor
* Rotas HTTP
* Serialização JSON
* Organização do projeto
* Dependências

---

# ⚙️ 1️⃣ Instalação do Java

Baixar **JDK (Java Development Kit)**.

Site recomendado:

https://adoptium.net

Escolher:

```
Temurin JDK
```

Após instalar, verificar no terminal:

```
java -version
javac -version
```

Se aparecer a versão, está funcionando.

---

# 🚀 2️⃣ Criando Projeto Spring Boot

Acesse:

```
https://start.spring.io
```

Configuração usada:

```
Project: Maven
Language: Java
Spring Boot: Última versão estável
Packaging: Jar
Java: 17 ou 21
```

Dependência obrigatória:

```
Spring Web
```

Depois clicar:

```
Generate
```

Descompactar o projeto e abrir no **VSCode**.

---

# 📁 Estrutura do Projeto

```
springboot-api
│
├─ src
│  ├─ main
│  │  ├─ java
│  │  │   └─ com/estudos/springbootapi
│  │  │        ├─ SpringbootApiApplication.java
│  │  │        └─ HelloController.java
│  │  └─ resources
│
├─ pom.xml
├─ mvnw
└─ mvnw.cmd
```

Arquivos importantes:

| Arquivo                  | Função                |
| ------------------------ | --------------------- |
| SpringbootApiApplication | Inicia o servidor     |
| HelloController          | Cria rotas da API     |
| pom.xml                  | Gerencia dependências |

---

# ▶️ 3️⃣ Executar o Servidor

Entrar na pasta do projeto:

```
cd java/springboot-api
```

Executar:

```
.\mvnw spring-boot:run
```

Se aparecer:

```
Tomcat started on port 8080
```

O servidor está rodando.

---

# 🌐 Testar API no Navegador

Exemplo de rota:

```
http://localhost:8080/hello
```

Resposta esperada:

```
{
 "message": "Hello World"
}
```

---

# 📌 Rotas Criadas na Aula

### Hello

```
/hello
```

Retorna:

```
Hello World
```

---

### Status

```
/status
```

Retorna:

```
{
 "status": "ok",
 "framework": "Spring Boot"
}
```

---

### Hora Atual

```
/time
```

Retorna a data e hora do servidor.

---

### Usuário

```
/user/{name}
```

Exemplo:

```
/user/Isaac
```

Retorna:

```
{
 "user": "Isaac"
}
```

---

# ⚡ Comandos Essenciais

### Compilar projeto

```
.\mvnw compile
```

### Rodar servidor

```
.\mvnw spring-boot:run
```

### Parar servidor

```
CTRL + C
```

---

# 🎯 Pontos Importantes para Aprender

Focar principalmente em:

* O que é **Controller**
* O que é **rota HTTP**
* Diferença entre **Java puro e Spring Boot**
* Como o framework **automatiza configurações**
* Como retornar **JSON automaticamente**

---

# 🧩 Comparação com Node.js

| Tecnologia  | Característica               |
| ----------- | ---------------------------- |
| Node puro   | Mais controle, mais código   |
| Express     | Facilita criação de API      |
| Java puro   | Muito código boilerplate     |
| Spring Boot | Estrutura pronta e produtiva |

---

# 🧠 O que aprendemos nesta aula

* Criar servidor HTTP
* Criar rotas REST
* Retornar JSON
* Usar um framework backend
* Entender produtividade com frameworks

---

# 🚀 Próximos Passos (Próximas Aulas)

Continuaremos evoluindo a API aprendendo:

* Estrutura profissional de projeto
* Services
* Controllers
* Conexão com banco de dados
* CRUD completo
* Boas práticas de backend

---

✍️ Autor: Isaac Gabriel
📅 Projeto: Central de Estudos Backend
🎓 Disciplina: Frameworks Backend
