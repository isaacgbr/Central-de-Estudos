package com.estudos.springbootapi;

// Importa as anotações do Spring
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

// Diz ao Spring que esta classe controla rotas da API
@RestController

public class HelloController {

    // =========================
    // ROTA 1 - Hello World
    // http://localhost:8080/hello
    // =========================
    @GetMapping("/hello")
    public Map<String, String> hello() {

        // Retorna JSON automaticamente
        return Map.of("message", "Hello World");

    }

    // =========================
    // ROTA 2 - STATUS
    // http://localhost:8080/status
    // =========================
    @GetMapping("/status")
    public Map<String, String> status() {

        return Map.of(
            "status", "ok",
            "framework", "Spring Boot"
        );

    }

    // =========================
    // ROTA 3 - HORA ATUAL
    // http://localhost:8080/time
    // =========================
    @GetMapping("/time")
    public Map<String, String> time() {

        return Map.of(
            "time", LocalDateTime.now().toString()
        );

    }

    // =========================
    // ROTA 4 - USER
    // http://localhost:8080/user/Isaac
    // =========================
    @GetMapping("/user/{name}")
    public Map<String, String> user(@PathVariable String name) {

        return Map.of(
            "user", name
        );

    }
}