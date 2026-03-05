//Modelo de servidor básico usando Node.js
const http = require('http');

//Criando o servidor
const server = http.createServer((req, res) => {

//Definindo o tipo de conteúdo da resposta
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bem vindo ao Servidor!\n');

  if (req.url === '/status') {
    res.statusCode = 200;

//Outra maneira de enviar a resposta
    res.end('Servidor está funcionando!\n');
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada!\n');
  }
});

//Definindo o tipo de conteúdo da resposta como JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({
  status: "ok",
  framework: "node_puro"
}));

//Maneira mais simples de iniciar o servidor
server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

//Outra maneira de iniciar o servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Criando um endpoint para retornar a hora atual
if (req.url === '/time') {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    time: new Date()
  }));
}

//Criando um endpoint para retornar o nome do usuário passado na URL
if (req.url.startsWith('/user/')) {
  const name = req.url.split('/')[2];

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    user: name
  }));
}

