// Importa o servidor HTTP nativo do Java
import com.sun.net.httpserver.HttpServer;

// Representa a requisição e resposta HTTP
import com.sun.net.httpserver.HttpExchange;

// Usado para enviar dados na resposta
import java.io.OutputStream;

// Permite definir a porta do servidor
import java.net.InetSocketAddress;

public class SimpleServer {

    // Método principal (ponto de entrada do programa)
    public static void main(String[] args) throws Exception {

        // Cria o servidor HTTP na porta 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // ============================
        // ROTA /hello
        // ============================
        server.createContext("/hello", (HttpExchange exchange) -> {

            // JSON manual como String
            String response = "{\"message\":\"Hello World\"}";

            // Envia código HTTP 200 (OK)
            exchange.sendResponseHeaders(200, response.length());

            // Abre fluxo de saída para enviar resposta
            OutputStream os = exchange.getResponseBody();

            // Escreve o JSON na resposta
            os.write(response.getBytes());

            // Fecha o fluxo
            os.close();
        });

        // ============================
        // ROTA /status
        // ============================
        server.createContext("/status", (HttpExchange exchange) -> {

            // JSON manual informando status da API
            String response = "{\"status\":\"ok\",\"framework\":\"java puro\"}";

            // Envia código HTTP 200 (OK)
            exchange.sendResponseHeaders(200, response.length());

            // Abre fluxo de saída
            OutputStream os = exchange.getResponseBody();

            // Escreve o JSON
            os.write(response.getBytes());

            // Fecha o fluxo
            os.close();
        });

        // Inicia o servidor
        server.start();

        // Mensagem no terminal
        System.out.println("Servidor rodando na porta 8080");
    }
}