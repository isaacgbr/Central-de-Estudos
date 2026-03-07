# 🔷 TypeScript — Guia de Referência Rápida

> Resumo completo de TypeScript — a evolução tipada do JavaScript.

---

## O que é TypeScript?

TypeScript é um **superset do JavaScript** criado pela Microsoft. Todo código JavaScript válido é também TypeScript válido — a diferença é que o TypeScript adiciona **tipagem estática** ao JavaScript.

```
JavaScript + Tipagem + Recursos extras = TypeScript
```

| | JavaScript | TypeScript |
|--|------------|------------|
| **Tipagem** | Dinâmica (define em tempo de execução) | Estática (define em tempo de desenvolvimento) |
| **Erros** | Aparecem em tempo de execução | Aparecem antes de rodar o código |
| **Compilação** | Não precisa | Compila para JavaScript |
| **Uso** | Frontend e Backend | Frontend e Backend |

---

## Instalação e Configuração

```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Verificar instalação
tsc --version

# Iniciar projeto TypeScript
tsc --init  # gera o tsconfig.json

# Compilar arquivo .ts para .js
tsc arquivo.ts

# Compilar e observar mudanças automaticamente
tsc --watch

# Usar com Node.js sem compilar (desenvolvimento)
npm install -D ts-node
npx ts-node arquivo.ts
```

---

## Tipagem Básica

```typescript
// Tipos primitivos
let nome:     string  = "João";
let idade:    number  = 25;
let ativo:    boolean = true;
let nulo:     null    = null;
let indefinido: undefined = undefined;

// TypeScript infere o tipo automaticamente
let cidade = "São Paulo"; // inferido como string
cidade = 123;             // ❌ erro — esperava string

// Any — desativa a tipagem (evite usar)
let qualquerCoisa: any = "texto";
qualquerCoisa = 123; // ✅ permitido, mas perde as vantagens do TS
```

---

## Arrays e Tuplas

```typescript
// Array tipado
let numeros:  number[] = [1, 2, 3];
let nomes:    string[] = ["Ana", "João"];

// Forma alternativa
let valores: Array<number> = [1, 2, 3];

// Tupla — array com tipos fixos por posição
let pessoa: [string, number] = ["Ana", 25];
pessoa[0] // string
pessoa[1] // number
```

---

## Type e Interface

```typescript
// Type — define a estrutura de um objeto
type Produto = {
  id:         number;
  nome:       string;
  preco:      number;
  quantidade: number;
  ativo?:     boolean; // ? = opcional
};

// Interface — similar ao type, mais usada em OO
interface Usuario {
  id:    number;
  nome:  string;
  email: string;
  role?: string; // ? = opcional
}

// Usando o tipo
const produto: Produto = {
  id: 1,
  nome: "Herbicida X",
  preco: 45.90,
  quantidade: 100,
};
```

| | Type | Interface |
|--|------|-----------|
| **Objetos** | ✅ | ✅ |
| **Primitivos** | ✅ | ❌ |
| **Extensão** | via `&` | via `extends` |
| **Recomendado para** | Tipos gerais | Classes e OO |

---

## Funções Tipadas

```typescript
// Parâmetros e retorno tipados
function somar(a: number, b: number): number {
  return a + b;
}

// Arrow function tipada
const saudar = (nome: string): string => {
  return `Olá, ${nome}!`;
};

// Parâmetro opcional
const apresentar = (nome: string, idade?: number): string => {
  return idade ? `${nome}, ${idade} anos` : nome;
};

// Parâmetro com valor padrão
const criar = (nome: string, ativo: boolean = true) => {
  return { nome, ativo };
};

// Retorno void — função sem retorno
const logar = (mensagem: string): void => {
  console.log(mensagem);
};
```

---

## Union Types e Type Guards

```typescript
// Union — aceita mais de um tipo
let id: number | string;
id = 1;      // ✅
id = "abc";  // ✅
id = true;   // ❌

// Type Guard — verifica o tipo antes de usar
const exibir = (valor: number | string): void => {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // string
  } else {
    console.log(valor.toFixed(2));    // number
  }
};
```

---

## Enum

```typescript
// Enum — conjunto de valores nomeados
enum Role {
  ADMIN = "admin",
  USER  = "user",
  GUEST = "guest",
}

const usuario = {
  nome: "Ana",
  role: Role.ADMIN,
};

if (usuario.role === Role.ADMIN) {
  console.log("Acesso total");
}
```

---

## Classes com TypeScript

```typescript
class Produto {
  // Tipagem dos atributos
  id:         number;
  nome:       string;
  preco:      number;
  private quantidade: number; // private — só acessa dentro da classe

  constructor(id: number, nome: string, preco: number, quantidade: number) {
    this.id         = id;
    this.nome       = nome;
    this.preco      = preco;
    this.quantidade = quantidade;
  }

  // Método tipado
  getQuantidade(): number {
    return this.quantidade;
  }
}

// Shorthand — declara e atribui no construtor
class Usuario {
  constructor(
    public  id:    number,
    public  nome:  string,
    private senha: string,
    public  role:  Role = Role.USER
  ) {}
}
```

---

## Generics

```typescript
// Função genérica — funciona com qualquer tipo
const primeiro = <T>(lista: T[]): T => {
  return lista[0];
};

primeiro([1, 2, 3]);        // retorna number
primeiro(["a", "b", "c"]); // retorna string

// Interface genérica
interface Resposta<T> {
  dados:    T;
  sucesso:  boolean;
  mensagem: string;
}

const resposta: Resposta<Produto> = {
  dados:    { id: 1, nome: "Produto X", preco: 10, quantidade: 5 },
  sucesso:  true,
  mensagem: "Ok",
};
```

---

## tsconfig.json — Configurações Essenciais

```json
{
  "compilerOptions": {
    "target": "ES6",           // versão do JavaScript gerado
    "module": "commonjs",      // sistema de módulos (Node.js)
    "rootDir": "./src",        // pasta dos arquivos .ts
    "outDir": "./dist",        // pasta dos arquivos .js compilados
    "strict": true,            // ativa todas as verificações estritas
    "esModuleInterop": true    // compatibilidade com módulos ES
  }
}
```

---

## Boas Práticas

- Evite `any` — ele desativa as vantagens do TypeScript
- Use `interface` para objetos e classes, `type` para o restante
- Ative `strict: true` no `tsconfig.json`
- Use `enum` para valores fixos como roles e status
- Prefira tipar explicitamente em funções — parâmetros e retorno
- Use `?` para campos opcionais em vez de aceitar `undefined`

---

## Comparação Rápida — JS vs TS

```javascript
// JavaScript
function somar(a, b) {
  return a + b;
}
somar(1, "2"); // ✅ sem erro — retorna "12" (bug silencioso)
```

```typescript
// TypeScript
function somar(a: number, b: number): number {
  return a + b;
}
somar(1, "2"); // ❌ erro antes de rodar — salva de bugs
```

> 💡 **Resumindo:** TypeScript não muda o JavaScript — ele apenas adiciona uma camada de segurança que pega erros antes de rodar o código.