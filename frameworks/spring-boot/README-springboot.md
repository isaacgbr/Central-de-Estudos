# 🍃 Spring Boot — Guia de Referência Rápida

> Resumo introdutório sobre Spring Boot — framework Java para criação de APIs REST.

---

## O que é Spring Boot?

Spring Boot é um **framework Java** para criar aplicações backend de forma rápida. Ele é a versão simplificada do Spring Framework — elimina a necessidade de configurações complexas e já vem com tudo pronto para rodar.

```
Java + Spring Boot = Backend profissional
```

| | Node.js + Express | Spring Boot |
|--|-------------------|-------------|
| **Linguagem** | JavaScript | Java |
| **Configuração** | Manual e simples | Automática |
| **Uso no mercado** | Startups e web | Empresas e bancos |
| **Performance** | Leve | Robusto |

---

## Instalação e Configuração

**1. Instalar o JDK 17 ou superior**
```
https://www.oracle.com/java/technologies/downloads
```

**2. Gerar o projeto no Spring Initializr**
```
https://start.spring.io
```

Configurações recomendadas:
- Project: **Maven**
- Language: **Java**
- Spring Boot: **3.x (versão mais recente)**
- Dependências: **Spring Web · Spring Data JPA · MySQL Driver**

**3. Importar na IDE**
- Recomendado: **IntelliJ IDEA** ou **Eclipse**
- Abrir a pasta do projeto gerado

**4. Rodar o projeto**
```bash
./mvnw spring-boot:run
```

---

## Estrutura de Pastas

```
src/
└── main/
    ├── java/
    │   └── com/exemplo/projeto/
    │       ├── controllers/   ← recebe as requisições HTTP
    │       ├── services/      ← lógica de negócio
    │       ├── repositories/  ← acesso ao banco de dados
    │       ├── models/        ← entidades do banco
    │       └── Main.java      ← ponto de entrada
    └── resources/
        └── application.properties ← configurações (banco, porta etc.)
```

---

## application.properties — Configurações Essenciais

```properties
# Porta do servidor
server.port=8080

# Banco de dados MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/estoque
spring.datasource.username=root
spring.datasource.password=sua_senha

# JPA — cria/atualiza tabelas automaticamente
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Model — Entidade do Banco

```java
import jakarta.persistence.*;

@Entity                        // mapeia a classe para uma tabela
@Table(name = "produtos")      // nome da tabela no banco
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto incremento
    private Long id;

    @Column(nullable = false)  // campo obrigatório
    private String nome;

    private Double preco;
    private Integer quantidade;
    private Boolean ativo = true;

    // Getters e Setters
    public Long getId()              { return id; }
    public void setId(Long id)       { this.id = id; }
    public String getNome()          { return nome; }
    public void setNome(String nome) { this.nome = nome; }
}
```

---

## Repository — Acesso ao Banco

```java
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository já traz os métodos prontos — não precisa escrever SQL
// JpaRepository<Entidade, TipoDoId>
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    // Métodos prontos: findAll(), findById(), save(), deleteById()

    // Método customizado — Spring gera o SQL automaticamente
    List<Produto> findByAtivoTrue();
    List<Produto> findByNomeContaining(String nome);
}
```

---

## Service — Lógica de Negócio

```java
import org.springframework.stereotype.Service;
import java.util.List;

@Service // indica que é um Service para o Spring gerenciar
public class ProdutoService {

    private final ProdutoRepository repository;

    // Injeção de dependência via construtor
    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    public Produto buscarPorId(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    public Produto criar(Produto produto) {
        return repository.save(produto);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
```

---

## Controller — Endpoints HTTP

```java
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController            // indica que é um controller REST
@RequestMapping("/produtos") // prefixo de todas as rotas
public class ProdutoController {

    private final ProdutoService service;

    public ProdutoController(ProdutoService service) {
        this.service = service;
    }

    @GetMapping             // GET /produtos
    public List<Produto> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")    // GET /produtos/1
    public Produto buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping            // POST /produtos
    public ResponseEntity<Produto> criar(@RequestBody Produto produto) {
        return ResponseEntity.status(201).body(service.criar(produto));
    }

    @DeleteMapping("/{id}") // DELETE /produtos/1
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
```

---

## Anotações Essenciais

| Anotação | Onde usar | Significado |
|----------|-----------|-------------|
| `@Entity` | Model | Mapeia classe para tabela do banco |
| `@Id` | Model | Define a chave primária |
| `@GeneratedValue` | Model | Auto incremento do ID |
| `@Column` | Model | Configura a coluna |
| `@Service` | Service | Marca como serviço gerenciado pelo Spring |
| `@RestController` | Controller | Marca como controller REST |
| `@RequestMapping` | Controller | Define o prefixo das rotas |
| `@GetMapping` | Controller | Rota GET |
| `@PostMapping` | Controller | Rota POST |
| `@PutMapping` | Controller | Rota PUT |
| `@DeleteMapping` | Controller | Rota DELETE |
| `@RequestBody` | Parâmetro | Lê o corpo da requisição |
| `@PathVariable` | Parâmetro | Lê parâmetro da URL |

---

## Comparação — Node.js/Express vs Spring Boot

| | Node.js + Express | Spring Boot |
|--|-------------------|-------------|
| **Rotas** | `router.get("/", controller)` | `@GetMapping` |
| **Controller** | Classe com métodos | Classe com `@RestController` |
| **Service** | Classe exportada | Classe com `@Service` |
| **Banco** | Manual (Sequelize/Prisma) | Automático com JPA |
| **Configuração** | `server.js` | `application.properties` |

---

## Boas Práticas

- Sempre use **injeção de dependência via construtor**
- Mantenha a lógica no **Service** — controller só recebe e responde
- Use `ResponseEntity` para controlar o status HTTP da resposta
- Configure o banco em `application.properties` — nunca no código
- Use `@Column(nullable = false)` para campos obrigatórios

---

> 💡 **Resumindo:** Spring Boot é o Node.js/Express do mundo Java — a estrutura é muito parecida. Se você já domina o padrão Controller → Service → Repository, vai se adaptar rápido.