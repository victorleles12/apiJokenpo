const express = require('express');
let app = express();
let  {resultadoJogada} = require('./jogada')
let porta = 8000
let player = resultadoJogada()

app.get('/', (req, res)=>{
  res.send(player)
})

app.listen(porta, (req, res) =>{
  console.log(`Servidor rodando na porta ${porta}`)
})