const express = require('express');
const app = express();

//Criando um endpoint para retornar o status do servidor
app.get('/status', (req, res) => {
  res.json({
    status: "ok",
    framework: "express"
  });
});

//Criando um endpoint para retornar a hora atual
app.get('/time', (req, res) => {
  res.json({
    time: new Date()
  });
});

//Criando um endpoint para retornar o nome do usuário passado na URL
app.get('/user/:name', (req, res) => {
  res.json({
    user: req.params.name
  });
});