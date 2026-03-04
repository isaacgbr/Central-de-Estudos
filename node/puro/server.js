// Importa módulo HTTP nativo do Node
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {

    // ==========================
    // ROTA /hello
    // ==========================
    if (req.url === '/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello World' }));
        return;
    }

    // ==========================
    // ROTA /status (DESAFIO)
    // ==========================
    if (req.url === '/status' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: "ok",
            framework: "node puro"
        }));
        return;
    }

    // ==========================
    // ROTA /time (DESAFIO)
    // ==========================
    if (req.url === '/time' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            time: new Date()
        }));
        return;
    }

    // ==========================
    // ROTA /user/{name} (DESAFIO)
    // ==========================
    if (req.url.startsWith('/user/') && req.method === 'GET') {
        const name = req.url.split('/')[2];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            user: name
        }));
        return;
    }

    // Caso nenhuma rota seja encontrada
    res.writeHead(404);
    res.end();
});

// Inicia servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor Node rodando na porta 3000');
});