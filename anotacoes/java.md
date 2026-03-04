# ☕ Java Backend — Resumo Prático

## 📌 O que é Java no Backend?

Java é uma linguagem compilada usada para construir aplicações backend.
Diferente do Node.js, ela precisa ser compilada antes de executar.

Fluxo:

Compilar → Executar → Testar no navegador

---

# 🛠 Instalação do Java (Windows)

## 1️⃣ Baixar

Acesse:
https://adoptium.net

Escolher:
- Latest LTS
- Temurin
- Windows x64
- Baixar arquivo .msi

Instalar normalmente.

---

## 2️⃣ Verificar instalação

Abrir novo terminal:

```bash
java -version
javac -version
```

Se aparecer a versão → OK ✅

---

## 3️⃣ Caso `javac` não seja reconhecido

Adicionar ao PATH:

Caminho padrão:
C:\Program Files\Eclipse Adoptium\jdk-17.x.x\bin

Passos:
- Windows + R
- sysdm.cpl
- Aba Avançado
- Variáveis de Ambiente
- Editar PATH
- Novo → Colar caminho da pasta bin

Reabrir terminal.

---

# 🚀 Criando Servidor Java Puro

## 📂 Estrutura

```
java/
 └── puro/
     └── SimpleServer.java
```

---

## 🧠 Compilar

Dentro da pasta:

```bash
javac SimpleServer.java
```

Isso gera:

```
SimpleServer.class
```

---

## ▶ Executar

```bash
java SimpleServer
```

Servidor roda na porta 8080.

---

## 🌐 Testar

```
http://localhost:8080/hello
http://localhost:8080/status
```

---

# 🔎 Diferença para Node

Node:
```
node server.js
```

Java:
```
javac arquivo.java
java NomeDaClasse
```

Java é compilado.
Node é interpretado.

---

# 🎯 Conclusão

Java Puro:
- Muito código manual
- JSON é String
- Controle total
- Pouca produtividade

Serve para entender a base antes de usar frameworks como Spring Boot.